import React, { FC, useState } from "react";

import { headerNavigation } from "../constants/constVariable";

interface Props {
    onPathData: (path: string) => void;
}

const Header: FC<Props> = ({ onPathData }) => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    }

    const pathData = (url : string) => {
        onPathData(url);
        handleScrollToTop();        
    }

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <h1>
                        <span onClick={() => pathData('/')} style={{ cursor: 'pointer'}}>resume<em>powered by next.js</em></span>
                    </h1>
                </div>
                <nav 
                    className={`header__nav ${show ? "show" : ""}`} 
                    role="navigation" 
                    aria-label="메인 메뉴"
                >
                    <ul>
                        {headerNavigation.map((nav, key) => (
                            <li key={key} style={{ marginRight: '20px' }}>
                                <span onClick={() => {
                                    pathData(nav.url);
                                    toggleMenu();
                                }} style={{ cursor: 'pointer'}}>{nav.title}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div 
                    className="header__nav__mobile" 
                    id="headerToggle" 
                    aria-controls="primary-menu" 
                    aria-expanded={show ? "true" : "false"} 
                    role="button"
                    tabIndex={0}
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
            
        </header>
    )
}

export default Header