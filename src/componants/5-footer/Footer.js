import React from 'react';
import './footer.css';
export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="https://nailaalissa.github.io/Naila-AlissaCV/">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#up">Uses</a>
        </li>
      </ul>
      <p> 2023 Spencer Sharp, All rights</p>
    </footer>
  );
}
