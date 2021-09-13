import React from "react";
import { Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";

function HeaderBooking() {
  return (
    <div className="container">
      <ul className="grid grid-cols-3 gap-2">
        <li>
          <div className="text-center py-4 activeResult">
            <span className="text-2xl mr-3">01</span>
            <span>CHỌN GHẾ & THANH TOÁN</span>
          </div>
        </li>
        <li>
          <div className="text-center py-4">
            <span className="text-2xl mr-3">02</span>
            <span>KẾT QUẢ ĐẶT VÉ</span>
          </div>
        </li>
        <li>
          <div className="flex py-4 justify-end items-center">
            <Avatar icon={<UserOutlined />} />
            <span className="mx-3">Name</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HeaderBooking;
