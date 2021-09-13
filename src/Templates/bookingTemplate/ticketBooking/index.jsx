import React from "react";
import { Fragment } from "react";

function TicketBooking() {
  return (
    <>
      <div className="px-3 h-full">
        <div className="flex justify-center items-center">
          <span className="text-green-600 text-3xl"> 0 đ. </span>
        </div>
        <div className="flex items-left flex-col my-5">
          <p className="text-black font-bold text-xl"> Lật mặt: 48H</p>
          <h4> BHD Star - Vincom 3/2 </h4>
          <h4> 25/04/2021 - 12:05 - Rạp 4 </h4>
        </div>
        <div className="flex justify-between items-center my-5">
          <span className="text-red-600"> Ghế :</span>
          <span className="text-green-600"> 0 đ.</span>
        </div>
        <div className="my-5">
          <p className="text-gray-600"> Email: </p>
          <h3> ádsadasdas </h3>
        </div>
        <div className="my-5">
          <p className="text-gray-600"> Phone: </p>
          <h3> 0902438332 </h3>
        </div>
        <div className="flex items-end h-full">
          <button className="text-center bg-green-600 p-5 w-full font-bold">
            {" "}
            ĐẶT VÉ{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default TicketBooking;
