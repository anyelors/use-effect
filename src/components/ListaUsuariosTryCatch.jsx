import { useState, useEffect } from 'react';

function ListaUsuariosTryCatch() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Declaramos la función async dentro del useEffect
        const obtenerUsuarios = async () => {
            try {
                // Intenta obtener la respuesta de la API
                const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');

                // Si la respuesta no es exitosa (status fuera de 200–299), lanza un error
                if (!respuesta.ok) {
                    throw new Error('No se pudieron obtener los usuarios');
                }

                // Convierte la respuesta en formato JSON
                const datos = await respuesta.json();

                // Actualiza el estado con los usuarios obtenidos
                setUsuarios(datos);
            } catch (err) {
                // Si algo falló, guarda el mensaje de error
                setError(err.message);
            } finally {
                // Independientemente del resultado (éxito o error), termina la carga
                setLoading(false);
            }
        };

        // Ejecutamos la función async
        obtenerUsuarios();
    }, []); // Solo se ejecuta una vez al montar el componente

    // Renderizado condicional según estado
    if (loading) return <p>🔄 Cargando usuarios...</p>;
    if (error) return <p>⚠️ Error: {error}</p>;

    return (
        <select>
            {usuarios.map(user => (
                <option key={user.id} value={user.id}>{user.name}</option>
            ))}
        </select>
    );
}
export default ListaUsuariosTryCatch;
