import React from "react";
import styled from "styled-components";
import { Container, Row } from "../Common/Common";

const TextBox = styled.div`
  padding: 251px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;
`;

export const Intro = () => {
  return (
    <section>
      <Container>
        <Row>
          <TextBox>
            <h1>Seung Chan's</h1>
            <h1>Portfolio</h1>
          </TextBox>
        </Row>
      </Container>
    </section>
  );
};
export default Intro;
