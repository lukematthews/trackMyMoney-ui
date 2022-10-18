import { Component } from "react";
import { connect } from "react-redux";
// import { toggleLabelFilter } from "./redux/actions";
import { XCircleFill } from "react-bootstrap-icons";

class SelectedLabels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
    };
    this.renderFilters = this.renderFilters.bind(this);
  }

  removeLabel(label) {
    let labelId = label.currentTarget.getAttribute("data-filter-id");
    labelId = labelId.replace("label-check-", "");
    this.state.labels[labelId].isFilter = false;
    this.setState({ labels: this.state.labels });
    // eventBus.dispatch("labelVisibiltyChanged", { labels: this.state.labels });

    //    toggleLabelFilter(label);
  }

  renderFilters() {
    if (!this.state.labels) {
      return null;
    }

    return Object.values(this.state.labels)
      .filter((filter) => filter.isFilter == true)
      .map((filter) => {
        return (
          <div className="bg-dark" key={"filterLabel-" + filter.id}>
            <Badge className="py-1">
              <span
                onClick={this.removeLabel}
                className="px-1"
                data-filter-id={filter.id}
              >
                <XCircleFill color="white"></XCircleFill>
              </span>
              {filter.label.name}
            </Badge>
          </div>
        );
      });
  }

  render() {
    return (
      <>
        <div className="card-body selectedLabelsTitle pb-1">
          <h5 className="card-title text-white">Selected Labels</h5>
        </div>
        <div className="card-body bg-dark">{this.renderFilters()}</div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { labels: [] };
}

export default connect(mapStateToProps)(SelectedLabels);
