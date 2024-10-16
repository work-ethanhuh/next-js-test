import React from "react";

import { historyText } from "../constants/constVariable";

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">
                    History <em>이력 - 학력제외 약 10년</em>
                </h2>
                <div className="site__wrap">
                    {historyText.map((history, key) => (
                        <article className={`site__item s${key+1}`} key={key}>
                            <span className="num">{history.yearmonth}</span>
                            <div className="text">
                                <div>{history.text[0]}</div>
                                <div><h4>{history.text[1]} / {history.text[2]}</h4></div>
                            </div>
                            {history.title.map((title, idx) => (
                                <div className="title" key={idx} >{title}</div>
                            ))}
                            <div className="btn">
                                {/* <a href={history.code}>code</a> */}
                                <span>{history.view}</span>
                            </div>
                            <div className="info">
                                <span>Tech Stack : </span>
                                {
                                    history.info.map((info, idx) => (
                                        <span key={idx}>{info}</span>
                                    ))
                                }
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Site;