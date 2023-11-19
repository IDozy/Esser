import React from "react";
import "./Wave.css";
import image from "../../assets/imgs/esser-remove.png";

const Wave = () => {
  return (

    <div className="container__wave" style={{ marginTop: "15rem" }}>
      {/*  <h2 className="info__text border" >Esser</h2>
   <h2 className="info__text wave">Esser</h2>*/}

      <img src={image} alt="" className="info__text border" />
      <img src={image} alt="" className="info__text wave  " />
    </div>
  );
};

export default Wave;
