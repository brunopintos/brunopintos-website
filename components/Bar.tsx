import * as React from "react";
import styled from "styled-components";
import { Text } from "../pages/index";
import { getReadableYears } from "../utils.ts";

const Bar = ({
  name,
  value,
  percentage,
}: {
  name: string;
  value: number;
  percentage: number;
}) => (
  <BackgroundBar>
    <ColorBar percentage={percentage}>
      <Text>{name}</Text>
      <Text>{getReadableYears(value)}</Text>
    </ColorBar>
  </BackgroundBar>
);

const BackgroundBar = styled.div`
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
  width: ${(props) => `calc(${props.percentage} * 100%)`};
  padding: 0 12px;
`;

export default Bar;
