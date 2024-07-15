import styles from "./patrocinador.module.css";

export default function Patrocinador({ title, array }) {
  return (
    <div className={styles.container}>
      <div className={styles.title} data-aos="zoom-in">
        <h2>{title}</h2>
      </div>
      <div className={styles.boxesImg} data-aos="zoom-in">
        {array.map((item) => (
          <div className={styles.box}>
            <img src={item?.img} alt={item?.name} />
          </div>
        ))}
        {/* <div className={styles.box}>
          <img src={logo} alt="social" />
        </div>
        <div className={styles.box}>
          <img src={logo} alt="social" />
        </div>
        <div className={styles.box}>
          <img src={logo} alt="social" />
        </div>
        <div className={styles.box}>
          <img src={logo} alt="social" />
        </div> */}
      </div>
    </div>
  );
}
