"use client";


import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from 'react';
import Modal from './modal';
import Dialog from "./dialog";
import { useRouter } from 'next/navigation';
import Route_1 from "./page_1/page";
import Route_2 from "./page_2/page";


const Home:React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [switchMain, setMain] = useState('main')
  const router = useRouter();
  
  function switchPage() {
    if(switchMain.match('1')){
      return Route_1();
    } else if(switchMain.match('2')){
      return Route_2();
    } else {
      return (<div>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
              
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </div>);
    }
  }

  return (
    <div className={styles.page}>
      <div style={{
        // minHeight:'50px', 
        backgroundColor: 'lightblue', display: 'flex', gap: '30px', marginBottom: '20px'}}>
        <button onClick={() => setIsDialogOpen(true)}>
          <span>버튼1</span>
        </button>        
        <button onClick={() => setIsModalOpen(true)}>
          <span>버튼2</span>
        </button>
      </div>
      <main className={styles.main}>
        {switchPage()}
      </main>
      <div style={{position:'absolute'}}>
        <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} title="다이얼로그 제목">
            <p>여기에 내용을 추가하세요.</p>
        </Dialog>
      </div>
      <div style={{position:'absolute'}}>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
      </div>
      
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
        
      </footer>
      <div style={{
        // minHeight:'50px', 
        backgroundColor: 'red', display: 'flex', gap: '30px'}}>
        <button onClick={() => setMain('1')}>
          <span>1 폐이지</span>
        </button>
        <button onClick={() => setMain('2')}>
          <span>2 페이지</span>
        </button>
        <button onClick={() => setMain('3')}>
          <span>메인</span>
        </button>
      </div>
    </div>
    
  );
};

export default Home;