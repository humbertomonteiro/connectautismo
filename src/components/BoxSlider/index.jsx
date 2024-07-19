import styles from "./boxSlider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Autoplay } from "swiper/modules";

export default function BoxSlider({ array }) {
  return (
    <div className={styles.container}>
      {array.length > 1 ? (
        <div className={styles.box}>
          {array.map((item) => (
            <div>
              <h3>{item.date}</h3>
              <h3>{item.hora}</h3>
            </div>
          ))}
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            modules={[EffectFade, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {array?.map((item) => (
              <SwiperSlide key={item.name}>
                <img src={item.img} alt={item?.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <>
          {array?.map((item) => (
            <div className={styles.box}>
              <h3>{item.date}</h3>
              <h3>{item.hora}</h3>
              <img key={item.name} src={item.img} alt={item?.name} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
