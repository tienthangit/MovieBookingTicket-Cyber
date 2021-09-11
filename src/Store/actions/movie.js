import { actionTypes } from "./type";
import { createAction } from "./index";
import { requests } from "../../Services/api/request";

//async action
export const fetchListMovies = (value) => {
    return (dispatch) => {
        requests({
            url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01',
            method: 'GET',
            params: {
                soTrang: value,
            },
            headers: {
                TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjQiLCJIZXRIYW5TdHJpbmciOiIyMS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDI3MjMyMDAwMDAiLCJuYmYiOjE2MTYxNzMyMDAsImV4cCI6MTY0Mjg3MDgwMH0.2sSWVGy-3Ce9iJ8bIYmYOJ9aE1eu3fz07DtA2ECfiyk'
            }
        })
            .then((res) => {
                dispatch(createAction(actionTypes.SET_MOVIES, res.data))
            })
            .catch((err) => console.log(err))
    }

};

export const fetchListId = (id) => {
    return (dispatch) => {
        requests({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim",
            method: "GET",
            params: {
                MaPhim: id,
            }
        }).then(res => {
            dispatch(createAction(actionTypes.SET_MOVIE_DETAIL, res.data))
        }).catch(err => {
            console.log(err);
        })
    }
}
// export const fetchMovieDetail = (id) => {
//     return (dispatch) => {
//         request({
//             url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim',
//             method: 'GET',
//             params: {
//                 MaPhim: id
//             },
//             headers: {
//                 TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjQiLCJIZXRIYW5TdHJpbmciOiIyMS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDI3MjMyMDAwMDAiLCJuYmYiOjE2MTYxNzMyMDAsImV4cCI6MTY0Mjg3MDgwMH0.2sSWVGy-3Ce9iJ8bIYmYOJ9aE1eu3fz07DtA2ECfiyk'
//             }
//         })
//             .then((res) => {
//                 dispatch(createAction(actionTypes.SET_MOVIE_DETAIL, res.data))
//             })
//             .catch((err) => console.log(err));
//     }
// };