import React from "react";
import Image from "next/image";
import { kakaoQr } from "../constants/constVariable";

const Footer = () => {
    const kakaoLink = 'http://qr.kakao.com/talk/PfNAhJQuVGLdmRlb96tN7MvKodg-';

    // 클립보드에 링크 복사 함수
    const copyToClipboard = () => {
        navigator.clipboard.writeText(kakaoLink).then(() => {
        alert('복사되었습니다.\n 핸드폰에서 링크를 열어주세요.');
        }).catch(err => {
        console.error('복사 실패:', err);
        });
    };

    // 클릭 핸들러
    const handleClick = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // 기기가 모바일인지 여부 확인
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        if (!isMobile) {
        // PC에서는 링크 복사 기능 실행
        e.preventDefault(); // 링크 기본 동작 막기
        copyToClipboard();
        }
        // 모바일에서는 기본적으로 링크가 열리도록 함
    };

    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div>By EthanHuh</div>
                </h2>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href={kakaoLink} target="_blank" rel="noopener noreferrer" onClick={handleClick}>Contact</a>
                        </div>
                    </div>
                    <div className="right">
                    <a href={kakaoLink} target="_blank" rel="noopener noreferrer" className="img" onClick={handleClick}>
                      <Image src={kakaoQr} alt="카카오 QR" layout="intrinsic" quality={100} />
                    </a>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; 2024 EthanHuh
                </div>
            </div>
        </footer>
    )
}

export default Footer;