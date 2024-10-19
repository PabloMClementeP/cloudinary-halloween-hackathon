"use client";
import { useStory } from "@/context/StoryContext";
import { useRef } from "react";
import { toPng } from 'html-to-image';
import { ImageDown } from "lucide-react";
import { Container, ImageWrapper, StyledButton } from "./style";
import {
  BouncingGhost,
  Content,
  GridOverlay,
  ImageContainer,
  StoryText,
  StyledCard,
  TopBar,
} from "./style";
import Spinner from "@/components/spinner";
import useLetterImage from "@/hooks/useLetterImage"; 

const Letter = () => {
  const { name, imageUrl, theme, image, setImageUrl } = useStory();

  const { letter, isImageLoading, handleImageLoad } = useLetterImage(
    name,
    theme,
    image,
    setImageUrl
  );

  const elementRef = useRef<HTMLDivElement>(null);

  const htmlToImageConvert = () => {
    console.log('convert');
    if (elementRef.current) {

      toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${name}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log("Error generating image:", err);
      });
    } else {
      console.log('No element ref');
      }
  };


  if (!letter && isImageLoading) {
    return <Spinner />;
  }

  return (
    <>
    <Container>
    <StyledButton onClick={htmlToImageConvert}>Descargar tu carta <ImageDown /></StyledButton>
      <StyledCard ref={elementRef}>
        <TopBar />
        <Content>
          <ImageContainer>
            <ImageWrapper>
              {isImageLoading && (
                <div className="skeleton" style={{ width: 300, height: 300 }} />
              )}

              <img
                width={300}
                height={300}
                src={imageUrl}
                sizes="100vw"
                alt="Scary image"
                onLoad={handleImageLoad}
                className={isImageLoading ? "hidden" : ""}
                />
              <div className="border-overlay" />
            </ImageWrapper>
          </ImageContainer>

          <StoryText>
            <p>{letter?.historia}</p>
          </StoryText>
          <BouncingGhost size={32} />
        </Content>
        <GridOverlay />
      </StyledCard>
    </Container>
    </>
  );
};

export default Letter;
