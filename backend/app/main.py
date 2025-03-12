from fastapi import FastAPI, Depends
from .database import getdb
from .routes import users, questions, ranking

app = FastAPI()


try:
        getdb()
        app.include_router(users.router)
        app.include_router(questions.router)
        app.include_router(ranking.router)
        
except Exception as e:
        print(e)


@app.get("/")
async def root(database=Depends(getdb)):
    return {"message": "Hello World"}


