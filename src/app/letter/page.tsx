"use client";
import { useStory } from "@/context/StoryContext";
import { Container, ImageWrapper } from "./style";
import {
  BouncingGhost,
  Content,
  GridOverlay,
  ImageContainer,
  StoryText,
  StyledCard,
  TopBar,
} from "./style";
import { useEffect, useState } from "react";
import { STORY_PROMPT } from "@/constants/prompt";
import { generateLetter } from "@/services/get-letter";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import Spinner from "@/components/spinner";

const Letter = () => {
  const { name, imageUrl, theme, image, setImageUrl } = useStory();
  const [letter, setLetter] = useState<any>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const prompt = STORY_PROMPT.replace("{name}", name).replace(
      "{theme}",
      theme
    );

    const getLetter = async () => {
      const letter = await generateLetter(prompt);
      try {
        const parsedLetter = JSON.parse(letter || "");
        setLetter(parsedLetter);

        // const promptText = `Añade un background de terror basado en una historia de ${parsedLetter?.resumen}`;
        // const encodedPrompt = encodeURIComponent(promptText);

        const myImage = getCldImageUrl({
          src: image,
          width: 300,
          height: 300,
          replaceBackground:  `Añade un background de terror basado en una historia de ${parsedLetter?.resumen}`,
        });

        setImageUrl(myImage);
      } catch (error) {
        console.error("Error generating letter:", error);
      }
    };

    getLetter();
  }, [name, theme, image, setImageUrl]);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  if (!letter && !imageUrl) {
    return <Spinner />;
  }

  return (
    <Container>
      <StyledCard>
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
  );
};

export default Letter;
