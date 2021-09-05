import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListId } from '../../Store/actions/movie.js';
import { Card } from "antd";

export default function Detail() {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchListId(params.id));
    },);
    const filmDetail = useSelector((state) => state.movie.movieDetail);

    return <>
        {filmDetail ? <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
                <img alt="example" width="100%" src={filmDetail.hinhAnh} />
            </div>
            <div className="custom-card">
                <h3>{filmDetail.tenPhim}</h3>
                <p>{filmDetail.moTa}</p>
            </div>
        </Card> : "detail"}
    </>;
}
