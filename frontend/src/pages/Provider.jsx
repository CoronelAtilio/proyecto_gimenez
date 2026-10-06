import { useEffect, useState } from "react";

import { getProvider } from "../services/api";


function Provider({ providerId, onBack }) {

    const [provider, setProvider] = useState(null);


    useEffect(() => {

        getProvider(providerId)
            .then(data => {
                setProvider(data);
            });

    }, [providerId]);


    if (!provider) {

        return <p>Cargando perfil...</p>;

    }


    return (

        <div>

            <button onClick={onBack}>
                ← Volver
            </button>


            <div className="profile">

                <img
                    src={provider.foto}
                    alt={provider.nombre}
                    className="profile-image"
                />


                <h1>
                    {provider.nombre}
                </h1>


                <p>
                    {provider.descripcion}
                </p>


                <p>
                    ⭐ {provider.rating}
                    {" "}
                    ({provider.calificaciones} calificaciones)
                </p>


                <p>
                    {provider.verificado
                        ? "✓ Usuario verificado"
                        : "Usuario no verificado"}
                </p>


                <hr />


                <h3>
                    Información
                </h3>


                <p>
                    Tipo:{" "}
                    {provider.tipo === "empleado"
                        ? "Ofrece sus servicios"
                        : "Busca contratar"}
                </p>


                <p>
                    Experiencia: {provider.experiencia}
                </p>


                <p>
                    Disponibilidad: {provider.disponibilidad}
                </p>


                <p>
                    Horario: {provider.horario}
                </p>


                <hr />


                <h3>
                    Contacto
                </h3>


                <p>
                    📞 {provider.telefono}
                </p>


                <p>
                    ✉️ {provider.email}
                </p>


                {provider.urgencias && (

                    <p>
                        🚨 Atiende urgencias
                    </p>

                )}


                <button>
                    Contactar
                </button>

            </div>

        </div>

    );
}


export default Provider;