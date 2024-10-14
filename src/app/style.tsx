import { Ghost, Skull, Moon, Star } from "lucide-react"; 
import styled, { keyframes } from "styled-components";

export const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

export const floatDelay1 = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
`;

export const floatDelay2 = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const floatDelay3 = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-25px); }
  100% { transform: translateY(0); }
`;

export const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

// Contenedor principal
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #7a341a, black);
  color: #f97316;
  position: relative;
  overflow: hidden;
  padding: 0 1rem;
`;

// Contenedor de los íconos flotantes
export const FloatingIcons = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  svg {
    position: absolute;
  }
`;

export const FloatingGhost = styled(Ghost)`
  top: 2.5rem;
  left: 2.5rem;
  animation: ${float} 4s ease-in-out infinite;
`;

export const FloatingStar = styled(Star)`
  // Sustituto de Bat
  top: 5rem;
  right: 5rem;
  animation: ${floatDelay1} 4s ease-in-out infinite;
`;

export const FloatingSkull = styled(Skull)`
  bottom: 5rem;
  left: 5rem;
  animation: ${floatDelay2} 4s ease-in-out infinite;
`;

export const FloatingGhostAlt = styled(Ghost)`
  // Sustituto de Cauldron
  bottom: 2.5rem;
  right: 2.5rem;
  animation: ${floatDelay3} 4s ease-in-out infinite;
`;

// Ícono de la luna con animación de pulso
export const PulsingMoon = styled(Moon)`
  margin-bottom: 2rem;
  animation: ${pulse} 2s infinite;
`;

// Título y texto
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 40rem;
`;

export const Button = styled.button`
  background-color: #f97316;
  color: white;
  font-size: 1.125rem;
  padding: 1.5rem 2rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);

  &:hover {
    background-color: #fb923c;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Disclaimer = styled.div`
  margin-top: 3rem;
  font-size: 0.875rem;
  opacity: 0.7;
`;
