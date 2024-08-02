import React from "react";
import styled from "styled-components";
import { Container, Row } from "../Common";

const Ul = styled.ul`
  width: 588px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Li = styled.li`
  padding: 43px 0;
  font-size: 1.4583vw;
  font-weight: bold;
`;

const row = {
  display: "flex",
  justifyContent: "flex-end",
  position: "fixed",
};

const Header = () => {
  return (
    <header>
      <Container>
        <Row style={row}>
          <nav>
            <Ul>
              <Li>PROJECT</Li>
              <Li>SKILL</Li>
              <Li>CONTACT</Li>
            </Ul>
          </nav>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
