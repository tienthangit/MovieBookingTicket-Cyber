import React,{ useEffect, useState} from 'react'
import { Tabs, Input,Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {CapNhatThongTinNguoiDung} from '../../Store/actions/userActions'
import moment from 'moment';

const { TabPane } = Tabs;

export default function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CapNhatThongTinNguoiDung())
  },[dispatch])
  // const userLogin = useSelector((state) => state.userReducer.infoUser);
  const infoUser = useSelector((state) => state.userReducer.infoUser);

  const renderInfoUser = () => {
    return infoUser.thongTinDatVe?.map((info) => {
      return <div key={info.maVe} className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${info.hinhAnh})` }} title="Woman holding a mug">
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-l mb-2">{info.tenPhim}</div>
            <p className="text-gray-700 text-base"><b className="mr-2">Ngày đặt:</b>{moment(info.ngayDat).format('dd-mm-yyyy')}</p>
            <div className="text-sm">
              <p className="text-gray-900 leading-none"><b className="mr-2">Giá vé:</b>{info.giaVe}<span className="ml-1">VNĐ</span></p>
              <p className="text-gray-600"><b className="mr-2">Thời lượng phim:</b>{info.thoiLuongPhim}<span className="ml-1">phút</span></p>
            </div>
          </div>
        </div>
      </div>
    })
  }

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Thông tin cá nhân" key="1">
        {infoUser ? <>
          <Input size="large" value={infoUser.taiKhoan} prefix='Tài khoản: ' />
          <br />
          <Input type="password" size="large" value={infoUser.matKhau} prefix='Mật khẩu: ' />
          <br />
          <Input size="large" value={infoUser.hoTen} prefix='Họ tên: ' />
          <br />
          <Input size="large" value={infoUser.email} prefix='Email: ' />
          <br />
          <Input size="large" value={infoUser.soDt} prefix='Số điện thoại: ' />
          <br />
          <Button type="primary" danger>
            Lưu thay đổi
          </Button>
        </> : 'none'}

      </TabPane>
      <TabPane tab="Lịch sử đặt vé " key="2">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div>{renderInfoUser()}</div>
        </div>

      </TabPane>
    </Tabs>
  )
}
