function ProviderCard({ provider, onClick }) {

    return (

        <div className="provider-card">

            <img
                src={provider.foto}
                alt={provider.nombre}
            />


            <div>

                <h3>
                    {provider.nombre}
                </h3>


                <p>
                    {provider.tipo === "empleado"
                        ? "👷 Ofrece sus servicios"
                        : "🏗️ Busca contratar"}
                </p>


                <p>
                    {provider.descripcion}
                </p>


                <p>
                    ⭐ {provider.rating}
                </p>


                <button
                    onClick={() => onClick(provider.id)}
                >
                    Ver perfil
                </button>

            </div>

        </div>

    );
}

export default ProviderCard;