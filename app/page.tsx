"use client";

import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import History from "./components/History";
import Summary from "./components/Summary";

const Home = () => {
    const [currentPath, setPath] = useState('/');
    const handlePath = (path: string) => {
        setPath(path);
    };

    function pathOutter() {
        switch(currentPath) {
            case 'summary':
                return <Summary/>;
            case 'portfolio':
                return <div><h1>portfolio</h1></div>;
            case '/':
            default:
                return <History/>;
        }
    };

    useEffect(() => {
        console.log('path from child : ', currentPath);
    }, [currentPath]);

    return (
        <>  
            <Header onPathData={handlePath}/>
            <div style={{ paddingTop: '80px' }}> {pathOutter()}                
            </div>
            <Contact />
            <Footer />
        </>
    );
}

export default Home;