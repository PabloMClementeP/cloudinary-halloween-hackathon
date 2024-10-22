import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100dvh - 60px);
  overflow: hidden;
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(motion.h2)`
  font-size: 8rem;
  font-weight: 400;
  color: #cf8415;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
  font-family: "Creepster", cursive;
  text-align: center;
  position: relative;
  z-index: 60;
  top: -50px;
`;
