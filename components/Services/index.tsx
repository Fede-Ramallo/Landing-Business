"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // ✅ usamos Image de Next.js
import styles from "./Services.module.css";

const logos = [
  {
    src: "/images/electricidad.png",
    alt: "Logo para empresa A",
    href: "https://gr-soluciones-electricas.netlify.app/",
  },
  {
    src: "/images/verduleria.png",
    alt: "Logo para empresa B",
    href: "/empresas/verduleria",
  },
  {
    src: "/images/it.png",
    alt: "Logo para empresa C",
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
          Brindo <strong>soluciones visuales profesionales</strong> para{" "}
          <strong>emprendedores</strong>, <strong>marcas</strong> y{" "}
          <strong>negocios</strong>.
        </p>

        <ul className={styles.services__list}>
          <li>
            <span className={styles.services__badge}>1</span>
            <strong>Diseño express:</strong> logos, flyers, banners generados
            por IA y adaptados a tus necesidades.
          </li>
          <li>
            <span className={styles.services__badge}>2</span>
            <strong>Landing económica + diseño:</strong> sitio de una sola
            página con diseño incluido, ideal para emprendedores.
          </li>
          <li>
            <span className={styles.services__badge}>3</span>
            <strong>Pack completo:</strong> incluye branding, sitio web
            multi-página, soporte técnico y optimización SEO inicial.
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
