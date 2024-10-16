import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animaciones
const float = keyframes`
  50% {
    transform: translateY(0.1em);
  }
`;

const eyeLeft = keyframes`
  5%, 95% {
    width: 0.2em;
    height: 0.2em;
    border-radius: 50%;
  }
  28%, 33%, 38% {
    width: 0.2em;
    height: 0.1em;
    border-radius: 0.03em 0.03em 0.1em 0.1em;
  }
  61%, 66%, 71% {
    width: 0.2em;
    height: 0.2em;
    border-radius: 0.01em 0.2em;
  }
`;

const eyeRight = keyframes`
  5%, 95% {
    width: 0.2em;
    height: 0.2em;
    border-radius: 50%;
  }
  28%, 33%, 38% {
    width: 0.2em;
    height: 0.1em;
    border-radius: 0.03em 0.03em 0.1em 0.1em;
  }
  61%, 66%, 71% {
    width: 0.2em;
    height: 0.2em;
    border-radius: 0.2em 0.01em;
  }
`;

const mouth = keyframes`
  5%, 95% {
    width: 0.3em;
    height: 0.15em;
    border-radius: 0.02em 0.02em 0.15em 0.15em;
  }
  28%, 33%, 38% {
    width: 0.2em;
    height: 0.2em;
    border-radius: 0.15em 0.15em 0.05em 0.05em;
  }
  61%, 66%, 71% {
    width: 0.4em;
    height: 0.15em;
    border-radius: 0.4em 0.4em 0.2em 0.2em;
  }
`;

const tail = keyframes`
  100% {
    transform: translateX(0.333em);
  }
`;

const dots = keyframes`
  25% { content: '.'; }
  50% { content: '..'; }
  75% { content: '...'; }
`;

// Estilos usando styled-components
const GhostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 40vmin;
  background-color: #31253d;
  padding: 0.5rem;
`;

const Ghost = styled.div`
  position: relative;
  overflow: hidden;
  height: 1.3em;
  filter: drop-shadow(0.02em 0.02em 0.02em rgba(0, 0, 0, 0.4));
  animation: ${float} 3s ease-in-out infinite;
  opacity: 0.9;
`;

const GhostBody = styled.div`
  width: 1em;
  height: 1.1em;
  border-radius: 0.5em 0.5em 0 0;
  background-color: #ff6f3c;
  position: relative;
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0.5em;
    width: 0.2em;
    height: 0.2em;
    border-radius: 50%;
    background-color: #222;
    transform: translate(-50%, -50%);
  }
  &::before {
    left: 30%;
    animation: ${eyeLeft} 4s ease-in-out infinite;
  }
  &::after {
    left: 70%;
    animation: ${eyeRight} 4s ease-in-out infinite;
  }
`;

const GhostMouth = styled.div`
  position: absolute;
  top: 0.78em;
  left: 50%;
  width: 0.3em;
  height: 0.15em;
  border-radius: 0.02em 0.02em 0.15em 0.15em;
  background-color: #222;
  transform: translate(-50%, -50%);
  animation: ${mouth} 4s ease-in-out infinite;
`;

const GhostTail = styled.div`
  position: absolute;
  width: 0.333em;
  height: 0.2em;
  background-color: #ff6f3c;
  border-radius: 0 0 0.166em 0.166em;
  animation: ${tail} 600ms linear infinite;
`;

const GhostTail1 = styled(GhostTail)`
  left: -0.333em;
`;
const GhostTail2 = styled(GhostTail)`
  left: 0;
`;
const GhostTail3 = styled(GhostTail)`
  left: 0.333em;
`;
const GhostTail4 = styled(GhostTail)`
  left: 0.666em;
`;

const PhraseOutput = styled.p`
  font-family: 'Creepster', cursive;
  font-size: 0.18em;
  color: #e6955f;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-shadow: 0.05em 0.05em 0.05em rgba(0, 0, 0, 0.4);
  margin-top: 1em;
  position: relative;
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    animation: ${dots} 850ms linear infinite;
  }
`;

const Spinner = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phrases = [
    "desenpolvando la momia",
    "apagando las luces",
    "llenando bolsas de chuches",
    "preparando el disfraz",
    "calibración del espantómetro",
    "contactando espíritus",
    "levantando muertos vivientes"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Avanzar al siguiente índice y volver al primero cuando se complete la lista
      setPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 1500); // Cambiar frase cada 1.5 segundos

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <GhostContainer>
      <Ghost>
        <GhostBody>
          <GhostMouth />
        </GhostBody>
        <GhostTail1 />
        <GhostTail2 />
        <GhostTail3 />
        <GhostTail4 />
      </Ghost>
      <PhraseOutput>{phrases[phraseIndex]}</PhraseOutput>
    </GhostContainer>
  );
};

export default Spinner;
