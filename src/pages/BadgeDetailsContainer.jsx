import React from "react";

import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
  state = {
    loadig: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBadge = async () => {
    this.setState({ loadig: true, error: null });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loadig: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loadig: false, error: error });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loadig: false, data: data });
    } catch (error) {
      this.setState({ loadig: false, error: error });
    }
  };
  render() {
    if (this.state.loadig) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetails
        badge={this.state.data}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.handleDeleteBadge}
        modalIsOpen={this.state.modalIsOpen}
      />
    );
  }
}

export default BadgeDetailsContainer;
