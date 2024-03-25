import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import spring from "../media/spring_384256_20240226183019.jpg";
import romantic from "../media/RB_384256_20240305175614.jpg";
import stay from "../media/pc384256_20240126133128.jpg";
import upgrade from "../media/upgrade_384256_20240117184430.jpg";
import chicken from "../media/pc384256_20240108172202.jpg";
//import lazy from "../media/lazymorning_384256_20230530120949.jpg";
//import yummy from "../media/yummy_384256_20231227164204.jpg";

function SpecialOffer() {
    return (
        <div className="bg">
            <section className="container">
                <div className="title_box">
                    <h2>Special Offer</h2>
                    <p>스페셜 오퍼</p>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{clickable: true}}
                >
                    <SwiperSlide>
                        <a className="offer" href="javascript:void(0);">
                            <div className="pic">
                                <img src={spring} alt="spring_img"/>
                            </div>
                            <h3>SPRING SPECIAL PROMOTION</h3>
                            <p>2024.03.03 - 2024.04.30</p>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a className="offer" href="javascript:void(0);">
                            <div className="pic">
                                <img src={romantic} alt="romantic_img"/>
                            </div>
                            <h3>Romantic Breeze</h3>
                            <p>	2024.03.06 - 2024.04.30</p>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a className="offer" href="#">
                            <div className="pic">
                                <img src={stay} alt="stay_img"/>
                            </div>
                            <h3>Stay & Relax</h3>
                            <p>2024.01.26 - 2024.03.31</p>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a className="offer" href="javascript:void(0);">
                            <div className="pic">
                                <img src={upgrade} alt="upgrade_img"/>
                            </div>
                            <h3>Upgrade Your Day</h3>
                            <p>2024.01.17 - 2024.03.31</p>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a className="offer" href="javascript:void(0);">
                            <div className="pic">
                                <img src={chicken} alt="chicken_img"/>
                            </div>
                            <h3>치맥 앳 나이트</h3>
                            <p>	2024.01.09 - 2024.04.30</p>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    )
}

export default SpecialOffer;