import React, { Component } from "react";
import "./styles/BadgesList.css";
import twitterLogo from "../images/twitter.svg";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

export class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h1>No Badges where found</h1>
          <Link className="btn btn-primary" to="/badges/new">
            Create your first Badge!
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="badge-container">
                {/* <Gravatar
                className="badge-container__user-image"
                email = {badge.email}
                /> */}
                <img
                  className="badge-container__user-image"
                  src={badge.avatarUrl}
                  alt="UserImage"
                />
                <div className="badge-container__information">
                  <div className="badge-container__information--name">
                    {badge.firstName} {badge.lastName}
                  </div>
                  <a
                    className="badge-container__information--twitter"
                    href={`https://twitter.com/${badge.twitter}`}
                  >
                    <img src={twitterLogo} alt="twitterLogo" />
                    <div>@{badge.twitter}</div>
                  </a>
                  <div className="badge-container__information--job-title">
                    {badge.jobTitle}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
