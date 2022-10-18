import React, { Component } from "react";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setFile = this.setFile.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("uploadFile", this.state.file);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch("http://localhost:3000/api/do-upload", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());

        // check for error response
        if (!response.ok) {
          // get error message
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        console.log(data.message);
      })
      .catch((error) => {
        console.error("Error while uploading file!", error);
      });
  }

  setFile(file) {
    this.state.file = file;
    this.setState(this.state);
  }

  render() {
    return (
      <>
        <div>
          <form className="px-4 py-3" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleDropdownFormEmail1">File</label>
              <input
                type="file"
                className="form-control"
                id="exampleDropdownFormEmail1"
                onChange={(e) => this.setFile(e.target.files[0])}
              />
            </div>
            <button type="submit" className="my-3 btn btn-primary">
              Upload
            </button>
          </form>
        </div>
      </>
    );
  }
}
