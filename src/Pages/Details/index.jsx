import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListId } from '../../Store/actions/movie.js';
import { Card } from "antd";
import Layout from "../../HOC/Layout/index.jsx";
import {Row,Col,Typography} from 'antd';
import moment from 'moment';
import './style.css'
import {NavLink} from 'react-router-dom'

export default function Detail() {
    const {Title} = Typography;
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchListId(params.id));
    },);
    const filmDetail = useSelector((state) => state.movie.movieDetail);

    return <Layout>
        {filmDetail ? <div>
            <Row>
                <Col className="img_detail" span={4}>
                    <img src={filmDetail.hinhAnh} alt={filmDetail.tenPhim}/>
                    <div className="movie__detail"></div>
                    <div className="movie_trailer">
                        <a href={filmDetail.trailer}><i className="fas fa-play"></i></a>
                        
                    </div>
                </Col>
                <Col span={8}>
                    <Title level={5}>{moment(filmDetail.ngayKhoiChieu).format('dd-mm-yyyy')}</Title>
                    <Title level={2}>{filmDetail.tenPhim}</Title>
                    <Title level={2}>Nội dung: {filmDetail.moTa}</Title>
                </Col>
            </Row>
        </div> : "detail"}
    </Layout>;
}
