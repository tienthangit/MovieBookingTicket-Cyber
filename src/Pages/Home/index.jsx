import React, { Component } from "react";
import { fetchBanners } from "../../Store/actions/banner";
import { connect } from "react-redux";
import { Carousel,Typography  } from 'antd';
import './style.css'

class Home extends Component {
    
    render() {

        return (
            <div>
                <Carousel autoplay>
                    {this.props.bannerList.content?.map((item) => (
                        <img className="imgBanner" src={item.hinhAnh} alt={item.maBanner} />
                    ))}
                </Carousel>
                <h1>MOVIE SELECTION</h1>
                

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
