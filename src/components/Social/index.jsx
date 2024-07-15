import styles from "./social.module.css";

import social from "../../assets/imgs/social/social.png";

export default function Social() {
  return (
    <div className={styles.container}>
      <div className={styles.title} data-aos="zoom-in">
        <h2>SOCIAL</h2>
      </div>
      <div className={styles.boxImg} data-aos="zoom-in">
        <img src={social} alt="social" />
      </div>
    </div>
  );
}
