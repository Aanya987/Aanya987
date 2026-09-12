"use client";

import { useEffect, useRef, useState } from "react";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CertModal from "@/components/CertModal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeCert, setActiveCert] = useState(null);

  // Reveal-on-scroll: observe every element with the .reveal class.
  const observerRef = useRef(null);
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current && observerRef.current.disconnect();
  }, [loading]);

  return (
    <>
      <Preloader onDone={() => setLoading(false)} />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates onSelect={setActiveCert} />
      <Contact />
      <Footer />
      <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </>
  );
}
