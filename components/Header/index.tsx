"use client";

import { ReactSVG } from "react-svg";
import React from "react";
import styles from "./Header.module.css";

const smoothScrollTo = (targetId: string, duration = 600) => {
  const target = document.getElementById(targetId);
  if (!target) return;

  const startY = window.scrollY;
  const endY = target.getBoundingClientRect().top + startY;
  const distance = endY - startY;
  const startTime = performance.now();

  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const step = (currentTime: number) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const Header: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    smoothScrollTo(target);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <a href="#inicio" onClick={(e) => handleScroll(e, "inicio")}>
          <ReactSVG wrapper="span" title="logo" src="/icons/logo.svg" />
        </a>
      </div>
      <nav className={styles.header__nav}>
        <a href="#inicio" className={styles.header__link} onClick={(e) => handleScroll(e, "inicio")}>
          Inicio
        </a>
        <a href="#servicios" className={styles.header__link} onClick={(e) => handleScroll(e, "servicios")}>
          Servicios
        </a>
        <a href="#contacto" className={styles.header__link} onClick={(e) => handleScroll(e, "contacto")}>
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;