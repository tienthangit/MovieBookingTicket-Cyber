import React, { Component } from "react";
import { fetchBanners } from "../../Store/actions/banner";
import { connect } from "react-redux";
import { Carousel } from 'antd';

class Home extends Component {
  render() {

    return (
      <div>
       
          {/* {this.props.bannerList.content.map((item) => (
            <img src={item.hinhAnh} alt={item.maBanner} />
          ))} */}

      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchBanners);
  }
}

const mapStateToProps = (state) => {
  return {
    bannerList: state.banner.bannerList,
  };
};

export default connect(mapStateToProps)(Home);
