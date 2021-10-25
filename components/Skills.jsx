import React from "react";
import styled from "styled-components";
import { MainContainer, Title } from "../pages/index";
import Skill from "./Skill";
import dayjs from "dayjs";

const skills = [
  {
    images: [
      "/react.png",
    ],
    level: 10,
    title: "React/React Native",
    text: `I've been part of different projects with React and React Native for the past ${dayjs().year() - 2019}+ years, and I have the ability to operate effortlessly with this technologies. I am familiar with concepts such as virtual DOM, JSX, functional components, hooks, Redux, components lifecycle, custom hooks, HOCs, etc.`
  },
  {
    images: [
      "/figma.png",
      "/sketch.png",
      "/zeplin.png",
    ],
    level: 7,
    title: "Design Tools",
    text: "I have been part of several projects with design tools such as Figma, Sketch, and Zeplin. I am used to its interface, which makes it easy for me to export files, navigate through the screens' flow, and comment on parts of the design to discuss different approaches with the project designers."
  },
  {
    images: [
      "/javascript.png",
      "/typescript.png",
    ],
    level: 6,
    title: "Languages",
    text: "React and React Native are javascript-based, so my preferred languages are Javascript and Typescript. I usually prefer to work with the last one, because of the additional typing, generics, interfaces, etc, which makes it a more robust language in my opinion."
  },
  {
    images: [
      "/node.png",
      "/rails.png",
      "/java.png",
    ],
    level: 5,
    title: "Back-end",
    text: "For back-end or full-stack projects, I have experience working with Node or Java, creating, in most cases, desktop apps. I also took part as a front-end developer in many projects that had a Ruby on Rails back-end, so I have some basic knowledge of that language too."
  },
  {
    images: [
      "/git.png",
      "/github.png",
      "/gitlab.png",
      "/bitbucket.png",
    ],
    level: 9,
    title: "Git",
    text: "I have been working with Git since college, and I am really used to the tool. Regarding online repositories, I've been part of projects stored on Github, Bitbucket, and Gitlab. I'm really familiar with concepts such as commits, pull/push, stash, rebase, merge, pull requests, reviews, approvals, and more."
  },
  {
    images: [
      "/jira.png",
      "/trello.png",
    ],
    level: 8,
    title: "Management Tools",
    text: "As a really important part of the software development process, the management tools were always there for me. I used others, but on most projects, I have been working with Jira or Trello and consider them the best. Allowing many integrations (time-tracking apps, design tools, online repositories, etc.) makes them great management tools."
  },
  {
    images: [
      "/electron.png",
      "/phaser.png",
    ],
    level: 4,
    title: "Other JS Frameworks",
    text: "I also had the opportunity to work with Electron, a cross-platform desktop application framework based on Node. And with Phaser, which is a Javascript game framework."
  },
];

const renderSkills = () =>
  skills
    .sort((a, b) => b.level - a.level)
    .map((s) => {
      const { images, title, text } = s;
      return <Skill key={title} images={images} title={title} text={text} />;
    });

const Skills = () => (
  <MainContainer style={{minHeight: '100vh', height: 'auto'}}>
    <Title data-aos="fade-up" data-aos-offset="250">
      Skills
    </Title>
    <Container data-aos="fade-up" data-aos-offset="250">
      {renderSkills()}
    </Container>
  </MainContainer>
);

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Skills;
