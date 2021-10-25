import * as React from "react";
import styled from "styled-components";

const Bar = ({ name, value, percentage }) => (
  <BackgroundBar>
    <ColorBar percentage={percentage}>
      <CustomText first>{name}</CustomText>
      <CustomText>{value}</CustomText>
    </ColorBar>
  </BackgroundBar>
);

const CustomText = styled.p`
  position: absolute;
  left: ${({first}) => first ? "12px" : "auto"};
  right: ${({first}) => first ? "auto" : "12px"};
  margin: 0;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

const BackgroundBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #212121;
  border-radius: 15px;
  height: 30px;
  width: 100%;
  margin-bottom: 12px;
`;

const ColorBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #9fa8da;
  border-radius: 15px;
  height: 30px;
  width: ${({ percentage }) => `calc(${percentage} * 100%)`};
`;

export default Bar;
