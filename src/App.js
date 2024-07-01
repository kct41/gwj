import './App.css';
import Nav from "./comp/Nav";
import Main from "./comp/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Rooms from "./comp/Rooms";
import SpecialOffer from "./comp/SpecialOffer";
import Information from "./comp/Information";
import Footer from "./comp/Footer";
import MobNav from "./comp/MobNav";
import {useEffect, useState} from "react";
import debounce from "lodash.debounce";
import FirstRoom from "./comp/FirstRoom";
import Home from "./comp/Home";
import SecondRoom from "./comp/SecondRoom";
import ThirdRoom from "./comp/ThirdRoom";
import FourthRoom from "./comp/FourthRoom";
import FifthRoom from "./comp/FifthRoom";

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
                {/*<FirstRoom/>*/}
                <Routes>
                    <Route path="/rooms" element={<FirstRoom/>}></Route>
                    <Route path="/rooms/ds" element={<SecondRoom/>}></Route>
                    <Route path="/rooms/do" element={<ThirdRoom/>}></Route>
                    <Route path="/rooms/dsuite" element={<FourthRoom/>}></Route>
                    <Route path="/rooms/rsuite" element={<FifthRoom/>}></Route>
                    <Route path="/" element={<Home/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
