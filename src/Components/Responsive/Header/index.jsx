import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import webLogo from '../../../assets/img/web-logo.png'
import { Tooltip, Avatar, Tabs } from 'antd';
import { createActions } from "../../../Store/constants/createAction";
import { CHUYEN_TAB_ACTIVE } from "../../../Store/constants/bookingConstant";
import { UserOutlined, TagsOutlined, HomeOutlined, DollarOutlined } from "@ant-design/icons";
import './header.css'

const { TabPane } = Tabs;



function HeaderMobile() {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userReducer.userLogin)
    const [state, setstate] = useState({
        isOn: false,
    });


    useEffect(() => {
        let navMobile = document.querySelector('.navMobile')
        let divOverlay = document.querySelector('.div__overlay')
        if (state.isOn)
        {
            navMobile.style.transform = 'translateX(0%)'
            navMobile.style.opacity = '1'
            divOverlay.style.opacity = '1'
            divOverlay.style.display = 'block'
        } else
        {
            navMobile.style.transform = 'translateX(-100%)'
            navMobile.style.opacity = '0'
            divOverlay.style.opacity = '0'
            divOverlay.style.display = 'none'

        }
    }, [state.isOn])

    const showNav = () => {
        setstate({
            ...state,
            isOn: !state.isOn
        });
    };

    const onChangeTab = (key) => {
        dispatch(createActions(CHUYEN_TAB_ACTIVE, key))
    }


    //---------- Xử lý đăng xuất
    const handleLogout = () => {
        localStorage.removeItem("USER_LOGIN");
        localStorage.removeItem("toKen");
        window.location.reload();
    };
    const text = <NavLink to="/" onClick={handleLogout} className="mx-2 text-xs">
        Đăng xuất
    </NavLink>




    return (
        <div className="navbar__Mobile bg-coolGray-100 text-coolGray-800">
            <div className="container flex justify-between items-center h-16 mx-auto">
                {/* <NavLink to="/">
                    <div className="flex justify-around items-center">
                        <img src={webLogo} alt="webLogo" width={50} />
                    </div>
                </NavLink> */}
                <div onClick={showNav} className="div__overlay"></div>
                <button onClick={showNav} className="lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div className="navMobile">
                    <Tabs tabPosition='left' defaultActiveKey='1' onChange={onChangeTab} >
                        <TabPane tab={<span className="text-xs"> <DollarOutlined style={{ fontSize: 16, margin: '10px 10px 10px 0' }} /> CHỌN GHẾ & THANH TOÁN </span>} key="1">
                        </TabPane>
                        <TabPane tab={<span className="text-xs"> <TagsOutlined style={{ fontSize: 16, margin: '10px 10px 10px 0' }} /> KẾT QUẢ </span>} key="2">
                        </TabPane>
                        <TabPane
                            tab={
                                <NavLink className="text-xs" to='/'>  <HomeOutlined style={{ fontSize: 16, margin: '10px 10px 10px 0' }} />TRANG CHỦ </NavLink>} key="3">
                        </TabPane>
                    </Tabs>
                </div>



                <h3 className="text-xs"> CHỌN GHẾ & THANH TOÁN </h3>

                <div className="flex justify-end items-center cursor-pointer">
                    <Tooltip placement="bottom" title={text}>
                        <Avatar className="text-xs"
                            style={{ backgroundColor: "#80808063", lineHeight: "22px" }}
                            icon={<UserOutlined />}
                        />
                        <span className="text-xs ml-1">{userLogin?.hoTen}</span>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile
