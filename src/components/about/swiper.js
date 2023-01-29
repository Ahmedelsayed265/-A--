import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
const SwiperSlides = () => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 3000
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="client">
          <h4>Aaron Sarginson</h4>
          <h6>
            Client -{" "}
            <a
              href="https://www.upwork.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              upwork.com
            </a>
          </h6>
          <div className="stars">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <p>5.00 Jan 15, 2023 - Jan 20, 2023</p>
          </div>
          <div className="review">
            <p>
              "Ahmed fixed many issues in an existing React-based frontend. I
              can highly recommend him as a frontend dev!"
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlides;
