import React, { useState, useEffect, useCallback, memo, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { Carousel, Typography, Card, Row, Button, Col, Pagination } from "antd";
import { fetchBanners } from "../../Store/actions/banner";
import { fetchListMovies } from "../../Store/actions/movie";
import { NavLink } from "react-router-dom";
import CinemaListInfo from "../../Components/Cinema/cinemaListInfo";
import { fetchInfoCinema } from "../../Store/actions/cinema";
import Layout from '../../HOC/Layout';


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
    dispatch(fetchListMovies(Page));
    dispatch(fetchInfoCinema());
  }, [Page]);

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
      <Row>
        {listFilmPages?.content.items.map((index) => (
          <Card
            key={index.maPhim}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={index.hinhAnh} />}
          >
            <Row gutter={16}>
              <Col className="gutter-row" span={16}>
                <Meta title={index.tenPhim} description="www.instagram.com" />
              </Col>
              <Col className="gutter-row" span={8}>
                <NavLink to={`/detail/${index.maPhim}`} component={Button}>
                  Detail
                </NavLink>
              </Col>
            </Row>
          </Card>
        ))}
      </Row>
      <Pagination
        defaultCurrent={Page}
        current={listFilmPages ? listFilmPages.content.currentPage : 1}
        onChange={handleChange}
        total={listFilmPages ? listFilmPages.content.totalCount : 1}
      />

      {/* infor cinema */}
      <CinemaListInfo />

      {/* footer */}
      
      </Layout>
    </Fragment>
  );
};

export default memo(Home);
