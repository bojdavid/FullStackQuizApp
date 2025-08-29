from fastapi.testclient import TestClient  # For testing FastAPI endpoints
from app import schema
from app.main import app
import pytest
from fastapi import status
from tests.override_db import override_get_db
import json

with open('app/routes/quiz_questions.json') as f:
    data = json.load(f)

override_get_db()

client = TestClient(app)

questions = data



def test_getAllQuestions():
    #MAKE A REQUEST TO GET ALL QUESTIONS
    response = client.get("api/v1/questions")

    print(response.status_code)

    assert response.status_code == 200

  
def test_getSingleQuestion():
    # MAKE A REQUEST TO GET A SINGLE QUESTION
    id = "67d1499c4779fde69ad4a650"
    response = client.get(f"api/v1/questions/{id}")
  
    assert response.status_code == 200
    
    # Check if all required fields are present
    required_fields = {
        "ID", "Question", "CorrectOption", 
        "OptionA", "OptionB", "OptionC", "OptionD",
        "Answer_Explanation", "Category"
    }
    assert all(field in response.json() for field in required_fields), "Missing required fields"



#@pytest.mark.skip(reason="Question Exists")
@pytest.mark.parametrize("question_data", questions)
def test_create_question(question_data):
    # Fix the Answer_Explanation field name if needed
    if "Answer Explanation" in question_data:
        question_data["AnswerExplanation"] = question_data.pop("Answer Explanation")
    
    response = client.post("/api/v1/questions/", json=question_data)
    assert response.status_code == 201
    # Verify response data
    response_data = response.json()
    #assert response_data["Question"] == question_data["Question"]
    #assert response_data["CorrectOption"] == question_data["CorrectOption"]
    #assert response_data["OptionA"] == question_data["OptionA"]
    #assert response_data["OptionB"] == question_data["OptionB"]
    #assert response_data["OptionC"] == question_data["OptionC"]
    #assert response_data["OptionD"] == question_data["OptionD"]
    #assert response_data["AnswerExplanation"] == question_data["AnswerExplanation"]
    #assert response_data["topic"] == question_data["topic"]

#@pytest.mark.skip(reason="Question Exists")
def test_create_many_questions():
  data = [
      {
        "ID": 1,
        "Question": "What is the capital of France?",
        "CorrectOption": "A",
        "OptionA": "Paris",
        "OptionB": "Berlin",
        "OptionC": "Madrid",
        "OptionD": "Rome",
        "Answer_Explanation": "Paris is the capital and most populous city of France.",
        "Category": "Geography"
      },
      {
        "ID": 2,
        "Question": "What is 2 + 2?",
        "CorrectOption": "B",
        "OptionA": "3",
        "OptionB": "4",
        "OptionC": "5",
        "OptionD": "6",
        "Answer_Explanation": "2 + 2 equals 4.",
        "Category": "Math"
      },
      {
        "ID": 3,
        "Question": "Who wrote \"Romeo and Juliet\"?",
        "CorrectOption": "C",
        "OptionA": "Charles Dickens",
        "OptionB": "Mark Twain",
        "OptionC": "William Shakespeare",
        "OptionD": "Jane Austen",
        "Answer_Explanation": "William Shakespeare is the author of \"Romeo and Juliet\".",
        "Category": "Literature"
      }
    ]

  #send request to the createMany Questions endpoint
  response = client.post("api/v1/questions/createManyQuestions", json=data)

  print(response.json())
  print(response.status_code)

  assert response.status_code == 201

# Test invalid data
def test_create_question_invalid():
    invalid_data = ""
    response = client.post("/api/v1/questions/", json=invalid_data)
    assert response.status_code == 422

@pytest.mark.skip(reason="Question with this Id has already been deleted")
def test_delete_question():
    id = '67d046b37fb9868e49e6ab15'
    response = client.delete(f"api/v1/questions/{id}")
  
    assert response.status_code == 200
    

@pytest.mark.skip(reason="Has already been updated")
def test_update_question():
    data =   {
        "_id" : '67d046b37fb9868e49e6ab15',
        "ID": 1,
        "Question": "What is the capital of Nigeri?",
        "CorrectOption": "A",
        "OptionA": "Paris",
        "OptionB": "Berlin",
        "OptionC": "Madrid",
        "OptionD": "Rome",
        "Answer_Explanation": "Paris is the capital and most populous city of France.",
        "Category": "Geography"
  }

    response = client.put(f"api/v1/questions/{data["_id"]}", json=data)
    
    print("The Id is", data["_id"])
    print(response.json())
    assert response.status_code == 200
    