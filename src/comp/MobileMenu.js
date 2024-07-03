import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../media/gwj_20170907105728_20180529135813.png";

function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (menuOpen) {
            // 메뉴닫힘
            document.querySelector('.menuwrap').classList.remove('on');
            document.querySelector('.mobile-menu i').classList.remove('fa-times');
            document.querySelector('.mobile-menu i').classList.add('fa-bars');
            document.querySelector('.mobile-menu i').style.color = '#fff';

            // 페이지 스크롤 락 해제
            document.querySelector('#dimmed').remove();
        } else {
            // 메뉴펼침
            document.querySelector('.menuwrap').classList.add('on');
            document.querySelector('.mobile-menu i').classList.remove('fa-bars');
            document.querySelector('.mobile-menu i').classList.add('fa-times');
            document.querySelector('.mobile-menu i').style.color = '#444';

            // 페이지 스크롤 락 레이어 추가
            let div = document.createElement('div');
            div.id = 'dimmed';
            document.body.append(div);

            // 페이지 스크롤 락 모바일 이벤트 차단
            document.querySelector('#dimmed').addEventListener('scroll touchmove touchend mousewheel', function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });

            // 페이지 스크롤 락 레이어 클릭 메뉴 닫기
            document.querySelector('#dimmed').addEventListener('click', function (e) {
                toggleMenu();
            });
        }
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <Link className="mob_logo" to="gwj"><img src={logo} alt=""/></Link>
            <div className="mobile-menu" onClick={toggleMenu}>
                <button type="button" className="mobile-menu"><i className="fas fa-bars"></i></button>

                <div className="menuwrap">
                    <nav id="menu">
                        <Link className="logo" to="/gwj"><img src={logo} alt=""/></Link>
                        <ul className="category_list">
                            <li><Link to="/rooms">객실소개</Link></li>
                            <li><Link to="/gwj">편의시설</Link></li>
                            <li><Link to="/gwj">스페셜 오퍼</Link></li>
                            <li><Link to="/gwj">멤버십</Link></li>
                        </ul>
                    </nav>
                <button className="book_btn">예약하기</button>
                </div>
            </div>
            {/* Other JSX elements */}
        </div>
    );
}

export default MobileMenu;