// ─────────────────────────────────────────────
//  COMPONENT — Header
//  Shows the badge, app title, and subtitle
// ─────────────────────────────────────────────

import styles from "../styles/styles";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.badge}>✦ T5 Transformer Based</div>
      <h1 style={styles.title}>SummarizeAI</h1>
      <p style={styles.subtitle}>
        Paste any text → get a clean, concise summary in seconds
      </p>
    </header>
  );
}
