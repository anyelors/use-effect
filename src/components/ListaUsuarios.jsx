import { useState, useEffect } from "react";

function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if (!res.ok)
                    throw new Error("Error al obtener usuarios");
                return res.json();
            })
            .then((data) => {
                setUsuarios(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando usuarios...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuarios.map((user) => (
                    <li key={user.id}>{user.name} - {user.username}</li>
                ))}
            </ul>
        </>
    );
}

export default ListaUsuarios;
