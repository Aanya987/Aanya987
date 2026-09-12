"use client";

import { CERTS } from "./Certificates";

export default function CertMarquee() {
  const loopItems = [...CERTS, ...CERTS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loopItems.map((c, i) => (
          <div className="marquee-item" key={`${c.img}-${i}`}>
            <img src={c.img} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
