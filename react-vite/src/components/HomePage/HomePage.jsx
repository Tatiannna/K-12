import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, NavLink } from "react-router-dom";
import NavBar from "../Navigation/";
import "./HomePage.css";

function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [errors, setErrors] = useState({});


    // style attribute
    const rotate = "rotate(180deg)";
    const transition = "0.3s";

    // redirect user back to the / page if not logged in.
    if (!sessionUser) return <Navigate to="/" replace={true} />;

    return (
        <>
            <NavBar />
            <div className="title-container">
                <svg
                    id="wave"
                    style={{ transform: rotate, transition: transition }}
                    viewBox="0 0 1440 240"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(85.653, 83.804, 83.21, 1)" offset="0%" />
                            <stop stopColor="rgba(56.052, 54.961, 52.55, 1)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                        fill="url(#sw-gradient-0)"
                        d="M0,48L80,44C160,40,320,32,480,24C640,16,800,8,960,20C1120,32,1280,64,1440,64C1600,64,1760,32,1920,36C2080,40,2240,80,2400,108C2560,136,2720,152,2880,160C3040,168,3200,168,3360,140C3520,112,3680,56,3840,64C4000,72,4160,144,4320,156C4480,168,4640,120,4800,96C4960,72,5120,72,5280,96C5440,120,5600,168,5760,192C5920,216,6080,216,6240,180C6400,144,6560,72,6720,56C6880,40,7040,80,7200,96C7360,112,7520,104,7680,108C7840,112,8000,128,8160,116C8320,104,8480,64,8640,52C8800,40,8960,56,9120,84C9280,112,9440,152,9600,140C9760,128,9920,64,10080,32C10240,0,10400,0,10560,36C10720,72,10880,144,11040,148C11200,152,11360,88,11440,56L11520,24L11520,240L11440,240C11360,240,11200,240,11040,240C10880,240,10720,240,10560,240C10400,240,10240,240,10080,240C9920,240,9760,240,9600,240C9440,240,9280,240,9120,240C8960,240,8800,240,8640,240C8480,240,8320,240,8160,240C8000,240,7840,240,7680,240C7520,240,7360,240,7200,240C7040,240,6880,240,6720,240C6560,240,6400,240,6240,240C6080,240,5920,240,5760,240C5600,240,5440,240,5280,240C5120,240,4960,240,4800,240C4640,240,4480,240,4320,240C4160,240,4000,240,3840,240C3680,240,3520,240,3360,240C3200,240,3040,240,2880,240C2720,240,2560,240,2400,240C2240,240,2080,240,1920,240C1760,240,1600,240,1440,240C1280,240,1120,240,960,240C800,240,640,240,480,240C320,240,160,240,80,240L0,240Z"
                    />
                </svg>
                <h1 className="title">Please Select A Grade Level</h1>
            </div>
            <div className="grade-level-container">
                <NavLink to="/grade/1" className="grade-level">Grade 1</NavLink>
                <NavLink to="/grade/2" className="grade-level">Grade 2</NavLink>
                <NavLink to="/grade/3" className="grade-level">Grade 3</NavLink>
                <NavLink to="/grade/4" className="grade-level">Grade 4</NavLink>
                <NavLink to="/grade/5" className="grade-level">Grade 5</NavLink>
                <NavLink to="/grade/6" className="grade-level">Grade 6</NavLink>
                <NavLink to="/grade/7" className="grade-level">Grade 7</NavLink>
                <NavLink to="/grade/8" className="grade-level">Grade 8</NavLink>
            </div>
        </>
    );
}

export default HomePage;
