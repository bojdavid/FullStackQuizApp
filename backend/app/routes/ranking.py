from fastapi import APIRouter, HTTPException, Depends, status
from typing import List
from ..schema import Ranking
from ..database import getdb
from pymongo import MongoClient
from pymongo.errors import PyMongoError
from bson import ObjectId
from datetime import datetime
from pydantic import ValidationError



router = APIRouter(
    prefix="/api/v1/ranking",
    tags=["ranking"]
)

@router.put("/{user_id}")
def update_userRank(user_id: str, rankingData : Ranking, db = Depends(getdb)):
    try:
        # Convert the ranking data to dict
        rank = rankingData.model_dump()
        
        # Update the user's rank using proper MongoDB update syntax
        result = db["users"].update_one(
                                        {"_id": ObjectId(user_id)},  # Filter to find the correct user
                                        {"$set": {"rank": rank}}  # Update operation
                                         )

        if result.modified_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found or rank not modified"
            )

        # Return updated user
        updated_user = db["users"].find_one({"_id": ObjectId(user_id)})
        if updated_user:
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