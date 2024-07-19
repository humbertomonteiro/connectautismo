import styles from "./espacoConect.module.css";

import Title from "../Title";
import BoxSlider from "../BoxSlider";

import { arrayEspacoConnect } from "../../data/espacoConnect";

export default function EspacoConect() {
  return (
    <div className={styles.container}>
      <Title text={"ESPAÇO CONECT"} />
      <div className={styles.boxes}>
        {arrayEspacoConnect.map((item, index) => (
          <div key={index} className={styles.box}>
            <BoxSlider array={item} />
          </div>
        ))}
      </div>
      {/* // <div className={styles.boxesImg} data-aos="zoom-in">
      //   <div className={styles.box}>
      //     <h3>24/08</h3>
      //     <h3>09:00 ás 10:30</h3>
      //     <img src={logo} alt="social" />
      //   </div>
      //   <div className={styles.box}>
      //     <h3>24/08</h3>
      //     <h3>14:00 ás 15:30</h3>
      //     <img src={logo} alt="social" />
      //   </div>
      //   <div className={styles.box}>
      //     <h3>25/08</h3>
      //     <h3>09:00 ás 10:30</h3>
      //     <img src={logo} alt="social" />
      //   </div>
      //   <div className={styles.box}>
      //     <h3>25/08</h3>
      //     <h3>14:00 ás 15:30</h3>
      //     <img src={logo} alt="social" />
      //   </div>
      // </div> */}
    </div>
  );
}
