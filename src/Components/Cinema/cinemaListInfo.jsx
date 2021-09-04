import React from "react";
import { Tabs } from "antd";
import { connect } from 'react-redux';
import { Row, Col,Typography  } from 'antd';
import './style.css';
import moment from 'moment'
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
class CinemaListInfo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            tabPosition: "left",
        };
    }

    renderHeThongRap = () => {
        return this.props.cinemaList?.map((item, index) => {
            let { tabPosition } = this.state;
            const { Title } = Typography;
            return <TabPane tab={<img src={item.logo} alt={item.tenHeThongRap} width="70" />} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {item.lstCumRap?.map((cumRap, index) => {
                        return <TabPane tab={<div><img src={cumRap.hinhAnh} alt={cumRap.tenCumRap} width="70" /> {cumRap.tenCumRap}</div>} key={index}>
                            {/* load phim tuong ung */}
                            {cumRap.danhSachPhim.slice(0,5).map((phim,index) =>{
                                return <Row key={index}>
                                <Col span={2}><img src={phim.hinhAnh} alt={phim.tenPhim} width="95%" height="100%"/></Col>
                                <Col span={16}>
                                  <Title level={3}>{phim.tenPhim}</Title>
                                  <Title level={5}>{cumRap.diaChi}</Title>
                                  {phim.lstLichChieuTheoPhim?.slice(0,12).map((lichChieu,index) =>{
                                      return <NavLink to="/">{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</NavLink>
                                  })}
                                </Col>
                              </Row>
                            })}
                        </TabPane>
                    })}
                </Tabs>
            </TabPane>
        })
    }

    render() {
        const { tabPosition } = this.state;
        return (
            <>
                <Tabs tabPosition={tabPosition}>
                    {this.renderHeThongRap()}
                </Tabs>
            </>
        );
    }
    componentDidMount() {
        // const logoInfoId = this.props.match.params.id;
        // this.props.dispatch(fetchListInfo(logoInfoId));
    }
}

const mapStateToProps = state => {
    return {
        cinemaList: state.cinema.cinemaList,
    }
}

export default connect(mapStateToProps, null)(CinemaListInfo);
