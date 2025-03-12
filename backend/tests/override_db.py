from pymongo.mongo_client import MongoClient
#from app.config import Settings
from app.database import getdb
from app.main import app

uri = "mongodb://localhost:27017/"

def override_get_db():
    conn = MongoClient(uri)
    db = conn["Quiz"] 
    try:
        yield db
    finally:
        conn.close()

app.dependency_overrides[getdb] = override_get_db