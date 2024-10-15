'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Ghost, Skull, Moon, Star } from "lucide-react";
import './style.css';

export default function Home() {
  const router = useRouter();

  const handleStartClick = () => {
    router.push('/start');
  };

  return (
    <div className="container">
      <div className="floating-icons">
        <Ghost className="floating-ghost" size={48} />
        <Ghost className="floating-ghost-alt" size={48} />
        <Skull className="floating-skull" size={48} />
        <Star className="floating-star" size={48} />
      </div>

      <Moon className="pulsing-moon" size={100} />

      <h1 className="title">Bienvenido a Scary Letter</h1>

      <p className="description">
        ¿Quieres enviar una carta con un cuento de terror a tus conocidos?
        <br />
        Sube tu foto, da el nombre a quien irá escrita y compártela!
      </p>

      <Link href="/start">
        <button className="button">
          <Ghost style={{ marginRight: '1rem' }} />
          Generar mi carta
          <Skull style={{ marginLeft: '1rem' }} />
        </button>
      </Link>

      <div className="disclaimer">
        Atención: Entra bajo tu propia responsabilidad. Los espíritus están inquietos esta noche...
      </div>
    </div>
  );
}
