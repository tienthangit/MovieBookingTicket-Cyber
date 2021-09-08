import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListId } from '../../Store/actions/movie.js';
import {  Modal, Rate } from "antd";
import Layout from "../../HOC/Layout/index.jsx";
import { Row, Col, Typography, Button, Tabs  } from 'antd';
import moment from 'moment';
import './style.css';
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import { fetchInfoCinemaDetail } from '../../Store/actions/cinema'

export default function Detail() {
    const { Title } = Typography;
    const { TabPane } = Tabs;
    const [state, setState] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(fetchListId(params.id));
        dispatch(fetchInfoCinemaDetail(params.id))
    }, []);
    const filmDetail = useSelector((state) => state.cinema.InfoCinemaDetail);

    //show modal video
    const showModal = () => {
        setState(true);
    }
    const handleCancel = () => {
        setState(false);
    }
    const handleOk = () => {
        setState(false);
    }

    return <Layout>
        {filmDetail ? <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, width: "100%", height: 'auto', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <CustomCard
                effectColor="#C780FF" // required
                color="#14AEFF" // default color is white
                blur={10} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <Row>
                    <Col className="img_detail" span={4}>
                        <img src={filmDetail.hinhAnh} alt={filmDetail.tenPhim} />
                        <div className="movie__detail"></div>
                        <div className="movie_trailer">
                            <Button type="primary" onClick={showModal}><i className="fas fa-play"></i></Button>
                            <Modal title={filmDetail.tenPhim} width="50%" footer={null} visible={state} onOk={handleOk} onCancel={handleCancel}>
                                <iframe src={filmDetail.trailer} height="500" width="100%" allow="autoplay" frameBorder="0">
                                </iframe>
                            </Modal>
                        </div>
                    </Col>
                    <Col span={8}>
                        <Title level={5}>{moment(filmDetail.ngayKhoiChieu).format('dd-mm-yyyy')}</Title>
                        <Title level={2}>{filmDetail.tenPhim}</Title>
                        <Title level={2}>Nội dung: {filmDetail.moTa}</Title>
                    </Col>
                    <Col span={4}>
                        <div className={`c100 p${filmDetail.danhGia} big`}>
                            <span>{filmDetail.danhGia}%</span>
                            <div className="slice">
                                <div className="bar" />
                                <div className="fill" />
                            </div>
                        </div>
                        <h1><Rate allowHalf value={filmDetail.danhGia / 2} /></h1>
                    </Col>
                </Row>
                <Tabs tabPosition={'left'}>
                    {filmDetail ? filmDetail.heThongRapChieu?.map((heThongRapChieu, index) => {
                        return <TabPane tab={<div>
                            <img src={heThongRapChieu.logo} alt={heThongRapChieu.maPhim} style={{ width: 30 }} /><span>{heThongRapChieu.tenHeThongRap}</span>
                        </div>} key={index}>
                            {heThongRapChieu.cumRapChieu?.map((cumRapChieu, index) => {
                                return <Row key={index}>
                                    <Col span={2}><img src={cumRapChieu.hinhAnh} alt={cumRapChieu.temCumRap} style={{ width: 150 }} /></Col>
                                    <Col span={12}>
                                        <Title level={4}>{cumRapChieu.tenCumRap}</Title>
                                        <Title level={5}>{cumRapChieu.diaChi}</Title>
                                    </Col>
                                    <Col span={6}>
                                        {cumRapChieu.lichChieuPhim?.map((lichChieuPhim, index) => {
                                            return <div key={index}>
                                                {moment(lichChieuPhim.ngayChieuGioChieu).format('hh:mm A')}
                                            </div>
                                                
                                        })}
                                    </Col>

                                </Row>

                            })}
                        </TabPane>
                    }) : 'none'}
                </Tabs>
            </CustomCard>
        </div> : "detail"}
    </Layout>;
}
