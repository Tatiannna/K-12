from flask import Blueprint

assessment_routes = Blueprint('assessments', __name__)


@assessment_routes.route('/assessments', methods=['POST'])
def generate_assessment():
    """
    Make a API request to the LLM API to generate an assessment
    """

    # create dummy data for now
    grade_level = 1
    subject = "math"

    # connect to the LLM API
        # Gather the API key
            # Gather the necessary Libraries

    # Parse through the response if necessary

    # serialize data as json

    # return json data

    return "hello world", 200
