import React from "react";
import { Tabs, Card } from "antd";

import "./style.css";

const { TabPane } = Tabs;
const { Meta } = Card;

export default function News(props) {
  return (
    <div id="tinTuc">
      <Tabs
        defaultActiveKey="1"
        style={{ marginTop: "5%" }}
        className="tabNews">
        <TabPane
          tab={<span className="spTitle"> Điện Ảnh 24h </span>}
          key="1"
          className="tabItems">
          <div className="flex flex-row my-3">
            <div style={{ width: "50%" }}>
              <Card
                hoverable
                cover={
                  <div
                    className="bgNews rounded-lg"
                    style={{
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2020/11/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png)`,
                    }}>
                    <img
                      className="opacity-0 w-full"
                      alt="example"
                      src="https://s3img.vcdn.vn/123phim/2020/11/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                    />
                  </div>
                }>
                <Meta
                  title="[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng"
                  description="Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante"
                />
              </Card>
            </div>

            <div style={{ width: "50%" }}>
              <Card
                hoverable
                cover={
                  <div
                    className="bgNews rounded-lg"
                    style={{
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png)`,
                    }}>
                    <img
                      className="opacity-0 w-full"
                      alt="example"
                      src="https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png"
                    />
                  </div>
                }>
                <Meta
                  title="TENET công bố ngày khởi chiếu chính thức tại Việt Nam"
                  description="Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam. "
                />
              </Card>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-3 my-3">
            <div>
              <Card
                hoverable
                cover={
                  <div
                    className="bgNews rounded-lg bgNews-2"
                    style={{
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png)`,
                    }}>
                    <img
                      className="opacity-0 w-full"
                      alt="example"
                      src="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png"
                    />
                  </div>
                }>
                <Meta
                  title="Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan"
                  description="Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng. "
                />
              </Card>
            </div>

            <div>
              <Card
                hoverable
                cover={
                  <div
                    className="bgNews rounded-lg bgNews-2"
                    style={{
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg)`,
                    }}>
                    <img
                      className="opacity-0 w-full"
                      alt="example"
                      src="https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122361852.png"
                    />
                  </div>
                }>
                <Meta
                  title="Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn"
                  description="Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68 triệu vé, hai tên tuổi lão làng trong làng điện ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết Tận – một bộ phim hành động siêu “nặng đô”."
                />
              </Card>
            </div>
            <div>
              <ul>
                <li className="mb-3">
                  <div className="divNews flex cursor-pointer">
                    <img
                      style={{ width: 70 }}
                      src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                      alt="img"
                    />
                    <span
                      className="ml-2 mb-2 text-base break-all overflow-hidden text-gray-500 "
                      style={{ height: 50 }}>
                      Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn.
                    </span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="divNews flex cursor-pointer">
                    <img
                      style={{ width: 70 }}
                      src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                      alt="img"
                    />
                    <span
                      className="ml-2 mb-2 text-base break-all overflow-hidden text-gray-500"
                      style={{ height: 50 }}>
                      “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                    </span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="divNews flex cursor-pointer">
                    <img
                      style={{ width: 70 }}
                      src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                      alt="img"
                    />
                    <span
                      className="ml-2 mb-2 text-base break-all overflow-hidden text-gray-500"
                      style={{ height: 50 }}>
                      Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                      công chiếu
                    </span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="divNews flex cursor-pointer">
                    <img
                      style={{ width: 70 }}
                      src="https://s3img.vcdn.vn/123phim/2020/08/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png"
                      alt="img"
                    />
                    <span
                      className="ml-2 mb-2 text-base break-all overflow-hidden text-gray-500"
                      style={{ height: 50 }}>
                      6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình
                      đám nhất Hollywood
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabPane>

        <TabPane
          tab={<span className="spTitle"> Reviews </span>}
          key="2">
          <div className="flex flex-row my-3">
            <div style={{ width: "50%" }}>
              <Card
                hoverable
                cover={
                  <div
                    className="bgNews rounded-lg "
                    style={{
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png)`,
                    }}>
                    <img
                      className="opacity-0 w-full"
                      alt="example"
                      src="https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
                    />
                  </div>
                }>
                <Meta
                  title="Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết"
                  description="Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám"
                />
              </Card>
            </div>

            <div style={{ width: "50%" }}>
              <Card
                hoverable
                cover={
                  <div
                    className="bgNews rounded-lg "
                    style={{
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png)`,
                    }}>
                    <img
                      className="opacity-0 w-full"
                      alt="example"
                      src="https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
                    />
                  </div>
                }>
                <Meta
                  title="Review: Dinh Thự Oan Khuất (Ghost Of War)"
                  description="Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!"
                />
              </Card>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-3 my-3">
            <div>
              <Card
                hoverable
                cover={
                  <div
                    className="bgNews rounded-lg bgNews-2"
                    style={{
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2020/06/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png)`,
                    }}>
                    <img
                      className="opacity-0 w-full"
                      alt="example"
                      src="https://s3img.vcdn.vn/123phim/2020/06/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
                    />
                  </div>
                }>
                <Meta
                  title="‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh"
                  description="Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay."
                />
              </Card>
            </div>

            <div>
              <Card
                hoverable
                cover={
                  <div
                    className="bgNews rounded-lg bgNews-2"
                    style={{
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2020/05/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png)`,
                    }}>
                    <img
                      className="opacity-0 w-full"
                      alt="example"
                      src="https://s3img.vcdn.vn/123phim/2020/05/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                    />
                  </div>
                }>
                <Meta
                  title="American Sniper - Chính nghĩa hay phi nghĩa?"
                  description="American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người xem qua từng thời khắc khác nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng..."
                />
              </Card>
            </div>
            <div>
              <ul>
                <li className="mb-3">
                  <div className="divNews flex cursor-pointer">
                    <img
                      style={{ width: 70 }}
                      src="https://s3img.vcdn.vn/123phim/2020/05/review-spider-man-into-the-spider-vesre-15886520889426.png"
                      alt="img"
                    />
                    <span
                      className="ml-2 mb-2 text-base break-all overflow-hidden text-gray-500 "
                      style={{ height: 50 }}>
                      Review: Spider-Man: Into The Spider-Vesre
                    </span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="divNews flex cursor-pointer">
                    <img
                      style={{ width: 70 }}
                      src="https://s3img.vcdn.vn/123phim/2020/03/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
                      alt="img"
                    />
                    <span
                      className="ml-2 mb-2 text-base break-all overflow-hidden text-gray-500"
                      style={{ height: 50 }}>
                      COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                    </span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="divNews flex cursor-pointer">
                    <img
                      style={{ width: 70 }}
                      src="https://s3img.vcdn.vn/123phim/2020/03/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
                      alt="img"
                    />
                    <span
                      className="ml-2 mb-2 text-base break-all overflow-hidden text-gray-500"
                      style={{ height: 50 }}>
                      [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                      hùng Valiant
                    </span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="divNews flex cursor-pointer">
                    <img
                      style={{ width: 70 }}
                      src="https://s3img.vcdn.vn/123phim/2020/03/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                      alt="img"
                    />
                    <span
                      className="ml-2 mb-2 text-base break-all overflow-hidden text-gray-500"
                      style={{ height: 50 }}>
                      [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao
                      giờ lầy lội và hài hước đến thế
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabPane>

        <TabPane
          tab={<span className="spTitle"> Khuyến Mãi </span>}
          key="3">
          <div className="flex flex-row my-3">
            <div style={{ width: "50%" }}>
              <Card
                hoverable
                cover={
                  <div
                    className="bgNews rounded-lg "
                    style={{
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg)`,
                    }}>
                    <img
                      className="opacity-0 w-full"
                      alt="example"
                      src="https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg"
                    />
                  </div>
                }>
                <Meta
                  title="BHD 59K/VÉ CẢ TUẦN !!!"
                  description="Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay."
                />
              </Card>
            </div>

            <div style={{ width: "50%" }}>
              <Card
                hoverable
                cover={
                  <div
                    className="bgNews rounded-lg"
                    style={{
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg)`,
                    }}>
                    <img
                      className="opacity-0 w-full"
                      alt="example"
                      src="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
                    />
                  </div>
                }>
                <Meta
                  title="TIX 1K/VÉ NGẠI CHI GIÁ VÉ"
                  description="Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga"
                />
              </Card>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-3 my-3">
            <div>
              <Card
                hoverable
                cover={
                  <div
                    className="bgNews rounded-lg bgNews-2"
                    style={{
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png)`,
                    }}>
                    <img
                      className="opacity-0 w-full"
                      alt="example"
                      src="https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png"
                    />
                  </div>
                }>
                <Meta
                  title="ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX "
                  description="ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX. "
                />
              </Card>
            </div>

            <div>
              <Card
                hoverable
                cover={
                  <div
                    className="bgNews rounded-lg bgNews-2"
                    style={{
                      backgroundImage: `url(https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg)`,
                    }}>
                    <img
                      className="opacity-0 w-full"
                      alt="example"
                      src="https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
                    />
                  </div>
                }>
                <Meta
                  title="BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!"
                  description="Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay."
                />
              </Card>
            </div>
            <div>
              <ul>
                <li className="mb-3">
                  <div className="divNews flex cursor-pointer">
                    <img
                      style={{ width: 70 }}
                      src="https://s3img.vcdn.vn/123phim/2020/05/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png"
                      alt="img"
                    />
                    <span
                      className="ml-2 mb-2 text-base break-all overflow-hidden text-gray-500 "
                      style={{ height: 50 }}>
                      Beta Cineplex trở lại với hàng loạt ưu đãi lớn
                    </span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="divNews flex cursor-pointer">
                    <img
                      style={{ width: 70 }}
                      src="https://s3img.vcdn.vn/123phim/2020/05/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png"
                      alt="img"
                    />
                    <span
                      className="ml-2 mb-2 text-base break-all overflow-hidden text-gray-500"
                      style={{ height: 50 }}>
                      [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh
                      Trai Yêu Quái
                    </span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="divNews flex cursor-pointer">
                    <img
                      style={{ width: 70 }}
                      src="https://s3img.vcdn.vn/123phim/2019/11/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
                      alt="img"
                    />
                    <span
                      className="ml-2 mb-2 text-base break-all overflow-hidden text-gray-500"
                      style={{ height: 50 }}>
                      [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp
                      Sư Mù: Ai Chết Giơ Tay
                    </span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="divNews flex cursor-pointer">
                    <img
                      style={{ width: 70 }}
                      src="https://s3img.vcdn.vn/123phim/2019/10/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                      alt="img"
                    />
                    <span
                      className="ml-2 mb-2 text-base break-all overflow-hidden text-gray-500"
                      style={{ height: 50 }}>
                      [Mega GS] Một đoá hoa thay ngàn lời yêu
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
