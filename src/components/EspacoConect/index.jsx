import styles from "./espacoConect.module.css";

import logo from "../../assets/imgs/logo/logo.jpg";

export default function EspacoConect() {
  return (
    <div className={styles.container}>
      <div className={styles.title} data-aos="zoom-in">
        <h2>ESPAÇO CONECT</h2>
      </div>
      <div className={styles.boxesImg} data-aos="zoom-in">
        <div className={styles.box}>
          <h3>24/08</h3>
          <h3>09:00 ás 10:30</h3>
          <img src={logo} alt="social" />
        </div>
        <div className={styles.box}>
          <h3>24/08</h3>
          <h3>14:00 ás 15:30</h3>
          <img src={logo} alt="social" />
        </div>
        <div className={styles.box}>
          <h3>25/08</h3>
          <h3>09:00 ás 10:30</h3>
          <img src={logo} alt="social" />
        </div>
        <div className={styles.box}>
          <h3>25/08</h3>
          <h3>14:00 ás 15:30</h3>
          <img src={logo} alt="social" />
        </div>
      </div>
    </div>
  );
}
