import React from "react";

import { Container, Row } from "../Common/Common";
import $ from "jquery";

const row = {
  position: "relative",
  height: "400px",
  justifyContent: "center",
  alignItems: "flex-end",
  fontWeight: "bold",
  color: "#e6f2ff",
};
const section = {
  background: " linear-gradient(180deg, #e6f2ff 0%, #8eafce 100%)",
};

$("<style>")
  .prop("type", "text/css")
  .html(
    `
  .row::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 3px;
    height: 279px;
    background-color: #e6f2ff;
  }
`
  )
  .appendTo("head"); // <style> 태그를 <head>에 추가합니다.;

const Headline = () => {
  return (
    <section style={section}>
      <Container>
        <Row style={row} className="row">
          <h2>Works</h2>
        </Row>
      </Container>
    </section>
  );
};

export default Headline;
