import { useEffect } from 'react';

function Mensaje() {
  useEffect(() => {
    console.log('El componente se ha montado');
  }, []);

  return <h2>Bienvenido</h2>;
}

export default Mensaje;