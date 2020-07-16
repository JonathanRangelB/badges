import React, { useState } from "react";
import "./styles/BadgesList.css";
import twitterLogo from "../images/twitter.svg";
import { Link } from "react-router-dom";
// import Gravatar from "./Gravatar";

function BadgesList(props) {
  const badges = props.badges;

  const [query, setQuery] = useState("");

  const filteredBadges = badges.filter((badge) => {
    return `${badge.firstName} ${badge.lastName}`
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(
        query
          .normalize("NFKD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      );
  });

  if (filteredBadges.length === 0) {
    return (
      <>
        <div className="form-group">
          <label>Filter Badge:</label>
          <input
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h1>No Badges where found</h1>
        <Link className="btn btn-primary" to="/badges/new">
          Create your first Badge!
        </Link>
      </>
    );
  }
  return (
    <>
      <div className="form-group">
        <label>Filter Badge:</label>
        <input
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/Badges/${badge.id}`}
              >
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
                    <div
                      className="badge-container__information--twitter"
                      href={`https://twitter.com/${badge.twitter}`}
                    >
                      <img src={twitterLogo} alt="twitterLogo" />
                      <div>@{badge.twitter}</div>
                    </div>
                    <div className="badge-container__information--job-title">
                      {badge.jobTitle}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default BadgesList;
