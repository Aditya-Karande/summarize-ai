// ─────────────────────────────────────────────
//  COMPONENT — ResultCard
//  Displays the summary returned by the backend.
//  Only renders when there is a summary to show.
// ─────────────────────────────────────────────

import styles from "../styles/styles";

export default function ResultCard({ summary, wordCount }) {
  // Don't render anything if there's no summary yet
  if (!summary) return null;

  return (
    <div style={styles.resultCard}>

      {/* Header row — "Summary" label + word count */}
      <div style={styles.resultHeader}>
        <div style={styles.resultTitle}>
          <div style={styles.resultDot} />
          Summary
        </div>
        <span style={styles.wordCount}>{wordCount} words</span>
      </div>

      {/* The actual summary text */}
      <p style={styles.resultText}>{summary}</p>

    </div>
  );
}
