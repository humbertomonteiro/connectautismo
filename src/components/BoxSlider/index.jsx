import styles from "./boxSlider.module.css";

export default function BoxSlider({ array }) {
  return (
    <div className={styles.boxSlide}>
      {array.length > 1 ? (
        <div>
          {array.map((item) => (
            <div className={styles.showSlides}>
              {array?.map((e) => (
                <div key={e.name} className={styles.slide}>
                  <img src={e.img} alt={e?.name} />
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <>
          {array?.map((item) => (
            <div className={styles.slideShow}>
              <img key={item.name} src={item.img} alt={item?.name} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
