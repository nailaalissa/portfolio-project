import { useEffect } from 'react';
import './App.css';
import Header from './componants/1-header/Header';
import Hero from './componants/2-hero/Hero';
import Main from './componants/3-main/Main';
import Contact from './componants/4-contact/Contact';
import Footer from './componants/5-footer/Footer';
import { useState } from 'react';

function App() {
  const [schowScrollBTN, setschowScrollBTN] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setschowScrollBTN(true);
      } else {
        setschowScrollBTN(false);
      }
    });
  }, []);

  return (
    <div id="up" className="container">
      <Header />
      <div className="divider" />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a style={{ opacity: schowScrollBTN ? 1 : 0, transition: '1s' }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  );
}

export default App;
