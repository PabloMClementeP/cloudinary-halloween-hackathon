import styled from "styled-components";
import { Ghost } from 'lucide-react';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9a3412; /* bg-orange-900 */
  padding: 1rem;
`;

export const StyledCard = styled.div`
  max-width: 40rem; /* max-w-2xl */
  width: 100%;
  background-color: #fef3c7; /* bg-yellow-100 */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); /* shadow-xl */
  transform: rotate(1deg);
  overflow: hidden;
  position: relative;
`;

export const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background-color: #f87171; /* bg-red-400 */
`;

export const Content = styled.div`
  padding: 1rem;
  padding-top: 0.5rem;
`;

export const ImageContainer = styled.div`
  transform: rotate(-3deg);
  display: flex;
  justify-content: center;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 1.5rem;

  .image-wrapper {
    background-color: white;
    padding: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
    display: inline-block;
    position: relative;
  }

  img {
    width: 100%; /* w-48 */
    height: auto;
    object-fit: cover;
    /* filter: grayscale(100%); */
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

export const StoryText = styled.div`
  font-family: var(--font-gloria), cursive;
  font-size: 1.125rem; /* text-lg */
  line-height: 1.75rem;
  color: #374151; /* text-gray-800 */
  position: relative;
  z-index: 10;
`;

export const BouncingGhost = styled(Ghost)`
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

export const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, #60a5fa 0.2px, transparent 0.7px), /* theme(colors.blue.300) */
    linear-gradient(to bottom, #60a5fa 0.2px, transparent 0.7px);
  background-size: 24px 24px;
  pointer-events: none;
  z-index: -1;
`;



/* Tu archivo CSS o módulo CSS */
export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

.skeleton {
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f5f5f5;
  }
  100% {
    background-color: #e0e0e0;
  }
}

.hidden {
  display: none;
}
`


