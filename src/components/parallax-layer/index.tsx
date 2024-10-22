import { motion, useScroll, useTransform } from "framer-motion";
import { Title, Wrapper } from "./style";
import { useRef } from "react";

const ParallaxLayer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const batsY = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  return (
    <Wrapper ref={ref}>
      <Title style={{ y: textY }}>Scary Letter</Title>
      <motion.div
        style={{
          background: "url(/tombs_bg.webp)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          inset: "0px",
          zIndex: 0,
        }}
      />
      <motion.div
        style={{
          background: "url(/tombs_.webp)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          inset: "0px",
          zIndex: 60,
        }}
      />
      <motion.div
        style={{
          background: "url(/moon_bg.webp)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          position: "absolute",
          inset: "0px",
          zIndex: 10,
          y: moonY,
        }}
      />
      <motion.div
        style={{
          background: "url(/bats_bg.webp)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          position: "absolute",
          inset: "0px",
          zIndex: 20,
          y: batsY,
        }}
      />
    </Wrapper>
  );
};

export default ParallaxLayer;
