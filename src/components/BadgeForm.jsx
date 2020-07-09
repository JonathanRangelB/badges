import React, { Component } from "react";

export class BadgeForm extends Component {
  // handleChange = (e) => {
  //   // console.log({
  //   //     target: e.target.name,
  //   //     value: e.target.value
  //   // });
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

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
      <React.Fragment>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="FirstName"
              className="form-control"
              required
              value={this.props.formValues.FirstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="LastName"
              className="form-control"
              required
              value={this.props.formValues.LastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              name="Email"
              className="form-control"
              required
              value={this.props.formValues.Email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="JobTitle"
              className="form-control"
              required
              value={this.props.formValues.JobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="Twitter"
              className="form-control"
              required
              value={this.props.formValues.Twitter}
            />
          </div>
          <button onClick={this.handelClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;
