import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {useLocation} from "react-router-dom";
import './index.css';
import App from './App';

// export default function ScrollTop() {
//     const {pathname} = useLocation();
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [pathname]);
//     return null;
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<ScrollTop/>*/}
        <App/>
    </React.StrictMode>
);