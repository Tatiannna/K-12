
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, NavLink, useParams } from "react-router-dom";
import NavBar from "../Navigation/";
import "./AssessmentPage.css";
import AssessmentImage from "../../Images/k12AssessmentImage.png";

function AssessmentPage() {
    const { gradeLevel, subject } = useParams();
    const sessionUser = useSelector((state) => state.session.user);

    // redirect user back to the / page if not logged in.
    if (!sessionUser) return <Navigate to="/" replace={true} />;

    return (
        <>
            <NavBar />
            <div className="wrapper hide">
                <h4>Side Note. Store the response in a use state to grade the assessment.</h4>
                <h1>Grade title goes here...Grade 2 Math Assessment</h1>
                <h1>Assessment Container for questions</h1>
                <h2>Question Title Goes Here</h2>
                <h2>Multiple choices goes here. Radio buttons</h2>
                <h2>Submit Assessment button goes at the bottom</h2>
            </div>
            <div className="wrapper">
                <img className="test-image" src={AssessmentImage} alt="Test Exam Image" />
                <h2>{`Generating assessment for grade ${gradeLevel} in ${subject}`}</h2>
                <div className="loading-bar"></div>
                <div className="loading-percentage">0%</div>
            </div>
        </>
    );
}

export default AssessmentPage;
