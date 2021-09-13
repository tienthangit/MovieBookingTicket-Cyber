import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInfoCinema } from '../../Store/actions/cinema'
import moment from 'moment'
import './style.css';
import { Row, Col, Typography, Tabs } from 'antd';
import {NavLink} from 'react-router-dom'

export default function CinemaListInfo(props) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchInfoCinema)
	}, [dispatch])
	const cinemaList = useSelector((state) => state.cinema.cinemaList);
	const { TabPane } = Tabs;
	const { Text } = Typography;

	return (
		<Tabs tabPosition={'left'}>
			{cinemaList ? cinemaList.map((item, index) => {
				return <TabPane tab={<img src={item.logo} alt={item.tenHeThongRap} width='60' />} key={index}>
					<Tabs tabPosition={'left'}>
						{item.lstCumRap?.slice(0, 10).map((lstCumRap, index) => {
							return <TabPane key={index} tab={<div style={{ display: 'flex' }}>
								<img src={lstCumRap.hinhAnh} alt={lstCumRap.tenCumRap} style={{width:120, height: 70}} />
								<div className="lstCumRap-title">
									<Text strong>{lstCumRap.tenCumRap}</Text>
									<br />
									<Text style={{ textAlign: 'left', display: 'block' }} type="danger">Chi tiết</Text>
								</div>
							</div>}>
								<Tabs tabPosition={'left'}>
									{lstCumRap.danhSachPhim?.slice(0, 5).map((dsPhim, index) => {
										return <TabPane key={index} tab={<div style={{ display: 'flex', borderBottom:'1px solid #808080a3', paddingBottom:10 }}>
											<img src={dsPhim.hinhAnh} alt={dsPhim.tenPhim} style={{width:150, height: 120}} />
											<div className="dsPhim">
												<Text style={{ textAlign: 'left', display: 'block' }} type="primary">{dsPhim.tenPhim}</Text>
												<Text style={{ textAlign: 'left', display: 'block' }} type="primary">{lstCumRap.diaChi}</Text>
												<div className="grid grid-cols-3 gap-4">
													{dsPhim.lstLichChieuTheoPhim?.slice(0, 10).map((lichChieu, index) => {
														return <NavLink to='/' className="col-span-1 gioChieu">{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</NavLink>
													})}
												</div>
											</div>
										</div>}>
										</TabPane>
									})}
								</Tabs>
							</TabPane>
						})}
					</Tabs>
				</TabPane>
			}) : 'none'}
		</Tabs>
	)
}