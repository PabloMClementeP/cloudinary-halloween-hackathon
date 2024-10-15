"use client";
import { useStory } from "@/context/StoryContext";
import { Container } from "./style";
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

const Letter = () => {
  const { name, imageUrl, theme, image, setImageUrl } = useStory();
  const [letter, setLetter] = useState<any>(null);


  useEffect(() => {
    const prompt = STORY_PROMPT.replace("{name}", name).replace(
      "{theme}",
      theme
    );

    const getLetter = async () => {
      const letter = await generateLetter(prompt);
      try {
        setLetter(JSON.parse(letter || ""));
      } catch (error) {
        console.error("Error generating letter:", error);
      }
    };

    getLetter();

    const myImage = getCldImageUrl({
      src: image,
      width: 300,
      height: 300,
      replaceBackground:
      `Añade un background de terror basado en una hostoria de ${letter?.resumen}`
    });
    setImageUrl(myImage);

  }, []);


if(imageUrl === ""){
  return <div>Loading...</div>
}

  return (
    <Container>
      <StyledCard>
        <TopBar />
        <Content>
          <ImageContainer>
            <div className="image-wrapper">
                <Image
                  width="100"
                  height="100"
                  src={imageUrl}
                  sizes="100vw"
                  alt="Scary image"
                />
              <div className="border-overlay" />
            </div>
          </ImageContainer>
          {letter ? (
            <StoryText>
              <p>{letter.historia}</p>
            </StoryText>
          ) : (
            <>Loading ....</>
          )}
          <BouncingGhost size={32} />
        </Content>
        <GridOverlay />
      </StyledCard>
    </Container>
  );
};

export default Letter;
