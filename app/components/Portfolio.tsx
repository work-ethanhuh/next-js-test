// import React, { useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";

import port01 from "../assets/img/port01.jpg";

// import { portfolioText } from "../constants/constVariable";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Portfolio = () => {
    // const horizontalRef = useRef(null);
    // const sectionRef = useRef([]);

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     const horizontal = horizontalRef.current;
    //     const sections = sectionRef.current;

    //     let scrollTween = gsap.to(sections, {
    //         xPercent: -120 * (sections.length - 1),
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: horizontal,
    //             start: "top 56px",
    //             end: () => "+=" + horizontal.offsetWidth,
    //             pin: true,
    //             scrub: 1,
    //             invalidateOnRefresh: true,
    //             anticipatePin: 1,
    //         }
    //     });

    //     return () => {
    //         scrollTween.kill();
    //     };
    // }, []);

    return (
        <section id="port"
        //  ref={horizontalRef}
         >
            <div className="port__inner">
                <h2 className="port__title">
                    Portfolio <em>포트폴리오</em>
                </h2>
                <div className="port__wrap">
                    {
                        <article 
                            className={`port__item p${0}`} 
                            key={0}
                            // ref={(el) => (sectionRef.current[key]=el)}
                        >
                            <span className="num">작업중</span>
                            <a href="" target="_blank" className="img" onClick={(e) => e.preventDefault()}>
                                <Image src={port01} alt="작업중" width={420} height={262} />
                            </a>
                            <h3 className="title">아래 연락처로 연락 주시면 됩니다.</h3>
                            <p className="desc">명함 or 성함/이름/회사 남겨주시면,</p>
                            <p className="desc">확인 후에 연락 드리겠습니다.</p>
                            <p className="desc">사람인 / 잡코리아 에서도 다운로드 가능합니다.</p>
                            {/* <a href={port.view} target="_blank" className="site">사이트 보기</a> */}
                        </article>
                    // portText.map((port, key) => (
                    //     <article 
                    //         className={`port__item p${key+1}`} 
                    //         key={key}
                    //         ref={(el) => (sectionRef.current[key]=el)}
                    //     >
                    //         <span className="num">{port.num}.</span>
                    //         <a href={port.code} target="_blank" className="img">
                    //             <Image src={port.img} alt={port.name} width={420} height={262} />
                    //         </a>
                    //         <h3 className="title">{port.title}</h3>
                    //         <p className="desc">{port.desc}</p>
                    //         <a href={port.view} target="_blank" className="site">사이트 보기</a>
                    //     </article>
                    // ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio;