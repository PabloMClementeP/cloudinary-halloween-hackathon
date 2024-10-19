import styled, { keyframes } from "styled-components";

export const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

export const FloatingIcon = styled.div<{
  top: number;
  left: number;
  delay: number;
}>`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  animation: ${floatAnimation} 3s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  color: orangered;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Container = styled.div`
  min-height: calc(100vh - 60px);

  background: linear-gradient(to bottom, #7a341a, black);
  color: ${({ theme }) => theme.primaryColor};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Content = styled.div`
  max-width: 640px;
  text-align: center;
  z-index: 10;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: aliceblue;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: wheat;
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: wheat;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  a {
    color: #f97316;
  }
`;
