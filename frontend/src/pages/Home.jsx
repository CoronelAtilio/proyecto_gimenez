import { useEffect, useState } from "react";

import CategoryCard from "../components/CategoryCard";
import { getCategories } from "../services/api";


function Home({ onCategory }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        getCategories()
            .then(data => {
                setCategories(data);
            });

    }, []);


    return (
        <div>

            <h1>
                ¿Qué servicio necesitas?
            </h1>

            <div className="categories">

                {categories.map(category => (

                    <CategoryCard
                        key={category.id}
                        category={category}
                        onClick={onCategory}
                    />

                ))}

            </div>

        </div>
    );
}

export default Home;