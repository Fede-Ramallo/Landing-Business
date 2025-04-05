"use client";

import { ReactSVG } from "react-svg";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <a href="#inicio">
          <ReactSVG wrapper="span" title="logo" src="/icons/logo.svg" />
        </a>
      </div>
      <nav className={styles.header__nav}>
        <a href="#inicio" className={styles.header__link}>
          Inicio
        </a>
        <a href="#servicios" className={styles.header__link}>
          Servicios
        </a>
        <a href="#contacto" className={styles.header__link}>
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;
