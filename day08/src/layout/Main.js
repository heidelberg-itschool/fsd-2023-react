import { Outlet } from "react-router-dom";
import Header from "./Header";

function Main() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
     );
}

export default Main;