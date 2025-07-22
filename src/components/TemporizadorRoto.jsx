import { useState } from 'react';

function TemporizadorRoto() {
  const [contador1, setContador1] = useState(5);

  // Mala práctica: setTimeout se llama en cada render
  const id = setTimeout(() => {
    if (contador1 > 0) {
      setContador1(contador1 - 1);
      console.log('kaixo roto:',contador1)
    }
  }, 1000);

  return <p>Tiempo restante roto: {contador1} segundos</p>;
}
export default TemporizadorRoto;
