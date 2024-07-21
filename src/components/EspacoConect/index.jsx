import styles from "./espacoConect.module.css";

import Title from "../Title";
import BoxSlider from "../BoxSlider";

import { arrayEspacoConnect } from "../../data/espacoConnect";

export default function EspacoConect() {
  return (
    <div className={styles.container}>
      <Title text={"ESPAÇO CONECT"} />
      <div className={styles.boxes} data-aos="zoom-in">
        {arrayEspacoConnect.map((item, index) => (
          <div key={index} className={styles.box}>
            {item.map((e) => (
              <div>
                <h3>{e.date}</h3>
                <h3>{e.hora}</h3>
              </div>
            ))}
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
