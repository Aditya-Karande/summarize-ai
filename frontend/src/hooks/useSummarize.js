// ─────────────────────────────────────────────
//  HOOK — useSummarize
//  Handles all API communication with the backend.
//  Keeps fetch logic out of the UI component.
// ─────────────────────────────────────────────

import { useState } from "react";

const API_URL = "http://localhost:8000/summarize";

export function useSummarize() {
  const [summary, setSummary]     = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]         = useState("");

  async function summarize(inputText) {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setSummary("");
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setSummary(data.summary || data.result || JSON.stringify(data));

    } catch (err) {
      setError(
        `Could not reach the server. Make sure your backend is running on localhost:8000.\n\nDetails: ${err.message}`
      );
    } finally {
      setIsLoading(false);
    }
  }

  return { summary, isLoading, error, summarize };
}
