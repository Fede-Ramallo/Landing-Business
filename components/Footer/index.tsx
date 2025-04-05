"use client";
import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__text}>© 2025</span>
      <span className={styles.footer__credits}>
        Creado por{" "}
        <a href="https://github.com/Fede-Ramallo" target="_blank" rel="noopener noreferrer">
          Federico Ramallo
        </a>
      </span>
    </footer>
  );
};

export default Footer;
