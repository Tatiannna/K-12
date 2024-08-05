from flask import Blueprint

import google.generativeai as genai
import os

# grab api key from env
GOOGLE_API_KEY = os.environ.get("GOOGLE_GEMINI_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)
# initialize model
model = genai.GenerativeModel('gemini-1.5-flash')

# set up API route
assessment_routes = Blueprint('assessments', __name__)


@assessment_routes.route('/assessments', methods=['POST'])
def generate_assessment():
    """
    Make a API request to the LLM API to generate an assessment
    """

    # create dummy data for now
    grade_level = 1
    subject = "math"

    prompt = f"""Generate an assessment for grade {grade_level}, and
    focusing in the subject of {subject}.
    """

    # Generate response from Gemini
    response = model.generate_content(prompt)

    print(type(response.text))
    print(response.text)

    # Parse through the response if necessary

    # serialize data as json

    # return json data

    return "hello world", 200
