from flask import Blueprint, jsonify

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

    prompt = f"""Generate an assessment of 10 questions in total for grade 2 in the subject of Math?
    Also, can you formate the assessment in a object?
    """

    # Generate response from Gemini
    # response = model.generate_content(prompt)
    # grab the text from the response
    # text = response.text

    # convert text to json
    # return jsonify(text), 200
    return jsonify("hello world"), 200

"""
fetch('/api/assessments', {
  method: 'POST', // Method type
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse JSON data from the response
  })
  .then(data => {
    console.log("data: ", data); // Handle the data received from the server
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
"""
