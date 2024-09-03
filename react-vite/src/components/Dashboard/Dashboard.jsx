import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './Dashboard.css'



const Dashboard = () => {

    const dispatch = useDispatch();
    
    return(
        <>
            <h1>Dashboard!</h1>
        </>
    );
}

export default Dashboard;