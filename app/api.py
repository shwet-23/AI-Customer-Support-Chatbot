from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path

from app.chatbot import (
    load_knowledge_base,
    generate_ai_response
)


app = FastAPI(
    title="TechCare AI Customer Support API",
    description="AI Customer Support Chatbot API",
    version="1.0.0"
)


BASE_DIR = Path(__file__).resolve().parent.parent

STATIC_DIR = BASE_DIR / "static"


app.mount(
    "/static",
    StaticFiles(directory=STATIC_DIR),
    name="static"
)


knowledge_base = load_knowledge_base()

conversation_history = []


class ChatRequest(BaseModel):

    message: str


@app.get("/")
def home():

    return FileResponse(
        STATIC_DIR / "index.html"
    )


@app.get("/health")
def health_check():

    return {
        "status": "healthy"
    }


@app.post("/chat")
def chat(request: ChatRequest):

    response = generate_ai_response(
        request.message,
        knowledge_base,
        conversation_history
    )

    return {
        "user_message": request.message,
        "response": response
    }