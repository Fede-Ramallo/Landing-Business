import React from "react";
import styles from "./Divider.module.css";

const Divider = () => {
  return (
    <div className={styles.divider}>
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className={styles.svg}
      >
        <path
          d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
          className={styles.path}
        ></path>
      </svg>
    </div>
  );
};

export default Divider;
