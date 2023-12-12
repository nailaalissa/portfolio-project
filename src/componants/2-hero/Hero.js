import React from 'react';
import './hero.css';
import './../../icon/style.css';
import Lottie from 'lottie-react';
import developerAnimation from '../animation/dev.json';
import { useRef } from 'react';
import img1 from './../../nailaphoto.png';
export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src={img1} className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title"> Eng.Naila Alissa</h1>
        <p className="subtitle">
          I am a Computer engineering graduated from Damascus University. I am communicative
          ,innovative and a team player, but can also work independently and make quick decisions.
          I’m able to improve myself and learn new things as fast as possible, I’m looking forward
          for a chance that give me a way to express my abilities.
        </p>
        <div className="allicons flex">
          <div className=" icon icon-social-twitter"></div>
          <a href="https://www.instagram.com/nailaalissa/">
            <div className="icon icon-instagram"></div>
          </a>
          <a href="https://github.com/nailaalissa">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://www.linkedin.com/in/naila-alissa/">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          className=""
          style={{ width: 350 }}
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
}
