'use client'
import Image from 'next/image';
import { useStory } from '@/context/StoryContext';
import { Container } from '../style';
import { BouncingGhost, Content, GridOverlay, ImageContainer, StoryText, StyledCard, TopBar } from './style';
import { useEffect, useState } from 'react';
import { STORY_PROMPT } from '@/constants/prompt';
import { generateLetter } from '@/services/get-letter';


const Letter = () => {
  const { name, image, theme } = useStory();
  const [letter, setLetter] = useState <any>(null); 

  useEffect(() => {
    const prompt = STORY_PROMPT
    .replace("{name}", name)
    .replace("{theme}", theme);
    
    const getLetter = async () => {
      const letter = await generateLetter(prompt);
      try {
        setLetter(JSON.parse(letter || ''));
      } catch (error) {
        console.error('Error generating letter:', error);
      }
    };

    getLetter();
  }, []);

  console.log(letter);
  

  return (
    <Container>
      <StyledCard>
        <TopBar />
        <Content>
          <ImageContainer>
            <div className="image-wrapper">
              <Image src={image || "https://placehold.co/200x200/png"} width={200} height={200} alt="Spooky House"/>
              <div className="border-overlay" />
            </div>
          </ImageContainer>
          {letter ? (
            <StoryText>
              <p>{letter.historia}</p>
            </StoryText>
          )
        :
        (
          <>Loading ....</>
        )
        }
          {/* <StoryText>
            <p>Querido {name || "lector"},</p>
            <p>Una fría noche de Halloween, {name || "alguien"} escuchó suaves susurros que venían del ático...</p>
            <p>De repente, los susurros se convirtieron en risas aterradoras...</p>
            <p>Nadie volvió a ver a {name || "esa persona"}, pero cada Halloween se escucha su risa en la vieja casa.</p>
          </StoryText> */}
          <BouncingGhost size={32} />
        </Content>
        <GridOverlay />
      </StyledCard>
    </Container>
  );
};

export default Letter;