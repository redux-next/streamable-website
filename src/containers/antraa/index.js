import React from "react";
import {
  Button,
  LeftContainer,
  RightContainer,
  SubText,
  Title,
  Container,
  Wrapper,
  ImageContainer,
  DownloadButton,
} from "./AntraaContainer.styles";

import appShowOff from "../../assets/images/app-show-off.png";
import Image from "next/image";

const AntraaContainer = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Title>Streamable Android App</Title> */}
        <ImageContainer>
          <LeftContainer>
            
          </LeftContainer>
          <Image src={appShowOff} />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default AntraaContainer;
