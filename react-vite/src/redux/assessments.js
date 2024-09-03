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


export const getAssessments = (userId) => async dispatch => {
    let res = await fetch(`/api/users/${userId}/assessments`);

    if (res.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}
		dispatch(receiveAssessments(data));
	}
};

const assessmentReducer = (state = {}, action) => {
    let newState = {...state}

    switch(action.type){
        case RECEIVE_ASSESSMENTS:
            return { ...newState, ...action.assessments};
        default:
            return state;
    }
};

export default assessmentReducer;