import { Outlet } from "react-router-dom";
import Header from "./Header";

function Main() {
    return (
        <>
            <Header/>
            <div className="main">
                <Outlet/>
            </div>
        </>
     );
}

export default Main;