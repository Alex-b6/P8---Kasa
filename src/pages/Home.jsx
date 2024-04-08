import { useContext } from "react";

import Card from "../components/Card";

import HeroBanner from "../components/HeroBanner";

import BaseDataContext from "../Context/BaseDataContext";


const Home = () => {
    const dataHosts = useContext(BaseDataContext);

    return (
        <div className="app">
            
            <main>
                <HeroBanner img="./homeImage.jpg">
                    <h1>Chez vous, partout et ailleurs</h1>
                </HeroBanner>

                <section className="cards">
                    {dataHosts.map((host) => (
                        <Card key={host.id} data={host} />
                    ))}
                </section>
            </main>
            
        </div>
    );
};

export default Home;