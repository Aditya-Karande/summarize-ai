from transformers import T5ForConditionalGeneration, T5Tokenizer
import torch
import re


MODEL_PATH = "saved_summarizer_model"


print("Loading model...")
model = T5ForConditionalGeneration.from_pretrained(MODEL_PATH)
print("Model loaded!")
print("Loading tokenizer...")
tokenizer = T5Tokenizer.from_pretrained(MODEL_PATH)
print("Tokenizer loaded!")

if torch.cuda.is_available():
    device = torch.device("cuda")
else:
    device = torch.device("cpu")


def clean_text(text: str)->str:
    text = re.sub(r"\r\n", " ", text)
    text = re.sub(r"<.*?>", " ", text)
    text = re.sub(r"\s+", " ", text)
    text = text.strip().lower()
    return text

def summarize_dialogue(dialogue):
  #clean data
  dialogue = clean_text(dialogue)

  #tokenize dialogue
  inputs = tokenizer(
      dialogue,
      padding="max_length",
      max_length=512,
      truncation=True,
      return_tensors="pt"
  ).to(device)

  #generate summary (token ids)
  model.to(device)
  target = model.generate(
      input_ids = inputs["input_ids"],
      attention_mask = inputs["attention_mask"],
      max_length = 150,
      num_beams = 4,
      early_stopping = True
  )

  #decode (token ids -> summary)
  summary = tokenizer.decode(
      target[0],
      skip_special_tokens = True 
  )

  return summary