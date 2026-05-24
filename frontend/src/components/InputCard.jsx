// ─────────────────────────────────────────────
//  COMPONENT — InputCard
//  Contains the textarea, word count,
//  summarize button, and error message
// ─────────────────────────────────────────────

import { useState } from "react";
import styles from "../styles/styles";

export default function InputCard({ inputText, setInputText, onSummarize, isLoading, error, wordCount }) {
  const [btnHovered, setBtnHovered] = useState(false);

  const isButtonDisabled = isLoading || !inputText.trim();

  return (
    <div style={styles.card}>

      {/* Label row — "Your Text" + word count */}
      <div style={styles.label}>
        <span style={styles.labelText}>Your Text</span>
        <span style={styles.wordCount}>{wordCount} words</span>
      </div>

      {/* Textarea */}
      <textarea
        style={styles.textarea}
        placeholder="Paste your article, document, or any long text here…"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        spellCheck={false}
      />

      {/* Summarize button */}
      <button
        className="summarize-btn"
        style={{
          ...styles.button,
          ...(isButtonDisabled ? styles.buttonDisabled : {}),
          transform: btnHovered && !isButtonDisabled ? "scale(1.01)" : "scale(1)",
        }}
        onClick={onSummarize}
        disabled={isButtonDisabled}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
      >
        {isLoading ? (
          /* Spinner shown while waiting for backend response */
          <div style={styles.spinnerWrapper}>
            <div style={styles.spinnerRing} />
            Analyzing your text…
          </div>
        ) : (
          "✦  Summarize"
        )}
      </button>

      {/* Error message — only shown if fetch failed */}
      {error && (
        <div style={styles.error}>
          ⚠ {error}
        </div>
      )}

    </div>
  );
}
