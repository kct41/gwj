import vid from '../media/gyeongwonjae_20240227143436.mp4';

function Main() {
    return (
        <section className="main">
            <div className="bg-video">
                <video autoPlay loop muted>
                    <source src={vid} type='video/mp4'/>
                </video>
            </div>
            <div className="booking">
                <a href="#">체크인</a>
                <a href="#">체크아웃</a>
                <span className="options">
                    <select>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </span>
                <span className="options">
                    <select>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </span>
                <button>
                    search
                </button>
            </div>
        </section>
    )
}

export default Main;