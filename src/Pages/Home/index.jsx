import React, { useEffect, memo, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { Typography } from "antd";
import CinemaListInfo from "../../Components/Cinema/cinemaListInfo";
import Layout from "../../HOC/Layout";
import {
  FetchListBannerActions,
  FetchListMovieAction,
} from "../../Store/actions/movieActions";
import MultipleRowSlick from "../../Components/RSlick/MultipleRowSlick";
import Slider from "react-slick";
import { getInfoBookingAction } from "../../Store/actions/bookingAction";
import { CapNhatThongTinNguoiDung, layThongTinNguoiDungAction } from "../../Store/actions/userActions";
import ReactPlayer from 'react-player'

const Home = (props) => {
  const dispatch = useDispatch();

  //antd
  const { Title } = Typography;
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //gui dispatch len middleware va call api
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(FetchListBannerActions());
    dispatch(FetchListMovieAction());
    dispatch(getInfoBookingAction());
    dispatch(layThongTinNguoiDungAction());
  }, [dispatch]);

  const bannerList = useSelector((state) => state.movieReducers.bannerList);

  console.log(props.bannerList);

  return (
    <Fragment>
      <Layout>
        <Slider {...settings}>
          {bannerList?.map((item) => (
            <img className="imgBanner" src={item.hinhAnh} alt={item.maBanner} />
          ))}
        </Slider>

        {/* movie selection */}
        <Title>Movie Selection</Title>
        <div className="container mx-auto">
          <MultipleRowSlick />
        </div>

        {/* infor cinema */}
        <div className="cinemaListInfo">
          <CinemaListInfo />
        </div>
        {/* <!-- Button trigger modal --> */}
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <ReactPlayer url='https://youtu.be/0tm9ZbDxtFc' />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default memo(Home);
