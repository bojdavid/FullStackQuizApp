from fastapi import APIRouter, HTTPException, Depends, status
from typing import List
from ..schema import User, UserOut, UserCreate
from ..database import getdb
from pymongo import MongoClient
from pymongo.errors import PyMongoError
from bson import ObjectId
from datetime import datetime

router = APIRouter(
    prefix="/api/v1/users",
    tags=["users"]
)



@router.get("/", response_model=List[UserOut])
async def get_users(db: MongoClient = Depends(getdb)):
    try:
        users = list(db["users"].find())
        for user in users:
            user["_id"] = str(user["_id"]) 

        return (users)

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


# GET A SINGLE USER
@router.get("/{user_id}", response_model=UserOut)
async def get_user(user_id: str, db: MongoClient = Depends(getdb)):
    try:
        user = db["users"].find_one({"_id": ObjectId(user_id)})
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        user["_id"] = str(user["_id"])  # Convert ObjectId to string
        return user

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


#CREATE A USER
#@router.post("/", response_model=UserOut)
@router.post("/", response_model=UserOut, status_code=201)
async def create_user(user: UserCreate, db=Depends(getdb)):
    try:
        user_dict = user.model_dump()  # Use model_dump() for Pydantic v2 (user.dict() for v1)
        user_dict["created_at"] = datetime.utcnow()
        
        # CHECK IF EMAIL ALREADY EXISTS IN THE DATABASE.
        existing_user = db["users"].find_one({"email": user_dict["email"]})
        if existing_user:
            print("caught his exception")
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Email already exists")
        
        else:
            #Ranking data for user
            user_dict["rank"] = {
                "exp": 0,
                'timeOfRank': datetime.utcnow()
            }
            
            # ADD USER TO THE DATABASE SINCE THEY DON'T EXISTS.
            result = db["users"].insert_one(user_dict)  # MongoDB insert operation
            user_dict["_id"] = str(result.inserted_id)  # Convert ObjectId to string


        return user_dict

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


# UPDATE USER 
@router.put("/{user_id}", response_model=UserOut)
async def update_user(user_id: str, user: UserCreate, db=Depends(getdb)):
    try:
        # Validate user_id is a valid ObjectId
        if not ObjectId.is_valid(user_id):
            raise HTTPException(status_code=400, detail="Invalid user ID format")

        existing_user = db["users"].find_one({"_id": ObjectId(user_id)})
        
        if not existing_user:
            raise HTTPException(status_code=404, detail="User not found")

        # Update user data
        updated_user = user.model_dump()
        updated_user["updated_at"] = datetime.utcnow()

        db["users"].update_one({"_id": ObjectId(user_id)}, {"$set": updated_user})

        # Fetch and return updated user
        updated_user = db["users"].find_one({"_id": ObjectId(user_id)})

        if not updated_user:  # Safety check
            raise HTTPException(status_code=500, detail="Failed to retrieve updated user")

        updated_user["_id"] = str(updated_user["_id"])
        return updated_user

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



# DELETE USER DATA
@router.delete("/{user_id}", response_model=dict)
async def delete_user(user_id: str, db: MongoClient = Depends(getdb)):
    try:
        result = db["users"].delete_one({"_id": ObjectId(user_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="User not found")
        return {"detail": "User deleted successfully"}
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