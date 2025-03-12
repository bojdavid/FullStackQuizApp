from fastapi import APIRouter, HTTPException, Depends, status
from typing import List
from ..schema import Question, QuestionCreate, QuestionOut
from ..database import getdb
from pymongo import MongoClient
from pymongo.errors import PyMongoError
from bson import ObjectId
from datetime import datetime
from pydantic import ValidationError

router = APIRouter(
    prefix="/api/v1/questions",
    tags=["questions"]
)


@router.get('/', response_model=List[QuestionOut])
def get_all_questions(db = Depends(getdb)):
        try:
                questions = list(db["questions"].find())
                id = 0
                for question in questions:
                    question["_id"] = str(question["_id"])
                    question["ID"] = id 
                    id = id + 1
                return questions

        except HTTPException  as e:
            #Did this becuas if i don't the error will be caught as a normal exception error and will throw a 500 internal error status code
            raise e

        except ValidationError as e:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail=str(e)
            )
        
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"An error occurred: {str(e)}"
            )
    

@router.get('/{id}', response_model=QuestionOut)
def get_singleQuestion(id : str, db= Depends(getdb)):
    #check if the question exists
    question = db["questions"].find_one({"_id": ObjectId(id)})
    print(question)
    try:
        if question:
                question["_id"] = str(question["_id"])
                question["ID"] = 2 #Use this to test pydantic validation
                return question
        else:
            raise HTTPException(status_code=404, detail=f"Question with Id is not found")
    
    except HTTPException  as e:
        #Did this becuas if i don't the error will be caught as a normal exception error and will throw a 500 internal error status code
        raise e

    except ValidationError as e:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=str(e)
        )
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred: {str(e)}"
        )
        


@router.post('/', response_model=QuestionOut, status_code=201)
def create_Singlequestion(questionData:QuestionCreate, db = Depends(getdb)):
    try:
        print(questionData)
        question = questionData.model_dump()
        question['created_at'] =datetime.utcnow()

        #CHECK IF THE QUESTION ALREADY EXISTS BY COMPARING THE QUESTIONS TO SEE IF THEY ARE THE SAME
        question_exist = db['questions'].find_one({"Question": question["Question"] })


        if question_exist:
            print("The question exists")
            raise HTTPException( status_code=status.HTTP_403_FORBIDDEN, detail="Question already exists")
        else:
            # ADD QUESTION TO DATABASE SINCE THEY IT DOES NOT EXIST
            result = db["questions"].insert_one(question) #Mongodb Insertion Operation
            question["_id"] = str(result.inserted_id) #Convert ObjectId to strng
            question["ID"] = 3
        
        return question
    except HTTPException  as e:
        #Did this becuas if i don't the error will be caught as a normal exception error and will throw a 500 internal error status code
        raise e

    except ValidationError as e:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=str(e)
        )
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred: {str(e)}"
        )

@router.post("/createManyQuestions", status_code=201)
def add_manyQuestions(questionsData: List[QuestionCreate],  db=Depends(getdb)):
    try:
        questions = []
        for question_ in questionsData:
            
            question = question_.model_dump()
            question['created_at'] =datetime.utcnow()


            #CHECK IF THE QUESTION ALREADY EXISTS BY COMPARING THE QUESTIONS TO SEE IF THEY ARE THE SAME
            question_exist = db['questions'].find_one({"Question": question["Question"] })


            if question_exist:
                print("The question exists")
                question["exists"] = True
                #raise HTTPException( status_code=status.HTTP_403_FORBIDDEN, detail="Question already exists")
            else:
                # ADD QUESTION TO DATABASE SINCE THEY IT DOES NOT EXIST
                result = db["questions"].insert_one(question) #Mongodb Insertion Operation
                question["_id"] = str(result.inserted_id) #Convert ObjectId to strng
                question["ID"] = 3
                question["exists"] = False

            questions.append(question)

        return questions
    
    except HTTPException  as e:
        #Did this becuas if i don't the error will be caught as a normal exception error and will throw a 500 internal error status code
        raise e

    except ValidationError as e:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=str(e)
        )
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred: {str(e)}"
        )

    
@router.put('/{id}', response_model=QuestionOut)
def update_question(id: str, question_data: Question, db = Depends(getdb)):
    try:
        # Check if the question with the id exists
        question_exists = db['questions'].find_one({"_id": ObjectId(id)})
        if not question_exists:
            raise HTTPException(status_code=404, detail="Question does not exist")

        # Prepare update data
        updated_question = question_data.model_dump()
        updated_question['created_at'] =datetime.utcnow()
        
        # Perform update
        result = db["questions"].update_one(
            {"_id": ObjectId(id)}, 
            {"$set": updated_question}
        )

        if result.modified_count == 0:
            raise HTTPException(
                status_code=400, 
                detail="Question was not updated/ No values where changed"
            )

        # Get and return the updated question
        updated_doc = db["questions"].find_one({"_id": ObjectId(id)})
        updated_doc["_id"] = str(updated_doc["_id"])  # Convert ObjectId to string
        return updated_doc

    except HTTPException  as e:
        #Did this becuas if i don't the error will be caught as a normal exception error and will throw a 500 internal error status code
        raise e

    except ValidationError as e:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=str(e)
        )
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred: {str(e)}"
        )


@router.delete('/{id}', response_model=dict)
def delete_questions(id : str, db = Depends(getdb)):
    try:
        #CHECK IF A QUESTION WITH THAT ID EXISTS
        question_exists = db["questions"].find_one({"_id":ObjectId(id)})

        #DELETE THE QUESTION FROM THE DATABASE IF IT EXIST ELSE RETURN A MESSAGE SAYING IT DOESN'T EXISTS
        if question_exists:
            result = db["questions"].delete_one({"_id":ObjectId(id)})
            if result.deleted_count == 0:
                raise HTTPException(status_code=404, detail="Something went wrong when deleting question")
            return {"detail": "User deleted successfully"}
        else:
            raise HTTPException(status_code=404, detail="Question does not exist")

    except HTTPException  as e:
        #Did this becuas if i don't the error will be caught as a normal exception error and will throw a 500 internal error status code
        raise e

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred: {str(e)}"
        )
