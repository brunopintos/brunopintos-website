import Head from 'next/head'
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bruno Pintos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <h1>
          Bruno Pintos
        </h1>
        <Subtitle style="#">
          Software developer
        </Subtitle>
        <Image src="/bruno.png" alt="profile image"></Image>
      </MainContainer>
    </div>
  )
}

const Subtitle = styled.h2`
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
  -webkit-clip-path: circle(60.0% at 50% 10%);
  clip-path: circle(50.0% at 50% 50%);
`;
