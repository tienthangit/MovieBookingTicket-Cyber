import React, { useEffect } from "react";
import { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import TicketBooking from "./ticketBooking";
import { useDispatch, useSelector } from "react-redux"
import { getDetailRoomTicketAction } from "../../Store/actions/bookingAction";
import { Tabs } from 'antd';
import { Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ResultBooking from "../../Pages/ResultBooking";
const { TabPane } = Tabs;



function BookingTemplate(props) {
  const dispatch = useDispatch();
  const { Component, ...restParams } = props;

  useEffect(() => {
    dispatch(getDetailRoomTicketAction(props.computedMatch.params.id))
  }, [])

  const { thongTinPhim, danhSachGhe } = useSelector(state => state.bookingTicketReducer.detailRoomTicket)

  const user = useSelector(state => state.userReducer.userLogin)
  const operations = <div className="flex py-4 justify-end items-center">
    <Avatar
      style={{ backgroundColor: "#fb4226",lineHeight: '18px' }}
      icon={<UserOutlined />}
    />
    <span className="mx-3">{user?.hoTen}</span>
  </div>


  if (!localStorage.getItem("USER_LOGIN"))
  {
    return <Redirect to="/signin" />;
  }

  return (
    <>
      <Route
        {...restParams}
        render={(propsRoute) => {
          return (
            <Fragment>
              <div className="grid grid-cols-4 h-full">
                <div className="col-span-3">
                  <Tabs defaultActiveKey="1" tabBarExtraContent={operations} className="container">
                    <TabPane tab="CHỌN GHẾ & THANH TOÁN" key="1">
                      <Component {...propsRoute} />
                    </TabPane>
                    <TabPane tab="KẾT QUẢ ĐẶT VÉ" key="2">
                      <ResultBooking {...propsRoute} />
                    </TabPane>

                  </Tabs>
                  <div>
                  </div>
                </div>
                <TicketBooking {...propsRoute} />
              </div>
            </Fragment>
          );
        }}
      />
    </>
  );
}

export default BookingTemplate;
