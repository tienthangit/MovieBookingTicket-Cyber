import { requests } from "./api/request";

export const userServices = {
  signIn(userLogin) {
    return requests({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: userLogin,
    });
  },
  signUp(userNew) {
    return requests({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: userNew,
    });
  },
};
