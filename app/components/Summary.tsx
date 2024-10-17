import React from "react";

import { summaryText } from "../constants/constVariable";

const Summary = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                    summary <em>요약</em>
                </h2>
                <div className="skill__desc">
                    {summaryText.map((summary, key) => (
                        <div key={key}>
                            <span>{summary.yearmonth}.</span>
                            <h3>{summary.title}</h3>
                            <p>{summary.desc}</p>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    )
}

export default Summary;