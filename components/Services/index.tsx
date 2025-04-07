"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Services.module.css";

const logos = [
  {
    src: "/images/electricidad.png",
    alt: "GR Soluciones Electricas",
    href: "https://gr-soluciones-electricas.netlify.app/",
  },
  {
    src: "/images/verduleria.png",
    alt: "Verduleria pelado",
    href: "/empresas/verduleria",
  },
  {
    src: "/images/it.png",
    alt: "Fergal Studio IT",
    href: "/empresas/it",
  },
];

const Services = () => {
  return (
    <motion.section
      id="servicios"
      className={styles.services}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.services__content}>
        <h2 className={styles.services__title}>Servicios</h2>
        <p className={styles.services__description}>
          Ofrezco soluciones digitales enfocadas en el{" "}
          <strong>diseño visual</strong>, <strong>desarrollo web</strong> y{" "}
          <strong>presencia online</strong>, pensadas para{" "}
          <strong>emprendedores, marcas y negocios</strong> que buscan destacar
          y vender más.
        </p>

        <p className={styles.services__description}>
          Ofrezco <strong>soluciones digitales</strong> enfocadas en el diseño
          visual, desarrollo web y presencia online, pensadas para{" "}
          <strong>emprendedores y negocios</strong> que buscan destacar y vender
          más.
        </p>

        <ul className={styles.services__list}>
          <span className={styles.services__tag}>Rápido y personalizable</span>
          <li>
            <span className={styles.services__badge}>1</span>
            <strong>Diseño visual con IA:</strong> generación y personalización
            de logotipos, banners y piezas gráficas mediante inteligencia
            artificial, adaptadas para redes sociales, campañas y branding
            profesional.
          </li>

          <span className={styles.services__tag}>Ideal para lanzamientos</span>
          <li>
            <span className={styles.services__badge}>2</span>
            <strong>Landing Page optimizada:</strong> desarrollo de una landing
            page económica con diseño incluido, pensada para captar leads o
            lanzar productos y servicios.
          </li>

          <span className={styles.services__tag}>Recomendado</span>
          <li>
            <span className={styles.services__badge}>3</span>
            <strong>Pack digital completo:</strong> incluye branding, sitio web
            multi-página, optimización SEO y soporte técnico básico. Ideal para
            marcas que buscan una <strong>presencia sólida</strong>.
          </li>
        </ul>
      </div>

      <div className={styles.examples}>
        <h3 className={styles.examples__title}>Ejemplos de logos creados</h3>
        <div className={styles.examples__grid}>
          {logos.map((logo, index) => (
            <Link
              href={logo.href}
              key={index}
              className={styles.examples__item}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={150}
                className={styles.examples__img}
              />
              <p>{logo.alt}</p>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
