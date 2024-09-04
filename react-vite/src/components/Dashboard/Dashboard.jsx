import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssessments } from "../../redux/assessments";
import './Dashboard.css'


const Dashboard = () => {

    const dispatch = useDispatch();
    const assessments = useSelector(state => state.assessments);
    const currentUser = useSelector(state => state.session.user);
    const [stats, setStats] = useState(null);

    useEffect( () => {
        dispatch(getAssessments(currentUser.id));
        
    }, [dispatch, currentUser] );

    useEffect( () => {
        setStats(calculateStats())
    }, [assessments])

    const assessmentsArray = Object.values(assessments);

    const calculateStats = () => {
        let numAssessmentsTaken = assessmentsArray.length;
        let numMathTaken = 0;
        let numReadingTaken = 0;
        let averageMathScore = 0;
        let averageReadingScore = 0;
        let totalMathScore = 0;
        let totalReadingScore = 0;

        console.log("assessments array: ", assessmentsArray);
        for (let i = 0; i < assessmentsArray.length; i++){
            if (assessmentsArray[i].subject == 'Mathematics'){
                numMathTaken++;
                totalMathScore += assessmentsArray[i].grade;
            }else if (assessmentsArray[i].subject == 'Reading'){
                numReadingTaken++;
                totalReadingScore += assessmentsArray[i].grade;
            }
        }

        averageMathScore = totalMathScore / numMathTaken;
        averageReadingScore = totalReadingScore / numReadingTaken;

        return {
            numAssessmentsTaken,
            numMathTaken,
            numReadingTaken,
            averageMathScore,
            averageReadingScore,
        }
    }

    return(
        <>
            <h1>My Assessment Summary</h1>
            <p>Assessments Taken: {stats.numAssessmentsTaken}</p>
            <p>Math Assessments Taken: {stats.numMathTaken}</p>
            <p>Reading Assessments Taken: {stats.numReadingTaken}</p>
            <p>Average Math Score: {stats.averageMathScore}</p>
            <p>Average Reading Score: {stats.averageReadingScore}</p>
            <p>Grades: </p>
            <ul>
                {assessmentsArray.map(assessment => (
                <li key={assessment.id}>{assessment.subject} {assessment.grade} </li>))}
            </ul>
        </>
    );
}

export default Dashboard;