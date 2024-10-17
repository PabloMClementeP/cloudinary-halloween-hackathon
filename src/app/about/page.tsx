"use client";
import React from "react";
import { Ghost, Skull, Star, Moon } from "lucide-react";
import Image from "next/image";
import { Container, Content, FloatingIcon } from "./style";
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
        <h1>Acerca de Scary Letter</h1>
        <p>
          ¿Listo para una buena dosis de sustos y risas? Scary Letter fue creado
          por Pablo Clemente, un apasionado desarrollador de software con una
          obsesión saludable por Halloween y las historias de terror. Nuestro
          objetivo es brindarte una experiencia única y espeluznante para
          compartir cuentos terroríficos con amigos y familiares, con un toque
          de humor oscuro.{" "}
        </p>
        <p>
          Este proyecto nació en la hackathon de Midudev y Cloudinary, donde la
          creatividad y la tecnología se encuentran para dar vida a ideas
          increíbles. Pablo, un entusiasta de la programación y el diseño web,
          combina sus habilidades técnicas con su desbordante imaginación para
          crear esta plataforma interactiva de narración de historias de miedo.
          Con Scary Letter, esperamos inspirar la imaginación, arrancar sonrisas
          nerviosas y provocar escalofríos con cada carta generada.
        </p>
        <p>
          Prepárate para dejar volar tu creatividad y sumergirte en el mundo de
          los sustos más graciosos y espeluznantes. ¡Que comiencen los sustos!
        </p>
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
