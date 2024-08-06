
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
                setData(data);
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

        if (isLoading) {
            fetchAssessment();
        }
        // remove interval when component is unmounted.
        return () => clearInterval(intervalID);
    }, [isLoading])

    const startAssessment = (e) => {
        // when clicked, hide the progress bar
        setStartTest(true);
    }

    return (
        <>
            <NavBar />
            <div className={startTest ? "wrapper" : "hide"}>
                {/* Side Note. Store the response in a use state to grade the assessment*/}
                <form className="form">
                    {/* map through the list of questions from the res */}
                    {data?.questions.map((question, idx) => (
                        <fieldset key={idx}>
                            <legend>{`Question #${idx+1}: ${question.question}`}</legend>
                            <div>
                                <input type="radio" name={`question${idx}`} id={`q${idx}-a1`} />
                                <label htmlFor={`q${idx}-a1`}>{question.options[0]}</label>
                            </div>
                            <div>
                                <input type="radio" name={`question${idx}`} id={`q${idx}-a2`} />
                                <label htmlFor={`q${idx}-a2`}>{question.options[1]}</label>
                            </div>
                            <div>
                                <input type="radio" name={`question${idx}`} id={`q${idx}-a3`} />
                                <label htmlFor={`q${idx}-a3`}>{question.options[2]}</label>
                            </div>
                            <div>
                                <input type="radio" name={`question${idx}`} id={`q${idx}-a4`} />
                                <label htmlFor={`q${idx}-a4`}>{question.options[3]}</label>
                            </div>
                        </fieldset>
                    ))}
                    <button type="submit" className="submit">Submit</button>
                </form>
            </div>
            <div className={startTest ? "hide" : "wrapper"}>
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
