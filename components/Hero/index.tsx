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
          En <strong>Landings Córdoba</strong> nos especializamos en el
          desarrollo de landing pages de alto rendimiento, diseñadas para{" "}
          <strong>maximizar conversiones</strong> y captar leads calificados.
          <br />
          <br />
          Utilizamos <strong>inteligencia artificial</strong> para crear
          banners, logotipos y branding alineado con tu marca.
          <br />
          <br />
          Ofrecemos gestión de redes sociales con estrategias semanales
          enfocadas en
          <strong> crecimiento orgánico</strong> y aumento de ventas reales.
        </p>

        <a href="#contacto" className={styles.hero__cta}>
          Quiero mejorar mi marca
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
