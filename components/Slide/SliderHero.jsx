import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper";
import Image from "next/image";

function SliderHero() {
  return (
    <>
      <Swiper
        className=""
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="/1280x400_1.webp"
            className="object-cover w-full h-auto"
            alt=""
            layout="responsive"
            width={1280}
            height={720}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/1280x400_2.webp"
            className="object-cover w-full h-auto"
            alt=""
            layout="responsive"
            width={1280}
            height={720}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/1280x400_3.webp"
            className="object-cover w-full h-auto"
            alt=""
            layout="responsive"
            width={1280}
            height={720}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/1280x400_4.webp"
            className="object-cover w-full h-auto"
            alt=""
            layout="responsive"
            width={1280}
            height={720}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SliderHero;
