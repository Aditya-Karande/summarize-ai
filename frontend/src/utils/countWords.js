// ─────────────────────────────────────────────
//  UTILS — small reusable helper functions
// ─────────────────────────────────────────────

// Returns the number of words in a string
// Returns 0 for empty / whitespace-only strings
export function countWords(text) {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}
