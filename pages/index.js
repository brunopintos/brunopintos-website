import Head from "next/head";
import styled, { keyframes } from "styled-components";

export default function Home() {
  return (
    <Main>
      <Head>
        <title>Bruno Pintos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <Title>Bruno Pintos</Title>
        <Subtitle>Software developer</Subtitle>
        <Image src="/bruno.png" alt="profile image" />
        <Text>
          I live in Montevideo, Uruguay, and work at{" "}
          <Company href="https://effectussoftware.com/" target="_blank">
            Effectus Software
          </Company>{" "}
          — a mobile & web applications development agency. My favorite
          technologies right now are: React.js, React Native, Typescript,
          GraphQL, Node.js, and MongoDB.
        </Text>
        <SocialMediaImageContainer>
          <a
            href="https://www.linkedin.com/in/bruno-pintos-sugliano-5bba04154/"
            target="_blank"
          >
            <MediaLink>
              <SocialMediaImage src="/linkedin.png" alt="linkedin image" />
            </MediaLink>
          </a>
          <a href="https://github.com/brunopintos" target="_blank">
            <MediaLink>
              <SocialMediaImage src="/github.png" alt="github image" />
            </MediaLink>
          </a>
          <a href="https://twitter.com/brunopintos98" target="_blank">
            <MediaLink>
              <SocialMediaImage src="/twitter.png" alt="twitter image" />
            </MediaLink>
          </a>
          <a href="mailto:brunopintos98@gmail.com" target="_blank">
            <MediaLink>
              <SocialMediaImage src="/mail.png" alt="mail image" />
            </MediaLink>
          </a>
        </SocialMediaImageContainer>
        <DownArrowContainer>
          <DownArrow src="/down-arrow.png" alt="go down arrow" />
        </DownArrowContainer>
      </MainContainer>

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
          <img
            data-aos="fade-up"
            data-aos-offset="250"
            src="/aypweb.png"
            alt="proyect ayp soft"
            style={{ width: 400, cursor: "pointer" }}
          />
        </a>
        <Text data-aos="fade-up" data-aos-offset="0">
          I developed the website of{" "}
          <Company href="http://ayp.com.uy/" target="_blank">
            Ayp soft
          </Company>{" "}
          — an Uruguay-based company specialized in Enterprise Resource
          Planning. For the project, I used the following technologies:
          React.js, Next.js, and JavaScript
        </Text>
      </MainContainer>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3f51b5;
  color: #fff;
`;

const MainContainer = styled.div`
  margin: auto;
  width: 100vw;
  height: 100vh;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-bottom: 80px;
`;

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 12px;
`;

const Subtitle = styled.h2`
  margin-top: 0px;
  color: #9fa8da;
`;

const Text = styled.p`
  text-align: center;
  line-height: 1.5em;
`;

const Company = styled.a`
  color: #9fa8da;
  font-weight: 600;
  transition: 0.3s;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: white;
    }
  }
`;

const Image = styled.img`
  max-width: 200px;
  border-radius: 50%;
`;

const SocialMediaImageContainer = styled.div`
  width: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

const SocialMediaImage = styled.img`
  height: 32px;
  cursor: pointer;
  transition: 0.3s;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      height: 40px;
    }
  }
`;

const MediaLink = styled.div`
  height: 40px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const move = keyframes`
  0%, 100% {
    bottom: 60px;
  }
  50% {
    bottom: 75px;
  }
`;

const DownArrowContainer = styled.div`
  animation: ${move} 1s linear infinite;
  position: absolute;
  left: "50%";
  bottom: 60px;
`;

const DownArrow = styled.img`
  width: 40px;
  position: relative;
  left: "-50%";
`;
