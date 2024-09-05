const RECEIVE_ASSESSMENTS = 'assessent/receiveAssessments';
const RECEIVE_ASSESSMENT = 'assessment/receiveAssessment';
const REMOVE_ASSESSMENTS = 'assessment/removeAssessment';


const receiveAssessments = (assessments) => {
    return {
        type: RECEIVE_ASSESSMENTS,
        assessments
    }
};

const receiveAssessment = (assessment) => {
    return {
        type: RECEIVE_ASSESSMENT,
        assessment
    }
};

const removeAssessments = () => {
    return {
        type: REMOVE_ASSESSMENTS
    }
};

export const createAssessment = (assessment) => async (dispatch) => {
    const res = await fetch(`/api/assessments/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(assessment)
    });

    let data =  await res.json();
    if (res.ok){
        dispatch(receiveAssessment(data));
    }else{
        throw(data);
    }
}

export const getAssessments = (userId) => async dispatch => {
    let res = await fetch(`/api/users/${userId}/assessments`);

    if (res.ok) {
		const data = await res.json();
		if (data.errors) {
			return;
		}
		dispatch(receiveAssessments(data.assessments));
	}
};

const assessmentReducer = (state = {}, action) => {
    let newState = {...state}

    switch(action.type){
        case RECEIVE_ASSESSMENTS:
            return action.assessments;
        case RECEIVE_ASSESSMENT:
            newState[action.assessment.id] = action.assessment;
            return action.assessments;
        default:
            return state;
    }
};

export default assessmentReducer;