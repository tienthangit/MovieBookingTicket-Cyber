import React, { useEffect,memo, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { actionTypes } from '../../Store/actions/type';
import './style.css'
import { Carousel } from 'antd';

const Home = () => {

    const dispatch = useDispatch();
    const bannerList = useSelector((state) => state.banner.bannerList)

    useEffect(() =>{
        axios({
            method:'GET',
            url:'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner',
            headers:{
                TokenCybersoft:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjQiLCJIZXRIYW5TdHJpbmciOiIyMS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDI3MjMyMDAwMDAiLCJuYmYiOjE2MTYxNzMyMDAsImV4cCI6MTY0Mjg3MDgwMH0.2sSWVGy-3Ce9iJ8bIYmYOJ9aE1eu3fz07DtA2ECfiyk',
            }
        }).then((res) =>{
            dispatch({type:actionTypes.SET_BANNERS,payload:res.data});
        })
        .catch((err) => console.log(err));
    },[]);

    return (
        <Fragment>
            <Carousel autoplay>
            {bannerList.content?.map((item) =>(
                <img className="imgBanner" src={item.hinhAnh} alt={item.maBanner} />
            ))}
            </Carousel>
            
        </Fragment>
    )
}

export default memo(Home)

