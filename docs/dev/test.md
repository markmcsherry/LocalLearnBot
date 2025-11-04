# 📘 Learning Tracker Chatbot – Architecture Overview

This project includes a Chrome Extension, a backend API, and OpenAI integration.

## 🧠 Use Case Diagram
```mermaid
%%{init: {'theme': 'neutral'}}%%
actor User
rectangle "Chrome Extension" as CE {
(Track Browsing Activity)
(Chat with Assistant)
}
rectangle "Backend API" as BE {
(Process Query)
(Call OpenAI)
}
rectangle "OpenAI API" as OA {
(Generate Response)
}
User --> CE
CE --> BE
BE --> OA
OA --> BE
BE --> CE
```