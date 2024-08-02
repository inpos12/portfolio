import React, { useEffect } from "react";
import Pad from "./Pad.js";
import $ from "jquery";
import Home from "../Home/Home.js";

const Loading = () => {
  useEffect(() => {
    let delays = 410;
    function animateStep(
      selector,
      bgColor,
      textColor,
      numHtml,
      num,
      prevSelector,
      prevbgColor,
      prevtextColor,
      delay
    ) {
      setTimeout(() => {
        $(selector).css({ backgroundColor: bgColor, color: textColor });
        $(numHtml).html(num);
        $(prevSelector).css({
          backgroundColor: prevbgColor,
          color: prevtextColor,
        });
      }, delay);
    }
    animateStep(".1", "#8EAFCE", "white", ".num1", 0, 0);
    animateStep(
      ".2",
      "#8EAFCE",
      "white",
      ".num2",
      1,
      ".1",
      "white",
      "black",
      delays
    );
    animateStep(
      ".3",
      "#8EAFCE",
      "white",
      ".num3",
      0,
      ".2",
      "white",
      "black",
      delays * 2
    );
    animateStep(
      ".4",
      "#8EAFCE",
      "white",
      ".num4",
      5,
      ".3",
      "white",
      "black",
      delays * 3
    );
    animateStep("", "", "", "", "", ".4", "white", "black", delays * 4);
    //

    function animation(
      selector,
      styles,
      addselector,
      addclass,
      removeselector,
      removeclass,
      newselecotr,
      styless,
      delay
    ) {
      //
      setTimeout(() => {
        $(selector).css(styles);
        $(addselector).addClass(addclass);
        $(removeselector).removeClass(removeclass);
        $(newselecotr).css(styless);
      }, delay);
    }

    animation(
      ".logo,.password,.num",
      { display: "none" },
      "",
      "",
      "",
      "",
      ".pad",
      {
        transform: "rotate(360deg)",
        boxShadow: "none",
        borderRadius: "50%",
        maxWidth: "250px",
        maxHeight: "250px",
      },
      delays * 5
    );
    animation(
      ".pad",
      {
        transform: "rotate(0deg)",
        borderRadius: "0",
        maxWidth: "100vw",
        maxHeight: "100vh",
      },
      "",
      "",
      "",
      "",
      "",
      "",
      delays * 7.5
    );
    setTimeout(() => {
      window.location.pathname = "/Home";
    }, delays * 10);
  }, []);

  return (
    <>
      <Pad />
    </>
  );
};
export default Loading;
