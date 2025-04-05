"use client";

import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <motion.section
      id="inicio"
      className={styles.hero}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.hero__content}>
        <span className={styles.hero__logo}>
          <ReactSVG wrapper="span" title="logo" src="/icons/logo.svg" />
        </span>
        <h1 className={styles.hero__title}>
          Impulsá tu <strong>presencia digital</strong> al siguiente nivel
        </h1>
        <p className={styles.hero__slogan}>
          <strong>Desarrollador especializado</strong> en páginas de aterrizaje
          <strong> efectivas</strong> para empresas. <br />
          <strong>Diseños modernos</strong> y únicos con ayuda de la
          <strong> inteligencia artificial</strong> para logos, banners y branding. <br />
          <strong>Estrategias personalizadas</strong> de contenido para redes sociales que generan <strong>resultados reales</strong> semana a semana.
        </p>
        <a href="#contacto" className={styles.hero__cta}>
          Quiero mejorar mi marca
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
