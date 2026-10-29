"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Review = {
  quote: string;
  initials: string;
  name: string;
  detail: string;
};

function Stars() {
  return (
    <div className="stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="#c98a2b" aria-hidden="true">
          <path d="M12 2l3 7 7 .6-5.3 4.7 1.6 7.2L12 17.8 5.7 21.5l1.6-7.2L2 9.6 9 9z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [positions, setPositions] = useState(reviews.length);

  // Distance between the start of one card and the next, including the gap.
  const step = useCallback(() => {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    const second = track?.children[1] as HTMLElement | undefined;
    if (!first) return 1;
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  }, []);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const s = step();
    const perView = Math.max(1, Math.round((track.clientWidth + s - track.children[0].clientWidth) / s));
    setPositions(Math.max(1, reviews.length - perView + 1));
    setIndex(Math.round(track.scrollLeft / s));
  }, [reviews.length, step]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  function goTo(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.min(Math.max(i, 0), positions - 1);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: target * step(), behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label="Customer reviews">
      <div className="reviews" ref={trackRef} onScroll={measure} tabIndex={0}>
        {reviews.map((review, i) => (
          <article
            className="review"
            key={review.detail}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${reviews.length}`}
          >
            <Stars />
            <blockquote>{review.quote}</blockquote>
            <footer>
              <div className="avatar">{review.initials}</div>
              <div>
                <strong>{review.name}</strong>
                <span>{review.detail}</span>
              </div>
            </footer>
          </article>
        ))}
      </div>
      <div className="carousel-controls">
        <div className="carousel-dots">
          {Array.from({ length: positions }, (_, i) => (
            <button
              key={i}
              type="button"
              className={i === index ? "active" : undefined}
              aria-label={`Show review ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="carousel-arrows">
          <button type="button" aria-label="Previous reviews" disabled={index <= 0} onClick={() => goTo(index - 1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next reviews"
            disabled={index >= positions - 1}
            onClick={() => goTo(index + 1)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
