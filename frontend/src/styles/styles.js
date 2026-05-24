// ─────────────────────────────────────────────
//  STYLES — all component styles as JS objects
//  grouped by the element they belong to
// ─────────────────────────────────────────────

import COLORS from "./colors";

const styles = {

  /* ── Page wrapper ── */
  page: {
    minHeight: "100vh",
    backgroundColor: COLORS.bg,
    fontFamily: "'IBM Plex Mono', 'Fira Code', 'Courier New', monospace",
    padding: "40px 16px 80px",
    position: "relative",
    overflow: "hidden",
  },

  /* Decorative blurred blobs in the background */
  blobPurple: {
    position: "fixed",
    top: "-160px",
    right: "-120px",
    width: "480px",
    height: "480px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  blobCyan: {
    position: "fixed",
    bottom: "-100px",
    left: "-80px",
    width: "360px",
    height: "360px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },

  /* ── Centered content column ── */
  container: {
    maxWidth: "760px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },

  /* ── Header ── */
  header: {
    textAlign: "center",
    marginBottom: "48px",
  },
  badge: {
    display: "inline-block",
    padding: "4px 14px",
    borderRadius: "99px",
    border: `1px solid ${COLORS.cardBorder}`,
    background: COLORS.card,
    color: COLORS.accentCyan,
    fontSize: "11px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "20px",
  },
  title: {
    margin: "0 0 14px",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: "800",
    letterSpacing: "0.04em",
    fontSize: "clamp(64px, 12vw, 110px)",
    background: "linear-gradient(135deg, #f0f4ff 30%, #a78bfa 70%, #22d3ee 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    lineHeight: 1.1,
  },
  subtitle: {
    color: COLORS.textMuted,
    fontSize: "15px",
    margin: 0,
    letterSpacing: "0.02em",
  },

  /* ── Glass card ── */
  card: {
    background: COLORS.card,
    border: `1px solid ${COLORS.cardBorder}`,
    borderRadius: "20px",
    padding: "32px",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    marginBottom: "20px",
  },

  /* ── Section label above inputs ── */
  label: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  labelText: {
    color: COLORS.textMuted,
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  wordCount: {
    color: COLORS.textMuted,
    fontSize: "11px",
    letterSpacing: "0.05em",
  },

  /* ── Textarea ── */
  textarea: {
    width: "100%",
    minHeight: "200px",
    background: COLORS.inputBg,
    border: `1px solid ${COLORS.inputBorder}`,
    borderRadius: "12px",
    color: COLORS.textPrimary,
    fontSize: "14px",
    lineHeight: "1.7",
    padding: "16px 28px 16px 16px",   /* extra right padding so scrollbar doesn't touch border */
    resize: "none",                   /* removes the white resize handle at bottom-right */
    scrollbarGutter: "stable",        /* reserves space so scrollbar never overlaps text */
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  },

  /* ── Summarize button ── */
  button: {
    width: "100%",
    padding: "16px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #0891b2 100%)",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: "0.06em",
    cursor: "pointer",
    fontFamily: "inherit",
    position: "relative",
    overflow: "hidden",
    transition: "opacity 0.2s, transform 0.15s",
    marginTop: "20px",
  },
  buttonDisabled: {
    opacity: 0.55,
    cursor: "not-allowed",
    transform: "none",
  },

  /* ── Loading spinner ── */
  spinnerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  },
  spinnerRing: {
    width: "18px",
    height: "18px",
    border: "2px solid rgba(255,255,255,0.25)",
    borderTopColor: "#fff",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },

  /* ── Error message ── */
  error: {
    background: COLORS.errorBg,
    border: `1px solid ${COLORS.errorBorder}`,
    borderRadius: "12px",
    padding: "14px 18px",
    color: COLORS.errorText,
    fontSize: "13px",
    lineHeight: "1.6",
    marginTop: "20px",
  },

  /* ── Result card ── */
  resultCard: {
    background: COLORS.resultBg,
    border: `1px solid ${COLORS.resultBorder}`,
    borderRadius: "20px",
    padding: "32px",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    marginBottom: "20px",
  },
  resultHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  resultTitle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: COLORS.accentCyan,
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  resultDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: COLORS.accentCyan,
    boxShadow: `0 0 6px ${COLORS.accentCyan}`,
  },
  resultText: {
    color: COLORS.textPrimary,
    fontSize: "15px",
    lineHeight: "1.8",
    margin: 0,
    whiteSpace: "pre-wrap",
  },

  /* ── Footer ── */
  footer: {
    textAlign: "center",
    color: COLORS.textMuted,
    fontSize: "12px",
    marginTop: "40px",
    letterSpacing: "0.05em",
  },
};

export default styles;
