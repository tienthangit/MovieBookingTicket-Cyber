import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import srceen from "../../assets/screen.png";
import { Tag } from "antd";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import "./style.css";
import { createActions } from "../../Store/constants/createAction";
import { SET_GHE_DANG_DAT } from "../../Store/constants/bookingConstant";

function BookingTicket(props) {
  const dispatch = useDispatch();

  const { detailRoomTicket, listSeatSelected } = useSelector(
    (state) => state.bookingTicketReducer
  );

  const { userLogin } = useSelector((state) => state.userReducer);

  const { thongTinPhim, danhSachGhe } = detailRoomTicket;

  const handleSelected = (ghe) => {
    return () => {
      let cloneGheDangDat = [...listSeatSelected];

      let findIndex = cloneGheDangDat.findIndex(
        (item) => item.maGhe === ghe.maGhe
      );

      // chưa có sẽ là findIndex = -1 nếu có rồi sẽ là 1
      if (findIndex != -1) {
        cloneGheDangDat.splice(findIndex, 1);
      } else {
        cloneGheDangDat = [...cloneGheDangDat, ghe];
      }

      dispatch(createActions(SET_GHE_DANG_DAT, cloneGheDangDat));
    };
  };

  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangChon = "";
      let indexGheDangChon = listSeatSelected.findIndex(
        (item) => item.maGhe === ghe.maGhe
      );

      let classGheDaDuocMinhDat = "";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocMinhDat = "gheDaDuocMinhDat";
      }

      if (indexGheDangChon != -1) {
        classGheDangChon = "gheDangChon";
      }
      return (
        <Fragment key={index}>
          <button
            onClick={handleSelected(ghe)}
            disabled={ghe.daDat}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangChon} ${classGheDaDuocMinhDat}`}
            key={index}>
            {ghe.daDat ? (
              classGheDaDuocMinhDat != "" ? (
                <UserOutlined style={{ fontSize: "20px" }} />
              ) : (
                <CloseOutlined
                  style={{ fontFamily: "bold", fontSize: "1.3rem" }}
                />
              )
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <>
      <div className="gird grid-cols-6">
        <div className="flex">
          <img
            style={{ width: 50, height: 50 }}
            src={thongTinPhim?.hinhAnh}
            alt="..."
          />
          <div className="ml-2">
            <h3>
              <span className="text-green-600 font-semibold text-xl">
                {thongTinPhim?.tenCumRap}
              </span>{" "}
              - {thongTinPhim?.gioChieu} -{" "}
              <Tag className="rounded-xl" color="#fb4226">
                {thongTinPhim?.tenRap}
              </Tag>
            </h3>
            <h4>Địa điểm - {thongTinPhim?.diaChi}</h4>
          </div>
        </div>
      </div>
      <div className="screen mt-3">
        <img className="w-full" src={srceen} alt="screen" />
      </div>
      <div className="listGhe">{renderSeats()}</div>
      <hr />
      <div className="noteGhe mt-5">
        <ul className="flex flex-wrap justify-center">
          <li className="flex items-center">
            <button className="ghe"></button>
            <span className="font-bold">Ghế chưa đặt</span>
          </li>
          <li className="flex items-center">
            <button className="ghe gheDaDat">
              <CloseOutlined
                style={{ fontFamily: "bold", fontSize: "1.3rem" }}
              />
            </button>
            <span className="font-bold">Ghế đã đặt</span>
          </li>
          <li className="flex items-center">
            <button className="ghe gheDangChon"></button>
            <span className="font-bold">Ghế đang chọn</span>
          </li>
          <li className="flex items-center">
            <button className="ghe gheDaDuocMinhDat ">
              <UserOutlined style={{ fontSize: "20px" }} />
            </button>
            <span className="font-bold">Ghế đã được mình đặt</span>
          </li>
          <li className="flex items-center">
            <button className="ghe gheVip "></button>
            <span className="font-bold">Ghế VIP</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BookingTicket;
