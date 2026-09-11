"use client";

import { useEffect, useState } from "react";

const NAME = "AANYA";

export default function Preloader({ onDone }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.classList.add("locked");
    let finished = false;

    function finish() {
      if (finished) return;
      finished = true;
      setDone(true);
      document.body.classList.remove("locked");
      onDone && onDone();
    }

    const minTime = new Promise((res) => setTimeout(res, 1400));
    const pageLoad = new Promise((res) => {
      if (document.readyState === "complete") res();
      else window.addEventListener("load", res, { once: true });
    });
    Promise.all([minTime, pageLoad]).then(finish);

    // Hard safety net so a stalled load event can never block the page.
    const hardTimeout = setTimeout(finish, 3500);
    return () => clearTimeout(hardTimeout);
  }, [onDone]);

  return (
    <div id="preloader" className={done ? "done" : ""} style={done ? { pointerEvents: "none" } : undefined}>
      <div className="pre-name" aria-hidden="true">
        {NAME.split("").map((ch, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.09}s` }}>
            {ch}
          </span>
        ))}
      </div>
      <div className="pre-bar" />
    </div>
  );
}
