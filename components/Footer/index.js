import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <h1 className={styles.title}> BE THE LIGHT </h1>
        <div className={styles.body}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span>ON-SITE MINTING</span>
            </div>
            <div className={styles.feature}>
              <span>COLLABORATIVE LAUNCHES </span>
            </div>
            <div className={styles.feature}>
              <span>NFT MARKETPLACE</span>
            </div>
            <div className={styles.feature}>
              <span>DAO STRUCTURE</span>
            </div>
          </div>

          <img src="/image/footer1.png" className={styles.centerImage} />

          <div className={styles.addressWrapper}>
            <div className={styles.logoWrapper}>
              <img src="/image/logo.png" className={styles.logo} />
            </div>
            <div className={styles.address}>
              393 Broadway
              <br />
              New York NY 10013
              <br />
              Between Walker & White
            </div>
          </div>

          <div className={styles.contactWrapper}>
            <a
              href="https://lumestudios.com/contact"
              target="_blank"
              rel="noreferrer"
            >
              <div className={`${styles.feature} ${styles.contact}`}>
                <span>CONTACT US</span>
              </div>
            </a>
            <div className={styles.links}>
              <a href="" target="_blank" rel="noreferrer">
                <img src="/image/twitter.png" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <img src="/image/instagram.png" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <img src="/image/youtube.png" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <img src="/image/discord.png" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <img src="/image/rectangle.png" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <img src="/image/github.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
