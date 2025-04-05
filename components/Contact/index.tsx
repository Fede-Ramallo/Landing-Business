"use client";
import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";

export default function Contact() {
  return (
    <motion.section
      id="contacto"
      className={styles.contact}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.contact__content}>
        <h2 className={styles.contact__title}>Contacto</h2>
        <p className={styles.contact__subtitle}>
          Podés encontrarme en las siguientes redes sociales:
        </p>
        <div className={styles.contact__socials}>
          <div className={styles.contact__item}>
            <ReactSVG
              wrapper="span"
              title="Instagram"
              src="/icons/instagram.svg"
            />
            <a
              href="https://www.instagram.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              @tuusuario
            </a>
          </div>
          <div className={styles.contact__item}>
            <ReactSVG
              wrapper="span"
              title="Facebook"
              src="/icons/facebook.svg"
            />
            <a
              href="https://www.facebook.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              /tuusuario
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
