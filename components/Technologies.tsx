import React from "react";
import styled from "styled-components";
import { MainContainer, Title } from "../pages/index";
import { getYearsPassed } from "../utils.ts";
import Bar from "./Bar.tsx";

const TODAY = new Date();
const technologies = {
  favourites: [
    {
      name: "React",
      time: getYearsPassed(new Date(2020, 0, 1, 0, 0, 0, 0), TODAY),
    },
    {
      name: "React Native",
      time: getYearsPassed(new Date(2020, 2, 1, 0, 0, 0, 0), TODAY),
    },
    {
      name: "Typescript",
      time: getYearsPassed(new Date(2020, 0, 1, 0, 0, 0, 0), TODAY),
    },
    {
      name: "GraphQL",
      time: getYearsPassed(new Date(2020, 3, 1, 0, 0, 0, 0), TODAY),
    },
    {
      name: "Node.js",
      time: getYearsPassed(new Date(2019, 7, 1, 0, 0, 0, 0), TODAY),
    },
    {
      name: "MongoDB",
      time: getYearsPassed(new Date(2020, 6, 1, 0, 0, 0, 0), TODAY),
    },
  ],
  others: [
    {
      name: "HTML",
      time: getYearsPassed(new Date(2019, 0, 1, 0, 0, 0, 0), TODAY),
    },
    {
      name: "CSS",
      time: getYearsPassed(new Date(2019, 2, 1, 0, 0, 0, 0), TODAY),
    },
    {
      name: "Javascript",
      time: getYearsPassed(new Date(2019, 4, 1, 0, 0, 0, 0), TODAY),
    },
    {
      name: "Android",
      time: getYearsPassed(
        new Date(2019, 0, 1, 0, 0, 0, 0),
        new Date(2020, 4, 1, 0, 0, 0, 0)
      ),
    },
    {
      name: "Java",
      time: getYearsPassed(
        new Date(2018, 0, 1, 0, 0, 0, 0),
        new Date(2019, 11, 1, 0, 0, 0, 0)
      ),
    },
    {
      name: "Git",
      time: getYearsPassed(new Date(2019, 0, 1, 0, 0, 0, 0), TODAY),
    },
  ],
};

const TOP_FAVOURITE_SKILL_TIME = Math.max(
  ...technologies.favourites.map((t) => t.time)
);
const TOP_OTHER_SKILL_TIME = Math.max(
  ...technologies.others.map((t) => t.time)
);

const Technologies = () => (
  <MainContainer>
    <Title data-aos="fade-up" data-aos-offset="250">
      Technologies
    </Title>
    <p data-aos="fade-up" data-aos-offset="250">
      Favourites
    </p>
    <Container data-aos="fade-up" data-aos-offset="250">
      {technologies.favourites.map((t) => {
        return (
          <Bar
            key={t.name}
            name={t.name}
            value={t.time}
            percentage={t.time / TOP_FAVOURITE_SKILL_TIME}
          />
        );
      })}
    </Container>
    <p data-aos="fade-up" data-aos-offset="250">
      Other
    </p>
    <Container data-aos="fade-up" data-aos-offset="250">
      {technologies.others.map((t) => {
        return (
          <Bar
            key={t.name}
            name={t.name}
            value={t.time}
            percentage={t.time / TOP_OTHER_SKILL_TIME}
          />
        );
      })}
    </Container>
  </MainContainer>
);

const Container = styled.div`
  width: 100%;
`;

export default Technologies;
