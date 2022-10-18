import React from "react";
import { Accordion, Table, Button } from "react-bootstrap";
import eventBus from "./EventBus";
import "./Transactions.css";

export default class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      labels: {},
      hasFilters: false,
    };
    this.isTransactionVisible = this.isTransactionVisible.bind(this);
    this.updateLabelsState = this.updateLabelsState.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
  }

  componentDidMount() {
    eventBus.on("labelVisibiltyChanged", (data) => {
      this.setState(this.updateLabelsState(data.labels));
    });
    this.state.items.number = 0;
    this.fetchData();
  }

  fetchData() {
    let url =
      "http://localhost:3000/api/month?sort=monthValue,desc&size=1&page=" +
      this.state.items.number;

    fetch(url, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          let state = this.updateLabelsState(null);
          state.isLoaded = true;
          state.items = result;
          this.setState(state);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  nextMonth() {
    this.state.items.number = this.state.items.number - 1;
    this.setState(this.state);
    this.fetchData();
    eventBus.dispatch("monthChanged", { page: this.state.items.number });
  }

  previousMonth() {
    this.state.items.number = this.state.items.number + 1;
    this.setState(this.state);
    this.fetchData();
    eventBus.dispatch("monthChanged", { page: this.state.items.number });
  }

  updateLabelsState(labels) {
    let hasFilter = false;
    if (labels) {
      hasFilter = Object.values(labels).find((label) => label.isFilter == true);
    }
    return { labels: labels, hasFilters: hasFilter ? true : false };
  }

  isTransactionVisible(transaction) {
    if (this.state.hasFilters) {
      if (!this.state.labels[transaction.labelId]) {
        return false;
      } else {
        return this.state.labels[transaction.labelId].isFilter;
      }
    }
    return true;
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <Table>
          <tbody>
            <tr>
              <td>Error: {error.message}</td>
            </tr>
          </tbody>
        </Table>
      );
    } else if (!isLoaded) {
      return (
        <Table>
          <tbody>
            <tr>
              <td>Loading...</td>
            </tr>
          </tbody>
        </Table>
      );
    } else {
      return (
        <>
          {this.state.items.last == true && (
            <Button
              variant="outline-primary"
              onClick={this.previousMonth}
              className="m-3"
              disabled
            >
              Previous Month
            </Button>
          )}
          <Button
            className="m-3"
            variant="outline-primary"
            onClick={this.nextMonth}
          >
            Next Month
          </Button>
          <Button variant="outline-primary" onClick={this.previousMonth}>
            Previous Month
          </Button>
          <Accordion defaultActiveKey="accordion-month-0">
            {items.content.map((item, index) => (
              <React.Fragment key={index}>
                <Accordion.Item eventKey={"accordion-month-" + index}>
                  <Accordion.Header className="bg-secondary bg-opacity-25">
                    <span className="fw-bold fs-2 mx-0">{item.display}</span>
                    <span>Spent: {item.debitAmount}</span>
                    <span>Earnt: {item.creditAmount}</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table className="table-sm">
                      <tbody>
                        {item.transactions
                          .filter((transaction) =>
                            this.isTransactionVisible(transaction)
                          )
                          .map((transaction, index) => {
                            return (
                              <React.Fragment key={"transaction-" + index}>
                                <tr>
                                  <td className="transactionText">
                                    {transaction.viewDate}
                                  </td>
                                  <td
                                    size="2"
                                    className="transactionText text-end"
                                  >
                                    {transaction.viewAmount}
                                  </td>
                                  <td>
                                    <a
                                      tabIndex="0"
                                      className="badge bg-primary btn transactionText"
                                      role="button"
                                      data-bs-toggle="popover"
                                      data-bs-trigger="focus"
                                      title=""
                                      data-bs-original-title="Label options"
                                      data-label-id={transaction.labelId}
                                    >
                                      {transaction.viewLabel}
                                    </a>
                                  </td>
                                  <td className="transactionText">
                                    {transaction.description}
                                  </td>
                                </tr>
                              </React.Fragment>
                            );
                          })}
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </React.Fragment>
            ))}
          </Accordion>
        </>
      );
    }
  }
}
