import styles from "./cronograma.module.css";

import cronograma1 from "../../assets/imgs/cronograma/24agosto.jpg";
import cronograma2 from "../../assets/imgs/cronograma/24agosto2.jpg";
import cronograma3 from "../../assets/imgs/cronograma/25agosto.jpg";
import cronograma4 from "../../assets/imgs/cronograma/25agosto2.jpg";
import Title from "../Title";

export default function Cronograma() {
  return (
    <div className={styles.container}>
      <Title text={"CRONOGRAMA PALESTRANTES"} />
      <div className={styles.boxesImg} data-aos="zoom-in">
        <div className={styles.box}>
          <img src={cronograma1} alt="social" />
        </div>
        <div className={styles.box}>
          <img src={cronograma2} alt="social" />
        </div>
        <div className={styles.box}>
          <img src={cronograma3} alt="social" />
        </div>
        <div className={styles.box}>
          <img src={cronograma4} alt="social" />
        </div>
      </div>
    </div>
  );
}
