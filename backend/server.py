from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import mysql.connector

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_methods = ["*"]
)


@app.post("/register/")
def save_message(email: str, password: str):
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9519pass",
        database="mydb" # mydb
    )

    cursor = db.cursor()

    cursor.execute("insert into tablet (email, password) values (%s, %s)", (email, password))
    db.commit()

    db.close()
    cursor.close()

    return {
        "status": "ok",
        "message": "✔Пользователь успешно зарегистрирован!"
    }


@app.get("/in_account/")
def search_account(email: str, password: str):
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="9519pass",
        database="mydb" # mydb
    )

    cursor = db.cursor()

    cursor.execute("select email, password from tablet where email = %s and password = %s", (email, password))
    
    result = cursor.fetchone()
    message = ""

    print(result)


    if result:
        message = "✔Пользователь найден! можете входить..."
    else:
        message = "❌Неверный логин или пароль!"
  
    return {
        "status": "ok",
        "message": message
    }


uvicorn.run(app, host="localhost", port=8000)

