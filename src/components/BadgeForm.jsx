import React, { Component } from "react";

export class BadgeForm extends Component {
  state = {
    FirstName: "",
    LastName: "",
    Email: "",
    JobTitle: "",
    Twitter: "",
  };
  handleChange = (e) => {
    // console.log({
    //     target: e.target.name,
    //     value: e.target.value
    // });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="FirstName"
              className="form-control"
              required
              value={this.state.FirstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="LastName"
              className="form-control"
              required
              value={this.state.LastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              type="email"
              name="Email"
              className="form-control"
              required
              value={this.state.Email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="JobTitle"
              className="form-control"
              required
              value={this.state.JobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="Twitter"
              className="form-control"
              required
              value={this.state.Twitter}
            />
          </div>
          <button onClick={this.handelClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
