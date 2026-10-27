import { useEffect, useState } from "react";

/**
 * Whole-site visitor total from GoatCounter's public counter JSON.
 * Reads /counter/TOTAL.json only. It never calls /count, so it does not
 * record a visit from localhost, previews, or the live site. Renders
 * nothing when the request fails or the payload is unusable.
 * https://www.goatcounter.com/help/visitor-counter
 */
const COUNTER_URL = "https://tirdytree.goatcounter.com/counter/TOTAL.json";

const IVORY = "#F4F4F1";
const CARBON = "#121212";
const CINNABAR = "#D93A26";

// GoatCounter formats `count` with the site's thousands separator.
// The default is a narrow no-break space (U+202F); settings also allow
// comma, dot, apostrophe, no-break space, or no separator.
const COUNT_PATTERN = /^(?:\d{1,3}(?:(?:,|\.|'|\u00a0|\u202f)\d{3})+|\d{1,15})$/;

function displayCount(value) {
  if (typeof value !== "string") return null;
  const count = value.trim();
  if (!COUNT_PATTERN.test(count)) return null;
  return count;
}

export default function VisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    fetch(COUNTER_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("counter unavailable");
        return response.json();
      })
      .then((data) => {
        const next = displayCount(data?.count);
        if (active && next) setCount(next);
      })
      .catch(() => {});

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  if (!count) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-3 right-3 z-30 select-none border-l-2 px-1.5 py-0.5 font-mono text-[9px] tracking-widest"
      style={{ background: CARBON, color: IVORY, borderLeftColor: CINNABAR }}
      role="status"
      aria-live="polite"
      aria-label={`${count} visitors`}
    >
      VISITORS {count}
    </div>
  );
}
