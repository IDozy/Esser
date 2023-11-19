import React from "react";
import botella from "../../assets/imgs/bottela.png";
import "./Info.css";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <div className="container">
      <div className="card">
        <p style={{ fontSize: "10vw" }}>eSSer</p>
      </div>
      <div className="card" style={{ boxSizing: "content-box" }}>
        <motion.img
          initial={{ y: -100 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            y: { duration: 2, repeat: Infinity, repeatType: "reverse" },
          }}
          whileHover={{ scale: 1.1 }}
          src={botella}
          alt=""
          className="img"
          style={{ margin: "0 10vw 0 10vw" }}
        />
      </div>
    </div>
  );
};

export default Info;
