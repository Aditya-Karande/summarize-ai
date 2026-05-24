from huggingface_hub import HfApi

api = HfApi()

api.upload_folder(
    folder_path = "backend/saved_summarizer_model",
    repo_id = "AdityaKarande/summarize-ai-model",
    repo_type = "model"
)

print("Model Uploaded Successfully...")