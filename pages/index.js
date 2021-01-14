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
        <h1>Bruno Pintos</h1>
        <Subtitle>Software developer</Subtitle>
        <Image src="/bruno.png" alt="profile image" />
        <SocialMediaImageContainer>
          <a href="https://www.linkedin.com/in/bruno-pintos-sugliano-5bba04154/">
            <SocialMediaImage src="/linkedin.png" alt="linkedin image" />
          </a>
          <a href="https://github.com/brunopintos">
            <SocialMediaImage src="/github.png" alt="github image" />
          </a>
          <a href="https://twitter.com/brunopintos98">
            <SocialMediaImage src="/twitter.png" alt="twitter image" />
          </a>
          <a href="mailto:brunopintos98@gmail.com">
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

const Subtitle = styled.h2`
  margin-top: 0px;
  margin-bottom: 40px;
  color: #3f51b5;
`;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
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
  margin-top: 20px;
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
