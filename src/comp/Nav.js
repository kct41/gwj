import {Link} from "react-router-dom";
import logo from "../media/gwj_20170907105728_20180529135813.png";

function Nav(){
    return(
        <nav>
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
            <ul>
                <li><Link to="/rooms">객실소개</Link></li>
                <li><Link to="/">편의시설</Link></li>
                <li><Link to="/">스페셜 오퍼</Link></li>
                <li><Link to="/">멤버십</Link></li>
                <li><Link to="/">예약하기</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;