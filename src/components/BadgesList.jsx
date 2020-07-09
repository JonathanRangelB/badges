import React, { Component } from "react";
import "./styles/BadgesList.css";
import twitterLogo from "../images/twitter.svg";

export class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="badge-container">
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
