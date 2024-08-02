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
  width: 100vw;
  height: 100vh;
  color: #8eafce;
`;

export const Home = () => {
  useEffect(() => {
    $("body").css({ backgroundColor: "#e6f2ff" });
    setTimeout(() => {
      $(".Main").css({ opacity: "1" });
    }, 410);
  }, []);

  //

  return (
    <Main className="Main">
      <View>
        <Header />
        <Intro />
      </View>
      <Headline />
      <Worklist />
      <h1>Test</h1>
    </Main>
  );
};

export default Home;
