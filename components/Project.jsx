import React from "react";
import { Subtitle, Text, Company } from "../pages/index";
import styled from "styled-components";

const Project = ({ title, link, image, description }) => (
  <Main data-aos="fade-up" data-aos-offset="200">
    <Link href={link} target="_blank">
      <Subtitle style={{ marginTop: 20 }}>{title}</Subtitle>
    </Link>
    <a href={link} target="_blank">
      <Image src={image.src} alt={image.alt} />
    </a>
    <div>
      <Text>
        {description.text1}
        <Company href={description.link} target="_blank">
          {description.linkText}
        </Company>
        {description.text2}
      </Text>
      <Text>{description.text3}</Text>
    </div>
  </Main>
);

const Image = styled.img`
  max-height: 200px;
  cursor: pointer;
  @media (max-width: 400px) {
    width: 100%;
    max-height: none;
  }
`;

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export default Project;
