import React, { Component } from "react";
import { fetchBanners } from "../../Store/actions/banner";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return <div>Home</div>;
  }
  componentDidMount() {
    this.props.dispatch(fetchBanners);
  }
}

export default connect()(Home);
