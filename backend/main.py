from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import SummarizerRequest, SummarizerResponse
from model import summarize_dialogue

app = FastAPI(
    title = "Text Summarizer",
    description = "Text Summarization using T5-base Transfromer",
    version = "1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_methods = ["*"],
    allow_headers = ["*"]
)

@app.get("/")
def root():
    return {"status": "Summarizer API is Running.."}

@app.post("/summarize", response_model = SummarizerResponse)
def summarize_text(request: SummarizerRequest):
    summary = summarize_dialogue(request.text)
    return SummarizerResponse(summary=summary)
