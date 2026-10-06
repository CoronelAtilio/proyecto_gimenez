import { useState } from "react";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Provider from "./pages/Provider";


function App() {

    const [category, setCategory] = useState(null);

    const [providerId, setProviderId] = useState(null);


    function selectCategory(category) {

        setCategory(category);
        setProviderId(null);

    }


    function selectProvider(providerId) {

        setProviderId(providerId);

    }


    function goHome() {

        setCategory(null);
        setProviderId(null);

    }


    function goBackCategory() {

        setProviderId(null);

    }


    return (

        <div className="app">

            <header>

                <h2
                    onClick={goHome}
                    style={{
                        cursor: "pointer"
                    }}
                >
                    AIIIUDA
                </h2>

            </header>


            <main>


                {!category && !providerId && (

                    <Home
                        onCategory={selectCategory}
                    />

                )}


                {category && !providerId && (

                    <Category
                        category={category}
                        onProvider={selectProvider}
                    />

                )}


                {providerId && (

                    <Provider
                        providerId={providerId}
                        onBack={goBackCategory}
                    />

                )}


            </main>

        </div>
    );
}


export default App;