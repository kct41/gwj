import {Link} from 'react-router-dom';
function MobNav() {
    return (
        // <div className="mob_nav">
        //     <div className="ham_btn">
        //         <span></span>
        //         <span></span>
        //         <span></span>
        //     </div>
        //     <div className="menu">
        //         <ul>
        //             <a><li>메뉴1</li></a>
        //             <a><li>메뉴2</li></a>
        //             <a><li>메뉴3</li></a>
        //             <a><li>메뉴4</li></a>
        //         </ul>
        //     </div>
        // </div>
        <div className="mob_nav">
            <input className="burger-check" type="checkbox" id="burger-check"></input>
            <label className="burger-icon" htmlFor="burger-check">
                <span className="burger-sticks"></span>
            </label>
            <div className="menu">
                <div  style={{width: '200px'}} className="menu_bg">
                    <ul>
                        <li><Link to="/">객실소개</Link></li>
                        <li><Link to="/">편의시설</Link></li>
                        <li><Link to="/">스페셜 오퍼</Link></li>
                        <li><Link to="/">멤버십</Link></li>
                        <li><Link to="/">예약하기</Link></li>
                    </ul>
                </div>
            </div>
        </div>
)
}

export default MobNav;