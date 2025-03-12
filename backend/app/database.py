
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://BOJ:Iamhidden123@simplesite.bx8ax.mongodb.net/?appName=SimpleSite"

uri_loc ="mongodb://localhost:27017/"


def getdb():
    # Create a new client and connect to the server
    client = MongoClient(uri_loc, server_api=ServerApi('1'))
    db = client["Quiz"]

    try:
        # Send a ping to confirm a successful connection
        response = client.admin.command('ping')
        if response['ok'] == 1:
            # SINCE THIS IS A GENERATOR, THE PRINT FUNTIONS WON'T DISPLAY IF I SIMPLY CALL THE FUNCTION.
            # LEARN MORE ABOUT GENERATORS TO LOG THIS SUCCESSFULLY
            print("Pinged your deployment. You successfully connected to MongoDB!")
            yield db

        else:
            print("Couldn't Pinge your deployment. You couldn't connected to MongoDB!")
            raise Exception(f"response = {response} ------ Unsuccessfull database connection")
    finally:
        client.close()
        print("Closed the connection to Mongodb")
        