'use client';

import { ReactSVG } from 'react-svg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <span className={styles.hero__logo}>
          <ReactSVG wrapper="span" title="logo" src="/icons/logo.svg" />
        </span>
        <h1 className={styles.hero__title}>Transformá tu presencia digital</h1>
        <p className={styles.hero__slogan}>
          Programador especializado en landing pages para empresas. <br />
          Creación de logos y banners con inteligencia artificial. <br />
          Gestión de redes sociales con posts semanales.
        </p>
        <a href="#contacto" className={styles.hero__cta}>Contactame</a>
      </div>
    </section>
  );
};

export default Hero;
