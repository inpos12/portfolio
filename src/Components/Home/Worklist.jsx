import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Container, Row } from "../Common/Common";
import BNBNetWorks from "./img/andar.jpg";
import BNBNetWorks1 from "./img/oliveyoung-pc.jpg";
import $ from "jquery";

const TextBox = styled.div`
  padding: 98px 0 98px 0px;
  width: 80%;
  position: relative;
  cursor: pointer;
`;
const Git = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  padding-right: 0px;

  &:hover {
    background-image: linear-gradient(to left, #e6f2ff, #8eafce);
    padding-right: 36px;
    animation: rainbow 1.2s step-start infinite;
  }
  @keyframes rainbow {
    0% {
      color: red;
    }
    15% {
      color: orange;
    }
    30% {
      color: yellow;
    }
    45% {
      color: green;
    }
    60% {
      color: blue;
    }
    75% {
      color: darkblue;
    }
    90% {
      color: purple;
    }
    100% {
      color: blue;
    }
  }
`;
const ImgBox = styled.figure`
  display: none;
  position: fixed;
  z-index: 10;
  pointer-events: none; /* 클릭 이벤트 방지 */
  transform: translate(-50%, -50%); /* 원의 중심을 마우스 위치로 맞춤 */
  transition: transform 0.5s ease; /* 부드러운 이동 효과 */
`;
const Img = styled.img`
  width: 500px;
`;

const WorklistItem = (props) => {
  return (
    <>
      <Row style={row} className="row" ref={props.Ref}>
        <TextBox className="textbox">
          <h2>{props.title}</h2>
          <h3>{props.text}</h3>
          <p>{props.p}</p>
        </TextBox>
        <Git>
          <h3>GitHub -</h3>
        </Git>
        <ImgBox className="img_box">
          <Img src={props.img} alt="preview" />
        </ImgBox>
      </Row>
    </>
  );
};
const section = {
  backgroundColor: "#8eafce",
  color: "#E6f2ff",
  fontWeight: "bold",
};
const container = {
  flexDirection: "column",
  alignItems: "center",
};
const row = {
  borderTop: "1px solid white",
  alignItems: "normal",
};

export const Worklist = (props) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  useEffect(() => {
    let Worklistimg = document.querySelectorAll(".img_box");
    let Worktextbox = document.querySelectorAll(".textbox");

    // if (ref1.current.offsetTop) {
    //   console.log(ref1.current.offsetTop);
    // } else {
    // }
    function WorkList(ref, selectorimg, selectortext) {
      $(document).mousemove(function (event) {
        let x = event.clientX; //보여지고 있는 화면 기준
        let y = event.clientY; //보여지고 있는 화면 기준
        let x1 = event.pageX; //전체페이지기준
        let y1 = event.pageY; //전체페이지기준
        $(".pointer").css({ left: x + "px", top: y + "px" });
        // Worklist 높이,계산
        let offsetTop = ref.current.offsetTop; //맨위
        let height = ref.current.offsetHeight; //총 높이
        let offsetBottom = offsetTop + height; // 맨아래

        // Worklist 너비 왼쪽 오른쪽 계산
        let offsetLeft = ref.current.offsetLeft; //왼쪽끝
        let width = ref.current.offsetWidth; // 너비
        let offsetRight = offsetLeft + width; //오른쪽끝
        let additionalPercentage = 20; //오른쪽에서 -20%
        let offset_Right =
          offsetRight - offsetRight * (additionalPercentage / 100); // 맨오른쪽에서 20퍼를 뺀 값
        let offset_Left =
          offsetLeft - offsetLeft * (additionalPercentage / 100); // 맨오른쪽에서 20퍼를 뺀 값
        //

        if (
          offsetBottom >= y1 &&
          y1 >= offsetTop &&
          offset_Right >= x1 &&
          x1 > offset_Left
        ) {
          $(selectorimg).css({ left: x + "px", top: y + "px" });
          $(selectorimg).css({ display: "block" });

          $(selectortext).css({
            transition: "all 0.4s ease-in-out",
            padding: "98px 0 98px 36px",
            backgroundImage: "linear-gradient(to right, #e6f2ff, #8eafce)",
            color: "#3a4856",
          });
        } else {
          $(selectorimg).css({ display: "none" });
          $(selectortext).css({
            transition: "all 0.4s ease-in-out",
            padding: "98px 0 98px 0px",
            backgroundImage: "none",
            color: "#e6f2ff",
          });
        }
      });
    }
    WorkList(ref1, Worklistimg[0], Worktextbox[0]);
    WorkList(ref2, Worklistimg[1], Worktextbox[1]);
    WorkList(ref3, Worklistimg[2], Worktextbox[2]);
    WorkList(ref4, Worklistimg[3], Worktextbox[3]);
    WorkList(ref5, Worklistimg[4], Worktextbox[4]);
    WorkList(ref6, Worklistimg[5], Worktextbox[5]);
  });

  return (
    <section style={section} ref={props.refTop}>
      <Container style={container}>
        <WorklistItem
          title={"BNB NETWORK"}
          text={" HTML,CSS,JS,jquery 4가지의 언어를 사용하여 제작하였습니다."}
          p={"#HTML #CSS #JS #jQuery #반응형"}
          img={BNBNetWorks}
          Ref={ref1}
        />
        <WorklistItem
          title={"BNB NETWORK"}
          text={" HTML,CSS,JS,jquery 4가지의 언어를 사용하여 제작하였습니다."}
          p={"#HTML #CSS #JS #jQuery #반응형"}
          img={BNBNetWorks1}
          Ref={ref2}
        />
        <WorklistItem
          title={"BNB NETWORK"}
          text={" HTML,CSS,JS,jquery 4가지의 언어를 사용하여 제작하였습니다."}
          p={"#HTML #CSS #JS #jQuery #반응형"}
          img={BNBNetWorks}
          Ref={ref3}
        />
        <WorklistItem
          title={"BNB NETWORK"}
          text={" HTML,CSS,JS,jquery 4가지의 언어를 사용하여 제작하였습니다."}
          p={"#HTML #CSS #JS #jQuery #반응형"}
          img={BNBNetWorks1}
          Ref={ref4}
        />
        <WorklistItem
          title={"BNB NETWORK"}
          text={" HTML,CSS,JS,jquery 4가지의 언어를 사용하여 제작하였습니다."}
          p={"#HTML #CSS #JS #jQuery #반응형"}
          img={BNBNetWorks}
          Ref={ref5}
        />
        <WorklistItem
          title={"BNB NETWORK"}
          text={" HTML,CSS,JS,jquery 4가지의 언어를 사용하여 제작하였습니다."}
          p={"#HTML #CSS #JS #jQuery #반응형"}
          img={BNBNetWorks1}
          Ref={ref6}
        />
      </Container>
    </section>
  );
};
export default Worklist;
