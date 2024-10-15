'use client'
import { useRouter } from 'next/navigation';
import { Button, Container, Description, Disclaimer, FloatingGhost, FloatingGhostAlt, FloatingIcons, FloatingSkull, FloatingStar, PulsingMoon, Title } from './style';
import Link from 'next/link';
import { Ghost, Skull } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  const handleStartClick = () => {
    router.push('/start');  
  };

  return (
    <Container>
    <FloatingIcons>
      <FloatingGhost size={48} />
      <FloatingGhostAlt size={48} />
      <FloatingSkull size={48} />
      <FloatingStar size={48} />
    </FloatingIcons>
    
    <PulsingMoon size={100} />
    
    <Title>Bienvenido a Scary Letter</Title>
    
    <Description>
      Quieres enviar una carta con un cuento de terror a tus conocidos?
<br />
      Sube tu foto, da el nombre a quien ira esctita y compartela!
    </Description>
    
    <Link href="/start">
      <Button>
        <Ghost style={{marginRight:'1rem'}} />
        Generar mi carta
        <Skull  style={{marginLeft:'1rem'}} />
      </Button>
    </Link>
    
    <Disclaimer>
      Atención: Entra bajo tu propia responsabilidad. Los espíritus están inquietos esta noche...
    </Disclaimer>
  </Container>
  );
}
