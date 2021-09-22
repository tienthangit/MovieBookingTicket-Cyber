import React, { useEffect, useState } from 'react'
import { Tabs, Input, Button, Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { CapNhatThongTinNguoiDung } from '../../Store/actions/userActions'
import moment from 'moment';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, CloseOutlined } from "@ant-design/icons";
import { NavLink } from 'react-router-dom';
import logoSignIn from "../../assets/logoSignIn.png";
import { useFormik } from "formik";

const { TabPane } = Tabs;
const { Text } = Typography;

export default function Profile(props) {
  const dispatch = useDispatch();

  const { infoUser } = useSelector((state) => state.userReducer);

  const [isUpdatingProfile, setUpdatingProfile] = useState(false);
  // state for form
  const [userInfoState, setUserInfoState] = useState(null);

  const [userInfo, setUserInfo] = useState(null);

  const getInfoUser = () => {
    const { userLogin } = props.infoUser || '';
    const { taiKhoan, matKhau, email, hoTen, soDT, maNhom, loaiNguoiDung } = userLogin || '';
    const user = {
      taiKhoan: taiKhoan,
      matKhau: matKhau,
      email: email,
      soDt: soDT,
      maNhom: maNhom,
      maLoaiNguoiDung: loaiNguoiDung,
      hoTen: hoTen
    };
    setUserInfo(user);
    setUserInfoState(user)
  }


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


  const handleSubmit = (e) => {
    e.preventDefault();
    getInfoUser();

    console.log('userInfo: ', userInfoState);
  }
  const handleChange = (e) => {
    setUserInfoState({
      ...userInfoState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Thông tin cá nhân" key="1">
        {infoUser ? <>
          <form onSubmit={handleSubmit} className="signIn-form sm:container rounded-lg">
            <NavLink to="/"><img className="logoLogin" src={logoSignIn} alt="logo" /></NavLink>
            <NavLink to="/" exact className="btnClose text-center"><CloseOutlined /></NavLink>
            <div className="mb-2">
              <Text className="text-gray-500" strong> FullName:</Text>
              <Input name="hoTen" size="large" prefix={<UserOutlined />} onChange={handleChange} value={infoUser?.hoTen || ''} />
            </div>
            <div className="mb-2">
              <Text className="text-gray-500" strong>Username:</Text>
              <Input name="taiKhoan" size="large" prefix={<UserOutlined />} onChange={handleChange} value={infoUser?.taiKhoan || ''} />
            </div>
            <div className="mb-2">
              <Text className="text-gray-500" strong>Password:</Text>
              <Input.Password name="matKhau" size="large" prefix={<LockOutlined />} onChange={handleChange} value={infoUser?.matKhau || ''} />
            </div>
            <div className="mb-2">
              <Text className="text-gray-500" strong>Email:</Text>
              <Input name="email" size="large" prefix={<MailOutlined />} onChange={handleChange} value={infoUser?.email || ''} />
            </div>
            <div className="mb-2">
              <Text className="text-gray-500" strong>Phone:</Text>
              <Input name="soDt" size="large" prefix={<PhoneOutlined />} onChange={handleChange} value={infoUser?.soDt || ''} />
            </div>

            <Button className="btnLogin my-3" htmlType="submit" type="primary" block>Lưu thay đổi
            </Button>
          </form>
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
