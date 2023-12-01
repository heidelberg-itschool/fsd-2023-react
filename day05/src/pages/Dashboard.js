import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const goToAbout = () => {
        alert('Thank you for joining');
        navigate("/about", {state: {user: 'Jon'}});
    }

    return ( <>
        <h1>Dashboard page</h1>
        <button onClick={goToAbout}>About</button>
    </> );
}

export default Dashboard;