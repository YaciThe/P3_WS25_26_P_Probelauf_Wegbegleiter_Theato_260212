
import React from "react";
import './Sprechblase.css';


  
import sprechblaseImg from '../assets/Sprechblase.png';

const Sprechblase = ({ text }) => (
  <div className="sprechblase-png-wrapper">
    <img src={sprechblaseImg} alt="Sprechblase" className="sprechblase-png-img" />
    <p className="sprechblase-png-text">
      {text}
    </p>
  </div>
);

export default Sprechblase;
