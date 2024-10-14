'use client'
import styled from 'styled-components';
import { Ghost } from 'lucide-react';
import Image from 'next/image';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9a3412; /* bg-orange-900 */
  padding: 1rem;
`;

const StyledCard = styled.div`
  max-width: 40rem; /* max-w-2xl */
  width: 100%;
  background-color: #fef3c7; /* bg-yellow-100 */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); /* shadow-xl */
  transform: rotate(1deg);
  overflow: hidden;
  position: relative;
`;

const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background-color: #f87171; /* bg-red-400 */
`;

const Content = styled.div`
  padding: 2rem;
  padding-top: 3rem;
`;

const ImageContainer = styled.div`
  margin-bottom: 1.5rem;
  transform: rotate(-3deg);

  .image-wrapper {
    background-color: white;
    padding: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
    display: inline-block;
    position: relative;
  }

  img {
    width: 12rem; /* w-48 */
    height: 12rem;
    object-fit: cover;
    filter: grayscale(100%);
  }

  .border-overlay {
    position: absolute;
    inset: 0;
    border: 4px solid white;
  }

  .caption {
    text-align: center;
    margin-top: 0.5rem;
    font-family: 'Handwriting', cursive;
    font-size: 0.875rem; /* text-sm */
  }
`;

const StoryText = styled.div`
  font-family: 'Handwriting', cursive;
  font-size: 1.125rem; /* text-lg */
  line-height: 1.75rem;
  color: #374151; /* text-gray-800 */
  position: relative;
  z-index: 10;
`;

const BouncingGhost = styled(Ghost)`
  color: #f97316; /* text-orange-500 */
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  animation: bounce 1.5s infinite;
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, #60a5fa 0.2px, transparent 0.7px), /* theme(colors.blue.300) */
    linear-gradient(to bottom, #60a5fa 0.2px, transparent 0.7px);
  background-size: 24px 24px;
  pointer-events: none;
  z-index: -1;
`;

const Letter = () => {
  return (
    <Container>
      <StyledCard>
        <TopBar />
        <Content>
          <ImageContainer>
            <div className="image-wrapper">
              <Image src="https://placehold.co/200x200/png" width={200} height={200} alt="Spooky House"/>
              <div className="border-overlay" />
            </div>
          </ImageContainer>
          <StoryText>
            <p>Una fría noche de Halloween, Clara escuchó suaves susurros que venían del ático...</p>
            <p>De repente, los susurros se convirtieron en risas aterradoras...</p>
            <p>Nadie volvió a verla, pero cada Halloween se escucha su risa en la vieja casa.</p>
          </StoryText>
          <BouncingGhost size={32} />
        </Content>
        <GridOverlay />
      </StyledCard>
    </Container>
  );
};

export default Letter;
