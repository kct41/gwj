
import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from "react-router-dom";
import dd1 from "../media/d_ondol/Deluxeondol_New_1216_608_20211118135049 (1).jpg";
import dd2 from "../media/d_ondol/ondol_2_20211118135058.jpg";
import dd3 from "../media/d_ondol/ondol_3_20211118135105.jpg";
import dd5 from "../media/d_double/dd5.jpg";
import dd6 from "../media/d_double/dd6.jpg";
import dd7 from "../media/d_double/dd7.jpg";
import dd8 from "../media/d_double/dd8.jpg";
import dd9 from "../media/d_double/dd9.jpg";
import SpecialOffer from "./SpecialOffer";

function ThirdRoom() {
    return (
        <div>
            <div className="room_main">
                <p>Deluxe Ondol</p>
            </div>
            <div className="room_select">
                <ul>
                    <Link to="/rooms">
                        <li>더블</li>
                    </Link>
                    <Link to="/rooms/ds">
                        <li>더블 & 싱글</li>
                    </Link>
                    <Link to="/rooms/do">
                        <li>온돌</li>
                    </Link>
                    <Link to="/rooms/dsuite">
                        <li>스위트</li>
                    </Link>
                    <Link to="/rooms/rsuite">
                        <li>로얄 스위트</li>
                    </Link>
                </ul>
            </div>
            <div className="container rooms">
                <h2>Introduction</h2>
                <p>한국 고유의 난방법으로 방바닥 전체를 따뜻한 온기로 감싸주는 온돌룸입니다. 고급스러운 수묵화 벽지와 전통침구 그리고 보료 세트가 어우러져 우리나라 전통 느낌을 더욱 더 느낄 수 있는 객실입니다.</p>
                <Swiper className="room_swiper"
                        modules={[Navigation]}
                        slidesPerView={1}
                        navigation
                        pagination={{clickable: true}}
                >
                    <SwiperSlide>
                        <img src={dd1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={dd2} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={dd3} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={dd5} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={dd6} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={dd7} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={dd8} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={dd9} alt=""/>
                    </SwiperSlide>
                </Swiper>
                <div className="room_detail">
                    <h2>Details</h2>
                    <ul className="first">
                        <li>기준인원: 1~3명</li>
                        <li>객실구성: 침실 1, 욕실 1</li>
                    </ul>
                    <h2>Amenities</h2>
                    <ul>
                        <li>
                            <p>Bedroom</p>
                            <ul>
                                <li>슬리퍼</li>
                                <li>와인잔,커피잔</li>
                                <li>네스프레소 커피캡슐</li>
                                <li>생수 2병</li>
                                <li>얼음정수기</li>
                            </ul>
                        </li>
                        <li>
                            <p>Bathroom</p>
                            <ul>
                                <li>목욕가운</li>
                                <li>샴푸, 컨디셔너</li>
                                <li>바디워시, 바디로션</li>
                                <li>칫솔</li>
                                <li>면도기</li>
                                <li>비데</li>
                            </ul>
                        </li>
                    </ul>
                    <h2>Facilities & Services</h2>
                    <ul>
                        <li>
                            <p>Facility</p>
                            <ul>
                                <li>65인치 LCD TV</li>
                                <li>커피 포트</li>
                                <li>개인 금고</li>
                                <li>다리미, 다리미 판</li>
                                <li>110V, 220V</li>
                                <li>무료 WIFI</li>
                            </ul>
                        </li>
                        <li>
                            <p>Service</p>
                            <ul>
                                <li>호핑볼 및 보드게임 대여</li>
                                <li>아기침대와 젖병소독기 대여</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="hotel_info">
                    <h3>Hotel Info</h3>
                    <ul>
                        <li>객실 요금은 10% 부가가치세가 별도로 부과됩니다.</li>
                        <li>최대 3인까지 투숙 가능합니다.</li>
                        <li>객실 이용에 대한 보다 자세한 사항은 FAQ를 참고 하시기 바랍니다.</li>
                        <li>확정되지 않은 예약에 대한 모든 요금은 별도 통보 없이 변경 될 수 있습니다.</li>
                        <li>객실 요금은 예약 상황에 따라 변동될 수 있음을 알려드립니다.</li>
                        <li>단체 요금은 별도로 정해집니다.</li>
                        <li>객실 이용 시 서비스 개선을 위한 참신한 제안 등을 고객의 소리로 보내주세요. 고객님의 말씀에 항상 귀를 기울여 보다 나은 서비스로 보답하겠습니다.</li>
                    </ul>
                </div>
            </div>
            <SpecialOffer/>
        </div>
    )
}

export default ThirdRoom;