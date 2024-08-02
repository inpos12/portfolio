import styled from "styled-components";

export const Pad = styled.div`
  max-width: 510px;
  width: 100%;
  max-height: 695px;
  height: 100%;
  background-color: #e6f2ff;
  border-radius: 45px;
  border: none;
  z-index: 100;
  box-shadow: -1px -1px 1px #efede3, 0px 1px 0 #2e2e2e, 0px 2px 0 #2c2c2c,
    0px 3px 0 #2a2a2a, 0px 4px 0 #282828, 0px 5px 0 #262626, 0px 6px 0 #242424,
    0px 7px 0 #222, 0px 8px 0 #202020, 0px 9px 0 #1e1e1e, 0px 10px 0 #1c1c1c,
    0px 11px 0 #1a1a1a, 0px 12px 0 #181818, 0px 13px 0 #161616,
    0px 14px 0 #141414, 0px 15px 0 #121212, 2px 20px 5px rgba(0, 0, 0, 0.9),
    5px 23px 5px rgba(0, 0, 0, 0.3), 8px 27px 8px rgba(0, 0, 0, 0.5),
    8px 28px 35px rgba(0, 0, 0, 0.9);
`;

export const Logo = styled.div`
  width: 100%;
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  font-size: 30px;
  font-weight: 600;
`;

export const Password = styled.div`
  width: 100%;
  height: 181px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Password_Cheack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 309px;
  height: 80px;
  font-weight: 600;
`;

//
const Num1 = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
const H4 = styled.div`
  text-align: center;
  width: 100%;
  height: 100px;
  padding: 42px 0;

  background-color: white;
  font-weight: bold;
`;

const NumPad1 = {
  border: "1px solid black",
  borderLeft: "none",
};
const NumPad2 = {
  border: "1px solid black",
  borderLeft: "none",
};
const NumPad3 = {
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
};
const NumPad4 = {
  borderRight: "1px solid black",
  borderBottom: "1px solid black",
};
const NumPad6 = {
  borderBottom: "1px solid black",
};
const NumPad0 = {
  borderLeft: "1px solid black",
  borderRight: "1px solid black",
};
const NumBorderLeft = {
  borderBottomLeftRadius: "45px",
};
const NumBorderRight = {
  borderBottomRightRadius: "45px",
};

export const NumPad = () => {
  return (
    <div className="num">
      <Num1>
        <H4 style={NumPad1} className="2">
          1
        </H4>
        <H4 style={NumPad2}>2</H4>
        <H4 style={NumPad3}>3</H4>
      </Num1>
      <Num1>
        <H4 style={NumPad4}>4</H4>
        <H4 style={NumPad4} className="4">
          5
        </H4>
        <H4 style={NumPad6}>6</H4>
      </Num1>
      <Num1>
        <H4 style={NumPad4}>7</H4>
        <H4 style={NumPad4}>8</H4>
        <H4 style={NumPad6}>9</H4>
      </Num1>
      <Num1>
        <H4 style={NumBorderLeft}></H4>
        <H4 style={NumPad0} className="1 3">
          0
        </H4>
        <H4 style={NumBorderRight}></H4>
      </Num1>
    </div>
  );
};
