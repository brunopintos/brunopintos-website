import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bruno Pintos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <Title>Bruno Pintos</Title>
        <Subtitle>Software developer</Subtitle>
        <Image src="/bruno.png" alt="profile image" />
        <Text>
          I live in Montevideo, Uruguay and work on{" "}
          <Company href="https://effectussoftware.com/" target="_blank">
            Effectus Software
          </Company>{" "}
          — a mobile & web applications development agency. My favorite
          technologies right now are: React.js, React Native, Typescript, GraphQL, Node.js,
          and MongoDB.
        </Text>
        <SocialMediaImageContainer>
          <a
            href="https://www.linkedin.com/in/bruno-pintos-sugliano-5bba04154/"
            target="_blank"
          >
            <SocialMediaImage src="/linkedin.png" alt="linkedin image" />
          </a>
          <a href="https://github.com/brunopintos" target="_blank">
            <SocialMediaImage src="/github.png" alt="github image" />
          </a>
          <a href="https://twitter.com/brunopintos98" target="_blank">
            <SocialMediaImage src="/twitter.png" alt="twitter image" />
          </a>
          <a href="mailto:brunopintos98@gmail.com" target="_blank">
            <MailImageContainer>
              <SocialMediaImage
                style={{
                  width: 28,
                  borderRadius: 0,
                }}
                src="/mail.png"
                alt="mail image"
              />
            </MailImageContainer>
          </a>
        </SocialMediaImageContainer>
      </MainContainer>
    </div>
  );
}

const Title = styled.h1`
  margin: 0px;
  margin-bottom: 12px;
`;

const Subtitle = styled.h2`
  margin-top: 0px;
  color: #3f51b5;
`;

const Text = styled.p`
  text-align: center;
  margin-bottom: 40px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Company = styled.a`
  color: #3f51b5;
  font-weight: 600;
`;

const MainContainer = styled.div`
  margin: auto;
  max-width: 600px;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 200px;
  border-radius: 50%;
`;

const SocialMediaImageContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
`;

const SocialMediaImage = styled.img`
  max-width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const MailImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
`;
