"use client";
import { useStory } from "@/context/StoryContext";
import { useRef } from "react";
import { toPng } from "html-to-image";
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
import { uploadToCloudinary } from "@/services/upload-image";
import Image from "next/image";

const Letter = () => {
  const {
    name,
    imageUrl,
    theme,
    image,
    setImageUrl,
    uploadImage,
    setUploadImage,
  } = useStory();

  const { letter, isImageLoading, handleImageLoad } = useLetterImage(
    name,
    theme,
    image,
    setImageUrl
  );

  const elementRef = useRef<HTMLDivElement>(null);

  const uploadLetter = async () => {
    if (elementRef.current) {
      try {
        const dataUrl = await toPng(elementRef.current, { cacheBust: false });

        const imageUrl = await uploadToCloudinary(dataUrl);

        setUploadImage(imageUrl);
      } catch (err) {
        console.log("Error generating image:", err);
      }
    }
  };

  const htmlToImageConvert = () => {
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
      console.log("No element ref");
    }
  };

  const shareOnX = () => {
    if (!uploadImage) uploadLetter();
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      uploadImage
    )}&text=¡Mi%20halloween%20carta!`;
    window.open(shareUrl, "_blank");
  };

  const shareOnFacebook = () => {
    if (!uploadImage) uploadLetter();
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      uploadImage
    )}`;
    window.open(shareUrl, "_blank");
  };

  if (!letter && isImageLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Container>
        <StyledButton onClick={htmlToImageConvert}>
          Descargar tu carta <ImageDown />
        </StyledButton>
        <div style={{ display: "flex", gap: "1rem" }}>
          <StyledButton onClick={shareOnX}>
            Compartir por
            <Image src="/twitter.png" alt="git logo" width={32} height={32} />
          </StyledButton>
          <StyledButton onClick={shareOnFacebook}>
            Compartir por
            <Image src="/facebook.png" alt="git logo" width={32} height={32} />
          </StyledButton>
        </div>
        <StyledCard ref={elementRef}>
          <TopBar />
          <Content>
            <ImageContainer>
              <ImageWrapper>
                {isImageLoading && (
                  <div
                    className="skeleton"
                    style={{ width: 300, height: 300 }}
                  />
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
