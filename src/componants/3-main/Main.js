import React, { useState } from 'react';
import './main.css';
import { myProjects } from '../Myprojects';
import { AnimatePresence, motion } from 'framer-motion';

export default function Main() {
  const [currentActive, setcurrentActive] = useState('all');
  const [arr, setArr] = useState(myProjects);
  const clickHandel = (buttonCategory) => {
    const newArr = myProjects.filter((item) => {
      return item.category.includes(buttonCategory);
    });

    setArr(newArr);
  };

  return (
    <main className="flex" id="projects">
      <section className="left-section flex">
        <button
          onClick={() => {
            setcurrentActive('all');
            setArr(myProjects);
          }}
          className={currentActive === 'all' ? 'active' : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            clickHandel('css');
          }}
          className={currentActive === 'css' ? 'active' : null}
        >
          Html & Css
        </button>
        <button
          onClick={() => {
            clickHandel('java');
          }}
          className={currentActive === 'java' ? 'active' : null}
        >
          Java Script
        </button>
        <button
          onClick={() => {
            clickHandel('react');
          }}
          className={currentActive === 'react' ? 'active' : null}
        >
          React
        </button>
        <button
          onClick={() => {
            clickHandel('c');
          }}
          className={currentActive === 'c' ? 'active' : null}
        >
          C# Project
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                key={item.imgPath}
                className="card"
                layout
                initial={{ transform: 'scale(0,8)' }}
                animate={{ transform: 'scale(1)' }}
                // exit={{ transform: 'scale(0)' }}
                transition={{ type: 'spring', damping: 8, stiffness: 30 }}
              >
                <img width={250} height={150} src={item.imgPath} alt="" />
                <div style={{ width: '250px', height: '260px' }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="subtitle" style={{ height: '40%' }}>
                    {item.projectText}
                  </p>
                  <div className="flex icons" style={{ height: '10%' }}>
                    <div className="flex" style={{ gap: '11px' }}>
                      <div className="icon-hyperlink"></div>
                      <a href={item.link}>
                        <div className="icon-github"></div>
                      </a>
                    </div>
                    <a className="link flex" href={item.link}>
                      more
                      <span className="icon-go" style={{ alignself: 'end' }}></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
