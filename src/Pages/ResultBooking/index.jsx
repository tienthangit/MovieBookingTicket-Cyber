import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tag } from "antd";
import { getInfoBookingAction } from "../../Store/actions/bookingAction";
import iconResult from '../../assets/img/iconResult.png'
import './result.css'
import moment from "moment";


function ResultBooking() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoBookingAction());
  }, []);

  const infoUser = useSelector(
    (state) => state.userReducer.infoUser
  );

  const renderTicketItem = () => {
    return infoUser.thongTinDatVe?.map((item, index) => {
      return (
        <div key={index} className="cardResult">
          <div className="card-headerResult">
            <img src={item.hinhAnh} alt={item.hinhAnh} />
          </div>
          <div className="card-bodyResult">
            <span className="tag tag-teal">{item.tenPhim} - {item.thoiLuongPhim}' </span>
            <h3 className="text-xs font-bold my-2">
              {item.danhSachGhe[0].tenHeThongRap} - <Tag className="rounded-xl" color="#fb4226" style={{fontSize: '12px'}}>
                {item.danhSachGhe[0].tenRap}
              </Tag>
            </h3>
              <h5>
                 Ghế : {item.danhSachGhe.map((ghe, index) => {
                  return <span className='text-green-600' key={index}> {ghe.tenGhe} </span>;
                })}
              </h5>
            <div className="user">
              {/* <TagsOutlined /> */}
              <img src={iconResult} alt='iconTicket'/>
              <div className="user-info">
                <h5>Ngày chiếu : {moment(item.ngayDat).format("DD/MM/YYYY")}</h5>
                <small>Giờ chiếu: {moment(item.ngayDat).format("hh:mm A")}</small><br/>
                <small>Gía Vé: {item.giaVe.toLocaleString()}$</small>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="mx-auto max-w-6xl py-12">
      <div className="flex flex-col md:flex-row justify-center items-center flex-wrap">
        <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center mr-0 md:mr-2">
          <div className="mb-4 text-center">
            <h3 className="text-xl font-medium text-black text-center">
              Lịch sử đặt vé khách hàng
            </h3>
            <h3 className="text-gray-500">
              Bạn có thể kiểm tra thông tin dưới đây và xem phim vui vẻ!.
            </h3>
          </div>

          <div className="containerResult">
            {renderTicketItem()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResultBooking;
