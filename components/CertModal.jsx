"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function CertModal({ cert, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div id="cert-modal" className={cert ? "open" : ""} onClick={(e) => e.target.id === "cert-modal" && onClose()}>
      {cert && (
        <div className="modal-box">
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
          <Image
            className="modal-img"
            src={cert.img}
            alt={cert.title}
            width={800}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
          <h3>{cert.title}</h3>
          <p>{cert.issuer}</p>
        </div>
      )}
    </div>
  );
}
