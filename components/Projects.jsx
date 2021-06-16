import React from "react";
import Project from "./Project";
import styled from "styled-components";
import { Title } from "../pages";

const projects = [
  {
    title: "Figo Pet Insurance App",
    link: "https://figopetinsurance.com/",
    image: {
      src: "/figo.png",
      alt: "Project Figo Pet Insurance",
    },
    description: {
      text1: "",
      link: "https://figopetinsurance.com/",
      linkText: "Figo Pet Insurance",
      text2:
        " is a Chicago-based company that serves for pet owners to improve communication with Vets around the globe. The main feature built included the creation of a chat for their React Native app to accelerate the live communication. This included real-time communication, history of chats, notifications, and ratings.",
      text3:
        "To do this we used SignalR and integrated with Mix Panel. I was front-end lead developer talking all major features.",
    },
  },
  {
    title: "JShip",
    link: "https://jship.com/",
    image: {
      src: "/jship.png",
      alt: "Project JShip",
    },
    description: {
      text1: "",
      link: "https://jship.com/",
      linkText: "JShip",
      text2:
        " is a tool to ship packages directly from your home. It allows you to compare prices across different service providers taking into consideration size and weight to maximize productivity while selecting the best cost effective service.",
      text3:
        "To do this we used a React front-end and integrated with a Rails back-end. I was front-end developer.",
    },
  },
  {
    title: "AyP soft website",
    link: "http://ayp.com.uy/",
    image: {
      src: "/aypweb.png",
      alt: "Project AyP soft",
    },
    description: {
      text1: "I developed the website of ",
      link: "http://ayp.com.uy/",
      linkText: "AyP soft",
      text2:
        " — an Uruguay-based company specialized in Enterprise Resource Planning for small and medium-size companies. I took part in the creation of the responsive designs making the web suitable for desktop, tablets and mobile browsers.",
      text3:
        "To do this I used React.js, Next.js, and JavaScript. It was an individual development and I took all features.",
    },
  },
];

const Projects = () => {
  return (
    <Main>
      <Title data-aos="fade-up" data-aos-offset="250">
        Projects
      </Title>
      <ProjectsGrid>
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            link={project.link}
            image={project.image}
            description={project.description}
          />
        ))}
      </ProjectsGrid>
    </Main>
  );
};

export default Projects;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: auto;
  gap: 40px;
  @media (max-width: 1250px) {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
`;

const Main = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
