import { useState } from 'react';

function TemporizadorRoto() {
  const [contador1, setContador1] = useState(5);

  // Mala práctica: setTimeout se llama en cada render
  const id = setTimeout(() => {
    if (contador1 > 0) {
      setContador1(prev => prev - 1);
      console.log('contador roto:', contador1);
      console.log('contador roto id:', id);
    }
  }, 1000);

  return <p>Tiempo restante roto: {contador1} segundos</p>;
}
export default TemporizadorRoto;
