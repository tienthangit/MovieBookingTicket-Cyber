import React, { useEffect } from "react";
import { Image, Menu, Button } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Tooltip, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";
import { useHistory } from "react-router";

export default function Header(props) {
  const history = useHistory();
  const userLogin = useSelector(state => state.userReducer.userLogin);

  // console.log(userLogin);
  const handleLogout = () => {
    localStorage.removeItem("USER_LOGIN");
    localStorage.removeItem("toKen");
    window.location.reload();
  };

  const text = (
    <NavLink to="/" onClick={handleLogout} className="mx-4">
      Đăng xuất
    </NavLink>
  );

  const renderUser = () => {
    if (userLogin?.hoTen) {
      return (
        <>
          <div className="flex justify-end items-center cursor-pointer">
            <Tooltip placement="bottom" title={text}>
              <Avatar
                style={{ backgroundColor: "#80808063", lineHeight: "22px" }}
                icon={<UserOutlined />}
              />
              <span className="ml-3">{userLogin?.hoTen}</span>
            </Tooltip>
            <span
              style={{
                border: "1px solid #e9e9e9",
                height: 25,
                margin: "0 10px",
              }}></span>
            <button onClick={() =>{
              history.push('/profile')
            }}> PROFILE </button>
          </div>
        </>
      );
    } 
      return (
        <>
          <Menu.Item key="HOME">
            <NavLink exact to="/signin">
              SIGN IN
            </NavLink>
          </Menu.Item>
          <Menu.Item key="NEWS">
            <NavLink exact to="/signup">
              SIGN UP
            </NavLink>
          </Menu.Item>
        </>
      );
  };

  return (
    <>
      <Menu mode="horizontal" className="bgColor">
        <div className="menuItem">
          <Menu.Item key="logo">
            <Image
              className="logo"
              src="https://tix.vn/app/assets/img/icons/web-logo.png"
            />
          </Menu.Item>
        </div>
        <div className="menuItem">
          <Menu.Item key="HOME">
            <NavLink exact to="/">
              HOME
            </NavLink>
          </Menu.Item>
          <Menu.Item key="NEWS">
            <NavLink exact to="/">
              NEWS
            </NavLink>
          </Menu.Item>
          <Menu.Item key="CONTACT">
            <NavLink exact to="/">
              CONTACT
            </NavLink>
          </Menu.Item>
          <Menu.Item key="ABOUT">
            <NavLink exact to="/">
              ABOUT
            </NavLink>
          </Menu.Item>
        </div>
        <div className="menuItem">{renderUser()}</div>
      </Menu>
    </>
  );
}
