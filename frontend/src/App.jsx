// ─────────────────────────────────────────────
//  APP.JSX — root component
//  Just wires components + hook together.
//  No business logic or styles live here.
// ─────────────────────────────────────────────

import { useState } from "react";

import Header     from "./components/Header";
import InputCard  from "./components/InputCard";
import ResultCard from "./components/ResultCard";
import Footer     from "./components/Footer";

import { useSummarize } from "./hooks/useSummarize";
import { countWords }   from "./utils/countWords";
import styles           from "./styles/styles";
import COLORS           from "./styles/colors";

export default function App() {
  const [inputText, setInputText] = useState("");

  // All API logic lives inside this custom hook
  const { summary, isLoading, error, summarize } = useSummarize();

  return (
    <div style={styles.page}>

      {/* Global CSS — fonts, keyframes, reset, focus styles, button shimmer */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=Barlow+Condensed:wght@700;800&display=swap');

        /* ── Reset — kills Vite's default body/root box styles ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root {
          width: 100%;
          min-height: 100vh;
          background-color: #080b14;
          overflow-x: hidden;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        textarea:focus {
          border-color: ${COLORS.inputFocusBorder} !important;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
        }

        /* ── Custom scrollbar — blends with dark background ── */
        textarea::-webkit-scrollbar {
          width: 10px;
        }
        textarea::-webkit-scrollbar-track {
          background: transparent;
          margin: 6px;                /* top/bottom breathing room */
        }
        textarea::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 99px;
          border: 3px solid transparent;          /* creates gap from right edge */
          background-clip: padding-box;
        }
        textarea::-webkit-scrollbar-thumb:hover {
          background: rgba(124, 58, 237, 0.5);
          background-clip: padding-box;
        }

        .summarize-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .summarize-btn:hover::after {
          transform: translateX(100%);
        }
      `}</style>

      {/* Background decorative blobs */}
      <div style={styles.blobPurple} />
      <div style={styles.blobCyan} />

      {/* Centered content column */}
      <div style={styles.container}>
        <Header />

        <InputCard
          inputText={inputText}
          setInputText={setInputText}
          onSummarize={() => summarize(inputText)}
          isLoading={isLoading}
          error={error}
          wordCount={countWords(inputText)}
        />

        <ResultCard
          summary={summary}
          wordCount={countWords(summary)}
        />

        <Footer />
      </div>
    </div>
  );
}
