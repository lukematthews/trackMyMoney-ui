import React, { Component } from "react";
import PropTypes from "prop-types";
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { connect } from "react-redux";
export default class EditableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.patterns,
      newInput: "",
      showBullets: true,
    };
    this.handleListItemChange = this.handleListItemChange.bind(this);
    this.getList = this.getList.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleListItemChange(event, index) {
    const newList = [...this.state.list];
    newList[index] = event.target.value;
    this.setState(
      {
        list: newList,
      },
      () => {
        this.props.onListChange(this.state.list);
      }
    );
  }

  setList(newList) {
    console.log("Setting list in state!");
    this.setState({ list: newList });
  }

  updateList(list) {
    this.setState({ list: list }, () =>
      this.props.onListChange(this.state.list)
    );
  }

  deleteItem(e) {
    e.preventDefault();
    const newList = this.state.list;
    newList.splice(e.currentTarget.getAttribute("data-item"), 1);
    this.state.list = newList;
    this.setState(this.state, () => {
      this.props.onListChange(this.state.list);
    });
  }

  getList() {
    return this.state.list.map((elem, index) => {
      return (
        <MDBRow className="g-0" key={index}>
          <MDBCol>
            <input
              className="form-control"
              type="text"
              value={elem}
              placeholder={this.props.placeholder}
              onChange={(e) => {
                this.handleListItemChange(e, index);
              }}
            />
          </MDBCol>
          <MDBCol>
            <MDBBtn
              rounded
              floating
              tag="a"
              className="p-0"
              color="secondary"
              onClick={this.deleteItem}
              data-item={index}
            >
              <MDBIcon fas icon="times-circle" />
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      );
    });
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onKeyUp(event) {
    if (event.key === "Enter" && event.target.value.trim(" ").length > 0) {
      // this.state.list = [...this.state.list].concat(event.target.value);
      // this.state.newInput = "";
      this.setState(
        { list: [...this.state.list].concat(event.target.value), newInput: "" },
        () => {
          this.props.onListChange(this.state.list);
        }
      );
    }
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="react-list-editable">
        {this.getList()}
        <MDBRow className="g-0">
          <MDBCol>
            <input
              name="newInput"
              className="form-control"
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
              placeholder="Press enter to add new value"
              value={this.state.newInput}
            />
          </MDBCol>
          <MDBCol></MDBCol>
        </MDBRow>
      </div>
    );
  }
}

EditableList.propTypes = {
  list: PropTypes.array.isRequired,
  showBullets: PropTypes.bool,
  onListChange: PropTypes.func.isRequired,
};

EditableList.defaultProps = {
  list: [],
  showBullets: true,
};

// const mapStateToProps = (state) => {
//   return {
//     patterns: !(
//       state.labelConfigPage.label && state.labelConfigPage.label.patterns
//     )
//       ? []
//       : state.labelConfigPage.label.patterns.map((pattern) => pattern.pattern),
//   };
// };

// export default connect(mapStateToProps)(EditableList);
