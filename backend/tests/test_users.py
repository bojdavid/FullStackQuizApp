from fastapi.testclient import TestClient  # For testing FastAPI endpoints
from app import schema
from app.main import app
import pytest
from fastapi import status
from tests.override_db import override_get_db
from datetime import datetime


override_get_db()

client = TestClient(app)


@pytest.mark.skip(reason="user already exists")
#@pytest.mark.parameterize()
def test_create_user():
    user = {
        "email": "email3@email.com",
        "username": "user1"
    }

    #SEND A POST REQUEST WITH FORM DATA
    response = client.post("api/v1/users", json=user)

    # PRINT FOR DEBUGGING
    print(response.json())

    # Assertions
    assert response.status_code == 201


def test_create_existing_user():
    user = {
        "email": "email5@email.com",
        "username": "user1"
    }

    #SEND A POST REQUEST WITH JSON DATA
    response = client.post("api/v1/users", json=user)

    # PRINT FOR DEBUGGING
    print(response.status_code)
    print(response.json())

    # Assertions
    assert response.status_code == 403 
    assert response.json()["detail"] == "Email already exists"
    


#@pytest.mark.skip(reason="error when running")
def test_update_user():
    user = {
        "email":"email4@gmail.com",
        "username":"user2"
    }
    id = '67d14fcd2bbcff6869cc256a'

    #SEND A PUT REQUEST WITH JSON DATA
    response = client.put(f'api/v1/users/{id}', json=user)

    #print for debugging
    print(response.status_code)
    print(response.json())

    assert response.status_code == 200



@pytest.mark.skip(reason="User with this id has been deleted")
def test_delete_user():
    id = ''

    response = client.delete(f"api/v1/users/{id}")

    print(response.status_code)
    print(response.json())

    assert response.status_code == 200
    assert response.json()["detail"] == "User deleted successfully"

def test_get_all_users():
    
    response = client.get("api/v1/users/")

    assert response.status_code == 200


def test_get_single_user():
    id = '67d14fcd2bbcff6869cc256a'

    response = client.get(f"api/v1/users/{id}")

    assert response.status_code == 200


def test_user_notFound():
    id = '67ceed3ee8eff89fa7c1e43c'

    response = client.get(f"api/v1/users/{id}")

    assert response.status_code == 404
    assert response.json()["detail"] == "User not found"


def test_update_userRank():
    #send a request to the update rank endpoint
    id = '67d14fcd2bbcff6869cc256a'
    rank = {
        "exp": 100,
        "timeOfRank": datetime.utcnow().isoformat()
    }

    #SEND A PUT REQUEST WITH JSON DATA
    response = client.put(f'api/v1/ranking/{id}', json=rank)

    #print for debugging
    print(response.status_code)
    print(response.json())

    assert response.status_code == 200
