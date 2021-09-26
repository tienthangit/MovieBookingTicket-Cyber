import React, { useEffect } from "react";
import { Image, Menu, Button } from "antd";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { CapNhatThongTinNguoiDung } from "../../Store/actions/userActions";
import { useHistory } from "react-router-dom";

export default function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(CapNhatThongTinNguoiDung());
  }, [dispatch]);

  const userLogin = useSelector((state) => state.userReducer.userLoginDefault);
  console.log("user info", userLogin);
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
        </div>
        <>
          {userLogin ? (<>
            <Menu.Item key="USERNAME">
              <Button onClick={() => { history.push('/profile') }}>Xin chào {userLogin.hoTen}</Button>
            </Menu.Item>
            <Menu.Item key="LOGOUT">
              <Button onClick={() => { 
                window.location.reload();
               }}>Log out</Button>
            </Menu.Item>
          </>


          ) : (
            <div className="menuItem">
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
            </div>
          )}
        </>
      </Menu>
    </>
  );
}
