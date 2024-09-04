import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssessments } from "../../redux/assessments";
import './Dashboard.css'


const Dashboard = () => {

    const dispatch = useDispatch();
    const assessments = useSelector(state => state.assessments);
    const currentUser = useSelector(state => state.session.user);

    useEffect( () => {
        dispatch(getAssessments(currentUser.id));
    }, [dispatch, currentUser] );

    return(
        <>
            <h1>My Grade History</h1>
            <ul>
                {Object.values(assessments).map(assessment => (
                <li>{assessment.subject} {assessment.grade} </li>))}
            </ul>
        </>
    );
}

export default Dashboard;