import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      FirstName: "",
      LastName: "",
      Email: "",
      JobTitle: "",
      Twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: [e.target.value],
      },
    });
  };
  render() {
    return (
      <React.Fragment>

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.FirstName}
                lastName={this.state.form.LastName}
                twitter={this.state.form.Twitter}
                avatar="https://s.gravatar.com/avatar/b83608d9a393b24780d9cb9ee9bddddb?s=80"
                Email={this.state.form.Email}
                jobTitle={this.state.form.JobTitle}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
