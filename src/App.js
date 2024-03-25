import './App.css';
import Nav from "./comp/Nav";
import Main from "./comp/Main";
import {BrowserRouter} from "react-router-dom";
import Rooms from "./comp/Rooms";
import SpecialOffer from "./comp/SpecialOffer";
import Information from "./comp/Information";
import Footer from "./comp/Footer";
import MobNav from "./comp/MobNav";
import {useEffect, useState} from "react";
import debounce from "lodash.debounce";

function App() {

    const handleResize = debounce(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, 1);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    return (
        <div className="App">
            <BrowserRouter>
                {windowSize.width > 768 ? <Nav/> : <MobNav/>}
                <Main/>
                <Rooms/>
                <SpecialOffer/>
                <Information/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
