import React from "react";
import { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import HeaderBooking from "./headerBooking";
import TicketBooking from "./ticketBooking";

function BookingTemplate(props) {
  const { Component, ...restParams } = props;

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
                  <HeaderBooking />
                  <div>
                    <Component {...propsRoute} />
                  </div>
                </div>
                  <TicketBooking />
              </div>
            </Fragment>
          );
        }}
      />
    </>
  );
}

export default BookingTemplate;
