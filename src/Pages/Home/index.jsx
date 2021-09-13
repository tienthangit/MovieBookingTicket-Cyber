import React, { useState, useEffect, useCallback, memo, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { Carousel, Typography, Card, Row, Col, Pagination } from "antd";
import { fetchBanners } from "../../Store/actions/banner";
import { fetchListMovies } from "../../Store/actions/movie";
import { NavLink } from "react-router-dom";
import CinemaListInfo from "../../Components/Cinema/cinemaListInfo";
import { fetchInfoCinema } from "../../Store/actions/cinema";
import Layout from '../../HOC/Layout';
import { FetchListMovieAction } from "../../Store/actions/movieActions";
import MultipleRowSlick from "../../Components/RSlick/MultipleRowSlick";


const Home = () => {
  const [Page, setPage] = useState(1);
  const dispatch = useDispatch();
  const bannerList = useSelector((state) => state.banner.bannerList);

  //antd
  const { Title } = Typography;
  const { Meta } = Card;

  //gui dispatch len middleware va call api
  useEffect(() => {
    dispatch(fetchBanners);
    dispatch(FetchListMovieAction())
    dispatch(fetchListMovies(Page));
    dispatch(fetchInfoCinema());
  }, [dispatch,Page]);

  // lay danh sach phim phan trang
  const listFilmPages = useSelector((state) => {
    return state.movie.movieList;
  });

  const handleChange = useCallback((value) => {
    setPage(value);
  }, []);

  return (
    <Fragment>
      <Layout>
        {/* banner */}
        <Carousel autoplay>
          {bannerList.content?.map((item) => (
            <img className="imgBanner" src={item.hinhAnh} alt={item.maBanner} />
          ))}
        </Carousel>
        {/* movie selection */}
        <Title>Movie Selection</Title>
        <div className="container px-5 mx-auto " >
          <MultipleRowSlick/>
        </div>

        {/* infor cinema */}
        <div className="cinemaListInfo"><CinemaListInfo /></div>
      </Layout>
    </Fragment>
  );
};

export default memo(Home);
