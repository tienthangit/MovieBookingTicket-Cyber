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
              <span className="textHeader ml-3 opacity-50">{userLogin?.hoTen}</span>
            </Tooltip>
            <span
              style={{
                border: "1px solid #e9e9e9",
                height: 25,
                margin: "0 10px",
              }}></span>
            <button
              onClick={() => {
                history.push("/profile");
              }}
              className="textHeader hover:text-red-600 transition duration-300 opacity-50">
              {" "}
              Thông Tin{" "}
            </button>
          </div>
        </>
      );
    } 
      return (
        <>
          <Menu.Item key="HOME">
            <NavLink className="textHeader" exact to="/signin">
              Đăng Nhập
            </NavLink>
          </Menu.Item>
          <Menu.Item key="NEWS">
            <NavLink className="textHeader" exact to="/signup">
              Đăng Ký
            </NavLink>
          </Menu.Item>
        </>
      );
  };

  return (
    <>
      <Menu mode="horizontal" className="bgColor py-2">
        <div className="menuItem">
          <Menu.Item key="logo">
            <div>
              <img
                className="logo"
                src="https://tix.vn/app/assets/img/icons/web-logo.png"
                alt="logo"
              />
            </div>
          </Menu.Item>
        </div>
        <div className="menuItem">
          <Menu.Item key="HOME">
            <a className="textHeader" href="#lichChieu">
              Lịch Chiếu
            </a>
          </Menu.Item><Menu.Item key="#cumRap">
            <a className="textHeader" href="#">
              Cụm Rạp
            </a>
          </Menu.Item>
          <Menu.Item key="NEWS">
            <a className="textHeader" href="#tinTuc">
              Tin Tức
            </a>
          </Menu.Item><Menu.Item key="App">
            <a className="textHeader" href="#ungDung">
              Ứng Dụng
            </a>
          </Menu.Item>
        </div>
        <div className="menuItem">{renderUser()}</div>
      </Menu>
    </>
  );
}
