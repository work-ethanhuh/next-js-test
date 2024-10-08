"use client";

import React, { useEffect } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import smooth from "@/utils/smooth";
// import link from "@/utils/link";

export default function Home(){
    useEffect(() => {
        // smooth();
        // link();
    }, []);

    return (
        <>  
            <Header />
            <main id="main" role="main">
                
                <Contact />
            </main>
            <Footer />
        </>
    )
}