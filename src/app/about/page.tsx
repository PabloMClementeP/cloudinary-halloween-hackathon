"use client";
import React from "react";
import { Ghost, Skull, Star, Moon } from "lucide-react";
import Image from "next/image";
import { Container, Content, FloatingIcon, Paragraph, Subtitle, Title } from "./style";
import Link from "next/link";



export default function About() {
  return (
    <Container>
      {/* Floating Icons */}
      <FloatingIcon as={Ghost} top={10} left={10} delay={0} />
      <FloatingIcon as={Skull} top={20} left={80} delay={1} />
      <FloatingIcon as={Star} top={70} left={15} delay={2} />
      <FloatingIcon as={Moon} top={80} left={85} delay={3} />
      <FloatingIcon as={Ghost} top={40} left={90} delay={4} />
      <FloatingIcon as={Skull} top={60} left={5} delay={5} />

      {/* Content */}
      <Content>
        <Title>Acerca de Scary Letter</Title>
        <Paragraph>
          ¿Listo para una buena dosis de sustos y risas? Scary Letter fue creado
          por <Link href={"https://github.com/PabloMClementeP"}>Pablo Clemente</Link>, apasionado desarrollador de software con una
          obsesión saludable por Halloween y las historias de terror. Mi
          objetivo es brindarte una experiencia única y espeluznante para
          compartir cuentos terroríficos con amigos y familiares, con un toque
          de humor oscuro.
        </Paragraph>
        <Paragraph>
          Este proyecto se creó para la hackathon de <Link href={"https://midu.dev/"}>Midudev</Link> y <Link href={"https://cloudinary.com/"}>Clodinary</Link>, donde la
          creatividad y la tecnología se encuentran para dar vida a ideas
          increíbles. Allí nace mi idea de esta plataforma interactiva de narración de historias de miedo.
          Con Scary Letter, espero inspirar la imaginación, arrancar sonrisas
          nerviosas y provocar escalofríos con cada carta generada.
        </Paragraph>
        <Paragraph>
          Prepárate para dejar volar tu creatividad y sumergirte en el mundo de
          los sustos más graciosos y espeluznantes. ¡Que comiencen los sustos!
        </Paragraph>
        <Subtitle>Link al repositorio</Subtitle>
        <Link href={'https://github.com/PabloMClementeP/cloudinary-halloween-hackathon'} target="_blank">
        <Image
          src="/git.webp" 
          alt="git logo"
          width={100}
          height={100}
          />
          </Link>
      </Content>

    </Container>
  );
}
