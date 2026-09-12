"use client";

import { CERTS } from "./Certificates";

export default function CertMarquee({ onSelect }) {
  const loopItems = [...CERTS, ...CERTS];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {loopItems.map((c, i) => (
          <button
            className="marquee-item"
            key={`${c.img}-${i}`}
            onClick={() => onSelect(c)}
            aria-label={`View certificate: ${c.title}`}
          >
            <img src={c.img} alt={c.title} loading="lazy" />
            <div className="marquee-caption">
              <h4>{c.cardTitle}</h4>
              <span>{c.cardIssuer}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
