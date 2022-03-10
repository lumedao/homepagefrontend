import React, { useState } from "react";
import styles from "./styles.module.css";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.wrapper}>
      <img src="/image/logo.png" className={styles.logo} />
      <div className={styles.links}>
        <a href="" className={styles.link} target="_blank" rel="noreferrer">
          Documentation
        </a>
        <a href="" className={styles.link} target="_blank" rel="noreferrer">
          Lume Studios
        </a>
        <a href="" className={styles.link} target="_blank" rel="noreferrer">
          Web3 Creator Residency
        </a>
      </div>
      <button
        type="button"
        onClick={() => setShow(!show)}
        className={styles.mobileBtn}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      {show && (
        <div className={styles.mobileLinks}>
          <a href="" className={styles.link} target="_blank" rel="noreferrer">
            Documentation
          </a>
          <a href="" className={styles.link} target="_blank" rel="noreferrer">
            Lume Studios
          </a>
          <a href="" className={styles.link} target="_blank" rel="noreferrer">
            Web3 Creator Residency
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
