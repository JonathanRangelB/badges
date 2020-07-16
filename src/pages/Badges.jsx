import React, { Component } from "react";
import "./styles/Badges.css";
import logo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import Api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

export class Badges extends Component {
  constructor(props) {
    //solo usamos constructor si necesitamos enlazar eventos del padre o si necesitamos inicializar el estado
    super(props); //si o si, debemos de llamar al constructor padre y mandarle los props, en este caso el padre es Component
    this.state = {
      data: undefined,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(() => this.fetchData(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await Api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("5. componentDidUpdate()");

  //   console.log({
  //     prevProps: prevProps,
  //     prevState: prevState,
  //   });

  //   console.log({
  //     props: this.props,
  //     state: this.state,
  //   });
  // }

  // componentWillUnmount() {
  //   console.log("6. componentWillUnmount()");
  //   clearTimeout(this.timer) //antes de desmontar el componente, nos aseguramos de limpiar el setTimeout del eventloop
  // }

  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges__conf-logo" src={logo} alt="Logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container"></div>
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
