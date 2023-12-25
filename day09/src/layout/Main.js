import { Outlet } from "react-router-dom";
import Header from "./Header/Header.js";

function Main() {
    return ( 
        <>
            <Header/>
            <Outlet/>
        </>);
}

export default Main;