import React, { useEffect } from 'react';
import { useState } from 'react';
import './header.css';

export default function Header() {
  const [showModel, setshowModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('currentMode') ?? 'dark');
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModel(true);
        }}
        className="menu icon-menu flex"
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="https://nailaalissa.github.io/Naila-AlissaCV/">About Me</a>
          </li>

          <li>
            <a href="#projects"> Projects </a>
          </li>
          <li>
            <a href="#projects"> Skills</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          //sent value to local storage
          localStorage.setItem('currentMode', theme === 'dark' ? 'light' : 'dark');
          //get value from local Storage
          setTheme(localStorage.getItem('currentMode'));
        }}
        className="mode flex"
      >
        {theme === 'dark' ? (
          <span className="icon-moon-stroke"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-clear"
                onClick={() => {
                  setshowModel(false);
                }}
              />
            </li>
            <li>
              <a href="https://nailaalissa.github.io/Naila-AlissaCV/">About Me</a>
            </li>
            <li>
              <a href="#projects"> Projects </a>
            </li>
            <li>
              <a href="#projects"> Skills</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
