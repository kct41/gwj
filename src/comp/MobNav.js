import {Link} from 'react-router-dom';
import logo from '../media/gwj_20170907105728_20180529135813.png';

function MobNav() {
    return (
        <div className="mob_nav">
            <h1>
                <Link to="/gwj"><img src={logo} alt="경원재 로고"/></Link>
            </h1>
            <input className="burger-check" type="checkbox" id="burger-check"></input>
            <label className="burger-icon" htmlFor="burger-check">
                <span className="burger-sticks"></span>
            </label>
            <div className="menu">
                <div className="menu_bg">
                    <img src={logo} alt="경원재 로고"/>
                    <div className="sm_menu">
                        <p>회원가입</p>
                        <p>로그인</p>
                        <p>마이페이지</p>
                    </div>
                    <ul>
                        <li><Link to="/rooms">객실소개</Link></li>
                        <li><Link to="/gwj">편의시설</Link></li>
                        <li><Link to="/gwj">스페셜 오퍼</Link></li>
                        <li><Link to="/gwj">멤버십</Link></li>
                    </ul>
                    <div className="book_btn">예약하기</div>
                </div>
            </div>
        </div>
    )
}

export default MobNav;