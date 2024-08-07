from flask import Blueprint, jsonify, request

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
    Make an API request to the LLM API to generate an assessment
    """

    # Get the JSON data from the client's request
    data = request.get_json()
    grade_level = data.get("gradeLevel")
    subject = data.get("subject")

    # Process data to generate a prompt message
    prompt = f"""Generate an assessment of 10 questions in total for grade {grade_level} in the subject of {subject}?
    Also, can you formate the assessment in a JSON object with 3 different key properties, "grade", "subject", and "questions". The grade key will have a integer value, the subject will be a string, and the questions will have an array of questions. Each question inside the questions array will be an object with a "question" key, an "options" key, and an "answer" key.
    """

    # # Generate response from Gemini
    # response = model.generate_content(prompt)
    # # grab the text from the response
    # text = response.text
    # # convert text to json
    # return jsonify(text), 200

    test =  {
    "grade": 2,
    "subject": "Math",
    "questions": [
    {
      "question": "What is 5 + 3?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "answer": "8"
    },
    {
      "question": "What is 10 - 4?",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "answer": "6"
    },
    {
      "question": "What is 7 + 2?",
      "options": [
        "8",
        "9",
        "10",
        "11"
      ],
      "answer": "9"
    }
    ]
    }

    return jsonify(test), 200

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
