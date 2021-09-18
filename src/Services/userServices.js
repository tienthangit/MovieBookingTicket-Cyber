import { DOMAIN_CYBER_MOVIE } from "../Utils/systemSetting";
import { requests } from "./Api/request";

export const userServices = {
    signIn(userLogin) {
        return requests({
            url: `${DOMAIN_CYBER_MOVIE}/api/QuanLyNguoiDung/DangNhap`,
            method: 'POST',
            data: userLogin
        })
    },
    signUp(userNew) {
        return requests({
            url: `${DOMAIN_CYBER_MOVIE}/api/QuanLyNguoiDung/DangKy`,
            method: 'POST',
            data: userNew
        })
    },
    CapNhatThongTinNguoiDung(data) {
        return requests({
            url: `${DOMAIN_CYBER_MOVIE}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method: 'PUT',
            data: data
        })
    },
    layThongTinNguoiDung(){
      return requests({
        url:`${DOMAIN_CYBER_MOVIE}/api/QuanLyNguoiDung/ThongTinTaikhoan`,
        method:'POST'
      })
    }
}
