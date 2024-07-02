import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from "react-router-dom";
import dd1 from "../media/d_suite/Deluxe_Suite_PC_1216_608_20180911165436 (1).jpg";
import dd2 from "../media/d_suite/디럭스 스위트 추가 2 PC_20171219175616.jpg";
import dd3 from "../media/d_suite/디럭스 스위트 추가 3 PC_20171219175620.jpg";
import dd5 from "../media/d_suite/디럭스스위트_02_1216x608_20170817170948.jpg";
import dd6 from "../media/d_suite/디럭스스위트_01_1216x608_20170817170945.jpg";
import dd7 from "../media/d_double/dd7.jpg";
import dd8 from "../media/d_double/dd8.jpg";
import dd9 from "../media/d_double/dd9.jpg";
import SpecialOffer from "./SpecialOffer";

function FourthRoom() {
    return (
        <div>
            <div className="room_main">
                <p>Deluxe Suite</p>
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
                <p>객실 내부에 한옥의 외부 공간인 안마당과 뒷마당을 두어 각 실에서 마당으로 조망 할 수 있도록 하여 한옥 특유의 개방감을 선사합니다. 또한 대청마루에는 전통 보료 등으로 장식된 다도 공간이 마련되어 있어 한옥의 운치를 더하여 특별히 모셔야 할 분이나 가족단위 고객에게 적합합니다.</p>
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
                        <li>기준인원: 1~4명</li>
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
                                <li>55인치 & 42인치 LCD TV</li>
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
                        <li>최대 4인까지 투숙 가능합니다.</li>
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

export default FourthRoom;