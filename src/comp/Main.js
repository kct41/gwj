import vid from '../media/gyeongwonjae_20240227143436.mp4';

function Main() {
    return (
        <section className="main">
            <div className="bg-video">
                <video autoPlay loop muted playsInline={true}>
                    <source src={vid} type='video/mp4'/>
                </video>
            </div>
            <div className="booking">
                <div className="cal_box">
                    <label>Check-in</label>
                    <input type="date" name="startday"/>
                </div>
                <div className="cal_box">
                    <label>Check-out</label>
                    <input type="date" name="startday"/>
                </div>
                <span className="options">
                    <p>인원수</p>
                    <select>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </span>
                <span className="options">
                    <p>객실수</p>
                    <select>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </span>
                <button>
                    SEARCH
                </button>
            </div>
        </section>
    )
}

export default Main;