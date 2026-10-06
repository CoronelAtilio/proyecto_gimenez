import { useEffect, useState } from "react";

import ProviderCard from "../components/ProviderCard";
import SearchBar from "../components/SearchBar";

import {
    getProviders,
    getLocations
} from "../services/api";


function Category({ category, onProvider }) {

    const [providers, setProviders] = useState([]);

    const [locations, setLocations] = useState([]);

    const [search, setSearch] = useState("");

    const [location, setLocation] = useState("");

    const [type, setType] = useState("");


    useEffect(() => {

        getLocations()
            .then(data => {
                setLocations(data);
            });

    }, []);


    useEffect(() => {

        getProviders(
            category.id,
            location || null,
            type || null,
            search || null
        )
        .then(data => {

            setProviders(data);

        });

    }, [
        category,
        location,
        type,
        search
    ]);


    return (

        <div>

            <h1>
                {category.icono} {category.nombre}
            </h1>


            <SearchBar
                value={search}
                onChange={setSearch}
            />


            <div className="filters">

                <select
                    value={location}
                    onChange={(event) =>
                        setLocation(event.target.value)
                    }
                >

                    <option value="">
                        Todas las localidades
                    </option>


                    {locations.map(location => (

                        <option
                            key={location.id}
                            value={location.id}
                        >
                            {location.nombre}
                        </option>

                    ))}

                </select>


                <select
                    value={type}
                    onChange={(event) =>
                        setType(event.target.value)
                    }
                >

                    <option value="">
                        Todos
                    </option>

                    <option value="empleado">
                        👷 Profesionales
                    </option>

                    <option value="empleador">
                        🏗️ Empleadores
                    </option>

                </select>

            </div>


            <p>
                {providers.length} resultados
            </p>


            {providers.map(provider => (

                <ProviderCard
                    key={provider.id}
                    provider={provider}
                    onClick={onProvider}
                />

            ))}


            {providers.length === 0 && (

                <p>
                    No encontramos resultados.
                </p>

            )}

        </div>
    );
}


export default Category;