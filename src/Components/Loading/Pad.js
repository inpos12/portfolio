import React from "react";
import { Pad, Logo, Password, Password_Cheack, NumPad } from "./Pad.jsx";
import "./Pad.css";

export const Pad_Container = () => {
  return (
    <div className="Pad">
      <Pad className="pad">
        <Logo className="logo">
          <h3>Lee &nbsp; Seung &nbsp; Chan</h3>
        </Logo>
        <Password className="password">
          <Password_Cheack>
            <h3 class="num1">*</h3>
            <h3 class="num2">*</h3>
            <h3 class="num3">*</h3>
            <h3 class="num4">*</h3>
          </Password_Cheack>
        </Password>
        <NumPad />
      </Pad>
    </div>
  );
};

export default Pad_Container;
