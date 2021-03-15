import React from "react";
import { MainContainer, Title, Subtitle, Text, Company } from "../pages/index";
import styled from 'styled-components';

const Projects = () => (
  <MainContainer>
    <Title data-aos="fade-up" data-aos-offset="250">
      Projects
    </Title>
    <Subtitle
      style={{ marginTop: 20 }}
      data-aos="fade-up"
      data-aos-offset="298"
    >
      Ayp soft website
    </Subtitle>
    <a href="http://ayp.com.uy/" target="_blank">
      <Image
        data-aos="fade-up"
        data-aos-offset="250"
        src="/aypweb.png"
        alt="proyect ayp soft"
      />
    </a>
    <Text data-aos="fade-up" data-aos-offset="0">
      I developed the website of{" "}
      <Company href="http://ayp.com.uy/" target="_blank">
        Ayp soft
      </Company>{" "}
      — an Uruguay-based company specialized in Enterprise Resource Planning.
      For the project, I used the following technologies: React.js, Next.js, and
      JavaScript
    </Text>
  </MainContainer>
);

const Image = styled.img`
  max-width: 400px;
  cursor: pointer;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export default Projects;
