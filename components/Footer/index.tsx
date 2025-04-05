import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>© 2025</span>
      <span className={styles.right}>Creado por Federico Ramallo</span>
    </footer>
  );
};

export default Footer;
