
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, NavLink, useParams } from "react-router-dom";
import NavBar from "../Navigation/";
import "./AssessmentPage.css";
import AssessmentImage from "../../Images/k12AssessmentImage.png";

function AssessmentPage() {

    // redirect user back to the / page if not logged in.
    const sessionUser = useSelector((state) => state.session.user);
    if (!sessionUser) return <Navigate to="/" replace={true} />;

    const { gradeLevel, subject } = useParams();
    // handle the loading percentage
    const [load, setLoad] = useState(0);
    // handle loading boolean
    const [isLoading, setIsLoading] = useState(true);
    // handle begin test button
    const [startTest, setStartTest] = useState(false);
    // handle data from fetch request
    const [data, setData] = useState(null);

    useEffect(() => {
        // increment loading percentage
        const intervalID = setInterval(() => {
            // wait until the fetch req is done loading to hit 100
            if (load < 98) {
                // update load percentage
                setLoad((prev) => prev += 1);
            }
        }, 100)

        const fetchAssessment = async () => {
            try {
                const res = await fetch("/api/assessments", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ gradeLevel, subject })
                })

                if (!res.ok) {
                    throw new Error("Network response went wrong, please try again.")
                }

                // setTimeout(() => {
                //     clearInterval(intervalID);
                //     setLoad((prev) => prev = 100);
                //     setIsLoading(false);
                // }, 4000)

                const data = await res.json();
                setData(prev => prev = data);
                console.log('data: ', data);
            }
            catch (err) {
                console.log(err);
            }
            finally {
                clearInterval(intervalID);
                setLoad((prev) => prev = 100);
                setIsLoading(false);
            }
        }
        fetchAssessment();
        // remove interval when component is unmounted.
        return () => clearInterval(intervalID);
    }, [])

    const startAssessment = (e) => {
        // when clicked, hide the progress bar
        setStartTest(true);
    }

    return (
        <>
            <NavBar />
            <div className={ startTest ? "wrapper" : "hide"}>
                <h4>Side Note. Store the response in a use state to grade the assessment.</h4>
                <h1>Grade title goes here...Grade 2 Math Assessment</h1>
                <h1>Assessment Container for questions</h1>
                <h2>Question Title Goes Here</h2>
                <h2>Multiple choices goes here. Radio buttons</h2>
                <h2>Submit Assessment button goes at the bottom</h2>
            </div>
            <div className={ startTest ? "hide" : "wrapper"}>
                <img className="test-image" src={AssessmentImage} alt="Test Exam Image" />
                <h2>{`Generating assessment for grade ${gradeLevel} in ${subject}`}</h2>
                <div className="loading-bar">
                    <div
                        className="loading-bar-fill"
                        style={{
                            width: `${load}%`
                        }}
                    >
                    </div>
                </div>
                <div className="loading-percentage">{load}%</div>
                <button onClick={startAssessment} className={isLoading ? "hide" : "start-btn"}>Start Assessment</button>
            </div>
        </>
    );
}

export default AssessmentPage;
