import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Inicio</Link>
        <Link href="/servicios" className={styles.link}>Servicios</Link>
        <Link href="/contacto" className={styles.link}>Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
