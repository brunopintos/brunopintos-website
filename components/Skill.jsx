import React from "react";
import styled from "styled-components";

const Skill = ({ images, title, text }) => (
  <Container
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: 400,
    }}
  >
    <ImagesContainer>
      {images.map((image) => (
        <img
          key={image}
          src={image}
          alt={image.split(".")[0]}
          style={{
            maxWidth: 250 / images.length,
            maxHeight: 100,
            marginLeft: 5,
            marginRight: 5,
          }}
        />
      ))}
    </ImagesContainer>
    <h4 style={{ marginBottom: 6 }}>{title}</h4>
    <p style={{ textAlign: "center" }}>{text}</p>
  </Container>
);

const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 2px dashed #242e69;
  margin: 20px;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export default Skill;
