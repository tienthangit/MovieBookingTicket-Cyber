import React, { useState } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../Store/constants/movieConstants";
import { NavLink } from "react-router-dom";
import "./MultipleRowSlick.module.css";
import styleSlick from "./MultipleRowSlick.module.css";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./style.css";
import arrowBack from '../../assets/img/back-session.png'
import arrowNext from '../../assets/img/next-session.png'
import { Modal } from 'antd';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", right: "-50px",backgroundImage: `url(${arrowNext})` }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px", backgroundImage: `url(${arrowBack})`}}
      onClick={onClick}
    />
  );
}

export default function MultipleRowSlick(props) {
  const dispatch = useDispatch();
  const { arrFilm, dangChieu, sapChieu } = useSelector(
    (state) => state.movieReducers
  );

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };


  const [state, setState] = useState({
    visible: false
  });
  const [curPhim, setCurPhim] = useState(null);

  const showModal = () => {
    setState({
      visible: true
    });
  };

  const hideModal = () => {
    setState({
      visible: false
    });
  };

  let phimDangChieu = dangChieu === true ? "active_Film" : "none_active_Film"
  let phimSapChieu = sapChieu === true ? "active_Film" : "none_active_Film"

  return (

    <div id="lichChieu">
      <div className="dvShowTimes flex items-center justify-center my-9">
        <span
          className={`spTitle mr-10 cursor-pointer font-semibold ${phimDangChieu}`}
          type="primary"
          danger
          onClick={() => {
            const action = { type: SET_FILM_DANG_CHIEU };
            dispatch(action);
          }}
        >
          Đang Chiếu
        </span>
        <span
          className={`spTitle ml-10 cursor-pointer font-semibold ${phimSapChieu}`}
          type="primary"
          danger
          onClick={() => {
            const action = { type: SET_FILM_SAP_CHIEU };
            dispatch(action);
          }}
        >
          Sắp Chiếu
        </span>
      </div>

      <Slider {...settings}>
        {arrFilm ? arrFilm.slice(0, 20).map((phim, index) => {
          return (
            <div key={index} className="flip-card px-2">
              <div className="flip-card-front" style={{ background: `url(${phim.hinhAnh})` }}>
                <img src={phim.hinhAnh} className="opacity-0 w-full imd-detail-mul" alt="Avatar" />
                <div className="movie-detail-mul"></div>
                <div className="movie-trailer-mul">
                  <button onClick={() => {
                    showModal()
                    setCurPhim(phim)
                  }}>
                    <PlayCircleOutlined className="play-video-mul" />
                  </button>
                  {curPhim && <Modal title={curPhim.tenPhim} visible={state.visible} footer={null} onCancel={hideModal}>
                    <iframe width="100%" height="300" src={curPhim.trailer} allow="autoplay" frameBorder="0">
                    </iframe>
                  </Modal>}
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <NavLink className="movie_detail" to={`/detail/${phim.maPhim}`}>
                  <button className="btnDatVe">ĐẶT VÉ</button>
                </NavLink>
              </div>
              {phim.hot ? <button className="btn_hot">HOT</button> : <></>}
            </div>
          );
        })
          : "none"}
      </Slider>
    </div>
  );
}
