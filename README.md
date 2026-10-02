# 🤖 TechCare AI Customer Support Chatbot

An AI-powered customer support chatbot built with **Python, FastAPI, HTML, CSS, and JavaScript**.

The chatbot provides automated customer support using a structured business knowledge base, conversation handling, and optional LLM integration. It also includes a web-based chat interface and a local fallback system for reliable responses.

## 🚀 Live Demo

**Live Application:**  
https://ai-customer-support-chatbot-9qmb.onrender.com/

> Note: The application is deployed on Render's free instance. After a period of inactivity, the first request may take some time while the service starts again.

---

## ✨ Features

- 🤖 AI Customer Support Chatbot
- 📚 Business Knowledge Base
- 🧠 Conversation Memory
- ⚡ FastAPI REST API
- 🌐 Web-based Chat Interface
- 🔄 Local Fallback System
- 🛡️ Error Handling
- ❤️ Health Check Endpoint
- 📱 Responsive UI
- 🧹 Clear Chat Functionality
- ⌨️ Enter-to-Send Support
- ⏳ Typing Indicator
- 🔌 LLM API Integration
- ☁️ Cloud Deployment

---

## 🛠️ Tech Stack

### Backend

- Python
- FastAPI
- Uvicorn
- OpenAI API
- python-dotenv

### Frontend

- HTML5
- CSS3
- JavaScript

### Data & Tools

- JSON
- Git
- GitHub
- Render

---

## 🏗️ Project Architecture

```text
User
  │
  ▼
Web Chat Interface
  │
  ▼
FastAPI Backend
  │
  ▼
Chatbot Logic
  │
  ├──────────────► Business Knowledge Base
  │
  └──────────────► LLM API
                         │
                         ▼
                    AI Response
                         │
                         ▼
                  User Interface