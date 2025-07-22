import { useState, useEffect } from 'react';

function TemporizadorRegresivo() {
  const [contador, setContador] = useState(3);

  useEffect(() => {
    if (contador === 0) {
      console.log('¡Tiempo terminado!');
      return;
    }

    const id = setTimeout(() => {
      setContador(prev => prev - 1);
      console.log('kaixo:', contador)
    }, 1000);

    return () => clearTimeout(id); // Limpieza por si se desmonta
  }, [contador]); // Se vuelve a ejecutar cuando cambia el contador

  return <p>Tiempo restante: {contador} segundos</p>;
}

export default TemporizadorRegresivo;