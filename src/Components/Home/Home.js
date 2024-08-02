import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import $ from "jquery";
import Header from "../Common/Header/Header";
import Intro from "../Home/Intro.jsx";
import Headline from "./Headline.jsx";
import Worklist from "./Worklist.jsx";

const Main = styled.div`
  opacity: 0;
  transition: all 0.4s ease-in;
`;
const View = styled.div`
  height: 100vh;
  color: #8eafce;
`;

export const Home = () => {
  const ref = useRef();

  useEffect(() => {
    $("body").css({ backgroundColor: "#e6f2ff" });
    setTimeout(() => {
      $(".Main").css({ opacity: "1" });
    }, 410);

    //

    let HeadlineTop = ref.current.offsetTop / 2;
    $(window).scroll(function () {
      if (window.scrollY >= HeadlineTop) {
        $(".Header").css({ color: "#e6f2ff" });
      } else if (HeadlineTop >= window.scrollY) {
        $(".Header").css({ color: "#8eafce" });
        console.log("aaa");
      }
    });
  }, []);

  //

  return (
    <Main className="Main">
      <View>
        <Header classNameUl="Header" />
        <Intro />
      </View>
      <Headline />
      <Worklist refTop={ref} />
    </Main>
  );
};

export default Home;
