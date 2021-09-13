import React from "react";
import srceen from "../../assets/screen.png"

function BookingTicket() {
  return (
    <div className="container">
      <div className="gird grid-cols-6">
        <div className="flex">
          <img
            style={{ width: 50, height: 50 }}
            src="https://picsum.photos/200/300"
            alt="..."
          />
          <div className="ml-2">
            <h3>
              <span className="text-green-600 font-semibold text-xl">
                {" "}
                BHD Star
              </span>{" "}
              - Vincom 3/2
            </h3>
            <h4> - 12:05 - RẠP 5 </h4>
          </div>
        </div>
      </div>
      <div className="screen mt-3">
        <img className="w-full" src={srceen} alt="screen" />
      </div>
    </div>
  );
}

export default BookingTicket;
