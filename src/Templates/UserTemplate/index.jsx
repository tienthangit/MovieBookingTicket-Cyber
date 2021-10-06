import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import bgLogin from '../../assets/img/bg2.jpg'
import "./style.css";

function UserTemplate(props) {
  const { Component, ...restParams } = props;

  const [height, setHeight] = useState(window.screen.height)

 

  useEffect(() => {
    window.scrollTo(0, 0)
    window.onresize = () => {
      setHeight({
        ...height,
        height: window.innerHeight || window.screen.height
      })
    }
  },[height])

  //...restParams các thuộc tính còn lại như path,render
  return (
    <Route {...restParams}
      render={(restRoute) => {
        return (
          <div className="bg-image flex flex-col justify-center items-center"
            style={{
              backgroundImage: `url(${bgLogin})`,
              height: height 
            }}
          >
            <Component {...restRoute} />
          </div>
        );
      }}></Route>
  );
}

export default UserTemplate;
