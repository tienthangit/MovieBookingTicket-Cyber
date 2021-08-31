import React from "react";
import { Image, Menu } from "antd";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <Image className='logo' src="https://tix.vn/app/assets/img/icons/web-logo.png" />
        <Menu mode="horizontal">

          <Menu.Item key="home">
            <NavLink to="/">HOME</NavLink>
          </Menu.Item>
          <Menu.Item key="SHOWING MOVIE">
            <NavLink to="/">SHOWING MOVIE</NavLink>
          </Menu.Item>
          <Menu.Item key="COMING MOVIE">
            <NavLink to="/">COMING MOVIE</NavLink>
          </Menu.Item>
          
        </Menu>
        <Menu mode="horizontal">
        <Menu.Item key="SIGN IN">
            <NavLink to="/">SIGN IN</NavLink>
          </Menu.Item>
          <Menu.Item key="SIGN UP">
            <NavLink to="/">SIGN UP</NavLink>
          </Menu.Item>
        </Menu>
      </div>

    </div>
  );
}
