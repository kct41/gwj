import {Link} from "react-router-dom";
import room1 from "../media/디럭스 더블 3 PC_20171219162518.jpg";
import room2 from "../media/디럭스 누마루 2 PC_20171120185606.jpg";
import room3 from "../media/Deluxeondol_New_1216_608_20211118135049.jpg";
import room4 from "../media/Deluxe_Suite_PC_1216_608_20180911165436.jpg";
import room5 from "../media/로얄스위트_07_1216x608_20170817171221.jpg";


function Rooms(){
    return(
        <section className="container">
            <div className="title_box">
                <h2>Rooms</h2>
                <p>객실 소개</p>
            </div>
            <div className="room_container">
                <Link to="/rooms" className="card">
                    <img src={room1} alt="Deluxe Double Room"/>
                    <h3>Deluxe Double</h3>
                    <p>디럭스 더블</p>
                    <div>
                        <p>그윽한 수묵화 벽지와 따스한 전통 문살을 주조로 한 밝고 깔끔한 느낌의 객실입니다.</p>
                    </div>
                </Link>
                <Link to="/rooms/ds" className="card">
                    <img src={room2} alt="Deluxe Double Room"/>
                    <h3>Deluxe Double & Single</h3>
                    <p>디럭스 더블 & 싱글</p>
                    <div>
                        <p>한옥의 건축 요소와 현대적인 호텔 시설을 적절히 접목시켜 공간이 여유로운 객실입니다.</p>
                    </div>
                </Link>
                <Link to="/rooms/do" className="card">
                    <img src={room3} alt="Deluxe Double Room"/>
                    <h3>Deluxe Ondol</h3>
                    <p>디럭스 온돌</p>
                    <div>
                        <p>한국 고유의 난방법으로 방바닥 전체를 따뜻한 온기로 감싸주는 온돌 객실입니다.</p>
                    </div>
                </Link>
                <Link to="/rooms/dsuite" className="card">
                    <img src={room4} alt="Deluxe Double Room"/>
                    <h3>Deluxe Suite</h3>
                    <p>디럭스 스위트</p>
                    <div>
                        <p>침실, 대청, 대청마루, 욕실로 구성되어 있으며 안마당과 후정이 있는 독채 형태의 객실입니다.</p>
                    </div>
                </Link>
                <Link to="/rooms/rsuite" className="card">
                    <img src={room5} alt="Deluxe Double Room"/>
                    <h3>Royal Suite</h3>
                    <p>로얄 스위트</p>
                    <div>
                        <p>커다란 대문, 넓은 잔디 마당과 툇마루까지 갖춘 별채 형태의 객실입니다.</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Rooms;