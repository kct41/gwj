import Kamap from "../comp/Kamap";
import sura from "../media/수라 홀 - 1 PC_20171123181649.jpg";
import meeting from "../media/영빈관_01_1216x608_20170818120442.jpg";
import wedding from "../media/Traditional_Wedding_Full_PC_20190513130327.jpg";

function Information() {
    return (
        <section className="container flex">
            <div>
                <h3 className="bg_title">경원재 이용안내</h3>
                <div className="card_container">
                    <a href="#">
                        <img src={sura} alt="retaurant pic"/>
                        <span className="sm_title">restaurant</span>
                        <h4>한식당 수라</h4>
                        <span className="line"></span>
                        <p>임금님께 수라를 올리듯<br/>정성껏 요리합니다.</p>
                    </a>
                    <a href="#">
                        <img src={meeting} alt="retaurant pic"/>
                        <span className="sm_title">meeting</span>
                        <h4>미팅룸</h4>
                        <span className="line"></span>
                        <p>연회전문팀이 세련되고 기품있는<br/>행사를 만들어드립니다.</p>
                    </a>
                    <a href="#">
                        <img src={wedding} alt="retaurant pic"/>
                        <span className="sm_title">wedding</span>
                        <h4>웨딩</h4>
                        <span className="line"></span>
                        <p>감동의 웨딩스토리를<br/>연출해드립니다.</p>
                    </a>
                </div>
                <h3 className="bg_title">호텔뉴스</h3>
                <ul>
                    <li><a href="#">인천경제자유구역청 경원재 앰배서더 호텔 용역 입찰 공고</a><span>2024.03.22</span></li>
                    <li><a href="#">인천경제자유구역청 경원재 앰배서더 호텔 시설 관리 용역 입찰 공고</a><span>2024.03.22</span></li>
                    <li><a href="#">인천경제자유구역청 경원재 앰배서더 호텔 시설 관리 용역 입찰 공고</a><span>2024.03.22</span></li>
                </ul>
            </div>
            <div>
                <h3 className="bg_title">오시는 길</h3>
                <div id="map" className="map">
                    <Kamap/>
                </div>
                <h3>Adress</h3>
                <p>인천광역시 연수구 테크노파크로 200</p>
            </div>
        </section>
    )
}

export default Information;