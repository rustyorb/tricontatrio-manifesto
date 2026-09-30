import React, { useEffect, useMemo, useRef, useState } from "react";
import { Image } from "@/components/ui/image";

/* ============================================================
   TRICONTATRIO — a dense cartography of the number 33
   One-page static explainer. Numerical Brutalism.
   ============================================================ */

const IVORY = "#F4F4F1";
const CARBON = "#121212";
const CINNABAR = "#D93A26";
const METRIC = "#6B6B6B";

/* Coordinate tag — every factoid is mapped [33:XX] */
const Coord = ({ n, children }) => (
  <div className="group relative border border-carbon/15 bg-card transition-colors hover:border-carbon/40 focus-within:border-cinnabar">
    <span
      className="absolute -top-px -left-px bg-carbon px-1.5 py-0.5 font-mono text-[9px] tracking-widest text-ivory"
      style={{ background: CARBON, color: IVORY }}
    >
      [33:{String(n).padStart(2, "0")}]
    </span>
    <div className="pt-6 px-3 pb-3">{children}</div>
  </div>
);

const K = ({ children }) => (
  <span
    className="font-mono font-semibold"
    style={{ color: CINNABAR }}
  >
    {children}
  </span>
);

const SectionLabel = ({ index, title, sub }) => (
  <div className="flex items-baseline gap-4 mb-6 border-t border-carbon/20 pt-4">
    <span
      className="font-mono text-xs tracking-[0.3em]"
      style={{ color: METRIC }}
    >
      §{index}
    </span>
    <h2
      className="font-heading text-2xl md:text-4xl tracking-tight"
      style={{ color: CARBON }}
    >
      {title}
    </h2>
    <span
      className="hidden md:inline ml-auto font-mono text-[10px] uppercase tracking-widest"
      style={{ color: METRIC }}
    >
      {sub}
    </span>
  </div>
);

/* ---------- Hero ---------- */
function Hero({ heroUrl }) {
  const ref = useRef(null);
  const [rot, setRot] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setRot(Math.floor(y / 33));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    ["#math", "Mathematical"],
    ["#cubes", "Three Cubes"],
    ["#biology", "Biological"],
    ["#chemistry", "Chemical"],
    ["#cosmos", "Cosmological"],
    ["#culture", "Cultural"],
    ["#newton", "Newton Scale"],
  ];

  return (
    <header className="relative min-h-screen overflow-hidden" style={{ background: IVORY }}>
      {/* ghosted formula overlay */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04] select-none"
        aria-hidden
      >
        <span className="font-mono text-[14vw] leading-none" style={{ color: CARBON }}>
          x³+y³+z³=33
        </span>
      </div>

      {/* vertebral hairline */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px"
        style={{ background: CARBON, opacity: 0.12 }}
        aria-hidden
      />

      {/* hero crystal */}
      <div className="pointer-events-none absolute right-4 bottom-4 w-40 md:w-64 opacity-90 hidden sm:block">
        <Image src={heroUrl} alt="Crystalline 33-fold structure" fittingType="fill" className="w-full h-full aspect-[3/2]" />
      </div>

      {/* periodic-table style nav */}
      <nav className="relative z-10 flex flex-wrap items-center gap-1 px-4 pt-5 md:px-8">
        {nav.map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="border border-carbon/20 px-2 py-1 font-mono text-[10px] uppercase tracking-widest transition-colors hover:bg-carbon hover:text-ivory"
            style={{ color: CARBON }}
          >
            {label}
          </a>
        ))}
        <span
          className="ml-auto font-mono text-[10px] tracking-widest"
          style={{ color: METRIC }}
        >
          ATOMIC·Z=33 · SEMIPRIME · REPDIGIT
        </span>
      </nav>

      <div ref={ref} className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div
          className="font-mono text-[10px] tracking-[0.4em] mb-4"
          style={{ color: METRIC }}
        >
          THE TRICONTATRIO MANIFESTO
        </div>
        <div
          className="font-heading leading-none select-none"
          style={{
            fontSize: "clamp(180px, 42vw, 620px)",
            color: CARBON,
            transform: `rotate(${rot}deg)`,
            transformOrigin: "center",
            transition: "transform 0.1s linear",
            fontWeight: 300,
          }}
        >
          33
        </div>
        <p
          className="mt-6 max-w-xl text-center font-mono text-xs md:text-sm"
          style={{ color: METRIC, lineHeight: 1.6 }}
        >
          A gravitational anchor organizing a chaotic universe of physical,
          mathematical, and cultural phenomena into a single, breathtakingly
          dense visual system. Scroll to descend the spine.
        </p>
        <div
          className="mt-8 font-mono text-[10px] tracking-widest animate-pulse"
          style={{ color: CINNABAR }}
        >
          ↓ 33 NODES BELOW
        </div>
      </div>
    </header>
  );
}

/* ---------- Mathematics grid ---------- */
function Mathematics() {
  const facts = [
    { n: 1, t: "Composite", b: <>33 = <K>3 × 11</K>. The product of two primes; the third semiprime of form 3p.</> },
    { n: 2, t: "Repdigit", b: <>A two-digit repdigit: both numerals identical. The largest repdigit divisible by 11.</> },
    { n: 3, t: "Palindromic", b: <>Reads identically in base-10 and base-2 (<K>100001</K>). A binary palindrome.</> },
    { n: 4, t: "Triangular? No.", b: <>Not triangular (T₇=28, T₈=36). But 33 is the sum of the first four factorials: <K>1!+2!+3!+4! = 33</K>.</> },
    { n: 5, t: "Digit sum", b: <>3+3 = 6, the first perfect number. The product 3×3 = 9, the largest single digit.</> },
    { n: 6, t: " aliquot sum", b: <>σ⁻¹(33) = 1+3+11 = 15. Deficient: 15 &lt; 33. Its abundance is −18.</> },
    { n: 7, t: "Totient", b: <>Euler φ(33) = 20. There are 20 integers below 33 coprime to it.</> },
    { n: 8, t: "Möbius", b: <>μ(33) = +1 (square-free, even number of prime factors). Notably non-zero.</> },
    { n: 9, t: "Catalan-ish", b: <>33 is not a Catalan number, but C₇ = 429 and 3+3=6 sits between C₂=2 and C₃=5.</> },
    { n: 10, t: "Happy number", b: <>33 → 3²+3²=18 → 65 → 61 → 37 → 58 → 89 → loop. 33 is <K>not</K> a happy number.</> },
    { n: 11, t: "Harshad", b: <>33 ÷ (3+3) = 5.5 — not an integer. 33 is <K>not</K> a Harshad number in base 10.</> },
    { n: 12, t: "Fibonacci gap", b: <>Fib(8)=21, Fib(9)=34. 33 sits in the gap, = 34−1 = Fib(9)−1.</> },
  ];

  return (
    <section id="math" className="px-4 md:px-8 py-16" style={{ background: IVORY }}>
      <SectionLabel index="01" title="Mathematical Oddities" sub="PURE NUMBER THEORY" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {facts.map((f) => (
          <Coord key={f.n} n={f.n}>
            <div className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: METRIC }}>
              {f.t}
            </div>
            <p className="text-sm" style={{ color: CARBON, lineHeight: 1.6 }}>{f.b}</p>
          </Coord>
        ))}
      </div>
    </section>
  );
}

/* ---------- Sum of Three Cubes ---------- */
function ThreeCubes() {
  const eq = "8866128975287528³ + (−8778405442862239)³ + (−2736111468807040)³ = 33";
  return (
    <section id="cubes" className="px-4 md:px-8 py-16 border-y border-carbon/20" style={{ background: IVORY }}>
      <SectionLabel index="02" title="Sum of Three Cubes — k = 33" sub="2019 BREAKTHROUGH · BOOKER" />
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <p className="text-sm mb-4" style={{ color: CARBON, lineHeight: 1.6, maxWidth: "70ch" }}>
            For 64 years, 33 was the smallest positive integer whose representation as a
            sum of three integer cubes was unknown. In March 2019, Andrew Booker found
            the first solution via a cluster search on the Charity Engine — a 21-digit
            identity that had eluded every prior sieve.
          </p>
          <div
            className="font-mono leading-relaxed break-all p-4 border border-carbon/20"
            style={{ color: CARBON, background: "#ECECE7", fontSize: "clamp(8px, 1.4vw, 13px)" }}
          >
            {eq}
          </div>
          <p className="mt-3 font-mono text-[10px]" style={{ color: METRIC }}>
            Each term ≈ 8.86 × 10¹⁵ — a number larger than the count of red blood cells in a human body.
          </p>
        </div>
        <div className="space-y-2">
          {[
            ["Status (pre-2019)", "Open / unsolved"],
            ["Solver", "Andrew Booker"],
            ["Compute", "Charity Engine grid"],
            ["Years open", "≈ 64"],
            ["k still open", "42 (solved later, 2019)"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-carbon/15 pb-1">
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: METRIC }}>{k}</span>
              <span className="font-mono text-xs" style={{ color: CARBON }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Biology / Vertebral stack ---------- */
function Biology({ spineUrl }) {
  const [active, setActive] = useState(null);
  const vertebrae = useMemo(() => {
    const groups = [
      ["C", 7, "Cervical"],
      ["T", 12, "Thoracic"],
      ["L", 5, "Lumbar"],
      ["S", 5, "Sacral (fused)"],
      ["Co", 4, "Coccygeal (fused)"],
    ];
    const rows = [];
    let idx = 1;
    groups.forEach(([p, c, name]) => {
      for (let i = 1; i <= c; i++) {
        rows.push({ n: idx++, label: `${p}${i}`, group: name });
      }
    });
    return rows; // 33 total
  }, []);

  return (
    <section id="biology" className="px-4 md:px-8 py-16" style={{ background: IVORY }}>
      <SectionLabel index="03" title="The Vertebral Data-Stack" sub="33 BONES · HUMAN SPINE" />
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2 md:sticky md:top-8 self-start">
          <div className="aspect-[2/3] w-full overflow-hidden border border-carbon/20">
            <Image src={spineUrl} alt="Human vertebral spine render" fittingType="fit" className="w-full h-full" />
          </div>
          <p className="mt-3 font-mono text-[10px]" style={{ color: METRIC }}>
            7 cervical + 12 thoracic + 5 lumbar + 5 sacral + 4 coccygeal = <K>33</K> vertebrae at birth.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {vertebrae.map((v, i) => (
              <button
                key={v.label}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                className="flex items-center justify-between text-left px-2 py-1.5 border border-carbon/10 transition-colors"
                style={{
                  background: active === i ? CARBON : "transparent",
                  color: active === i ? IVORY : CARBON,
                }}
              >
                <span className="font-mono text-[10px] tracking-widest" style={{ color: active === i ? IVORY : METRIC }}>
                  {String(v.n).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs">{v.label}</span>
                <span className="font-mono text-[9px] uppercase tracking-widest truncate ml-2" style={{ color: active === i ? IVORY : METRIC }}>
                  {v.group}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Chemistry ---------- */
function Chemistry({ arsenicUrl }) {
  return (
    <section id="chemistry" className="px-4 md:px-8 py-16 border-y border-carbon/20" style={{ background: IVORY }}>
      <SectionLabel index="04" title="Arsenic — Element 33" sub="ATOMIC NUMBER Z = 33" />
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="aspect-square w-full overflow-hidden border border-carbon/20">
          <Image src={arsenicUrl} alt="Arsenic crystalline lattice" fittingType="fill" className="w-full h-full" />
        </div>
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            ["Symbol", "As"],
            ["Atomic mass", "74.9216 u"],
            ["Group", "15 (Pnictogen)"],
            ["Period", "4"],
            ["Block", "p-block"],
            ["Electron config", "[Ar] 3d¹⁰ 4s² 4p³"],
            ["Phase (STP)", "Solid (metaloid)"],
            ["Sublimation", "614 °C"],
            ["Crystal", "Rhombohedral"],
            ["Discovered", "1250 (Albertus Magnus)"],
            ["Isotopes", ">30 known"],
            ["Density", "5.776 g/cm³"],
          ].map(([k, v]) => (
            <div key={k} className="border border-carbon/15 p-2">
              <div className="font-mono text-[9px] uppercase tracking-widest" style={{ color: METRIC }}>{k}</div>
              <div className="font-mono text-sm" style={{ color: CARBON }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Cosmology / Physics ---------- */
function Cosmos() {
  const rows = [
    ["33", "Years of the Solar cycle overlap — three Schwabe cycles ≈ 33 years."],
    ["33", "Days: the sidereal rotation period of the Sun at its equator ≈ 25.4 days; at 60° latitude ≈ 33 days."],
    ["33°", "The approximate tilt at which some exoplanet systems exhibit spin–orbit resonance chaos."],
    ["33", "Divisor of 99, the number of names of Allah in Islamic tradition — 33 × 3."],
    ["33.3%", "One-third — 33⅓ rpm, the vinyl LP rotation standard introduced by Columbia in 1948."],
    ["33", "Speed of sound: 33 m/s is roughly the lower bound of infrasonic elephant communication."],
    ["33", "The escape velocity ratio (km/s) of no known body — but 33 km/s ≈ Earth's orbital speed (29.8) + margin."],
    ["33", "A Newton-degree: 33 °N is defined as the boiling point of water on the Newton temperature scale."],
  ];
  return (
    <section id="cosmos" className="px-4 md:px-8 py-16" style={{ background: IVORY }}>
      <SectionLabel index="05" title="Cosmological & Physical Coincidences" sub="SCALE · CYCLE · CONSTANT" />
      <div className="grid md:grid-cols-2 gap-2">
        {rows.map(([k, v], i) => (
          <div key={i} className="flex gap-3 border-b border-carbon/15 py-2">
            <span className="font-mono text-2xl" style={{ color: CINNABAR, minWidth: "3ch" }}>{k}</span>
            <span className="text-sm" style={{ color: CARBON, lineHeight: 1.6, maxWidth: "60ch" }}>{v}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Culture ---------- */
function Culture() {
  return (
    <section id="culture" className="px-4 md:px-8 py-16 border-y border-carbon/20" style={{ background: IVORY }}>
      <SectionLabel index="06" title="Cultural Resonance" sub="SYMBOL · RITUAL · INDEX" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          ["Dante", "33 cantos in each canticle of the Divine Comedy; 33 = the age of Christ at death."],
          ["Freemasonry", "33 degrees of the Scottish Rite — the highest honorary grade."],
          ["Buddhism", "33 heavens (Trāyastriṃśa) — the second of the six desire realms."],
          ["Islam", "99 names of God = 33 × 3; prayer beads cycle in sets of 33."],
          ["Vedic", "33 Vedic deities (trayastrimśat) named in the Rigveda."],
          ["Sports", "Retired across leagues — Kareem, Pippen, Bird (Larry), Hill — 33 carries weight."],
          ["Aviation", "Flight 33 motifs recur in folklore; the Concorde cruised at Mach ~2.0 ≈ 33° sweep wing."],
          ["Pascal", "Row 33 of Pascal's triangle sums to 2³² = 4,294,967,296."],
        ].map(([t, b], i) => (
          <Coord key={t} n={i + 21}>
            <div className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: METRIC }}>{t}</div>
            <p className="text-xs" style={{ color: CARBON, lineHeight: 1.6 }}>{b}</p>
          </Coord>
        ))}
      </div>
    </section>
  );
}

/* ---------- Newton Scale converter ---------- */
function NewtonScale() {
  // Newton scale: T_N = (T_C × 33) / 100. Boiling water = 33 °N.
  const [newton, setNewton] = useState(33);
  const celsius = (newton * 100) / 33;
  const fahrenheit = celsius * 9 / 5 + 32;
  const kelvin = celsius + 273.15;

  // thermal hue shift on the ivory background
  const hue = useMemo(() => {
    // 0 °N → cool, 33 °N → warm cinnabar tint
    const t = Math.max(0, Math.min(1, newton / 33));
    return `hsl(${30 - t * 14}, ${10 + t * 35}%, ${96 - t * 4}%)`;
  }, [newton]);

  return (
    <section id="newton" className="px-4 md:px-8 py-16" style={{ background: hue, transition: "background 0.3s" }}>
      <SectionLabel index="07" title="The Newton Scale" sub="33 °N = BOILING WATER" />
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm mb-4" style={{ color: CARBON, lineHeight: 1.6, maxWidth: "65ch" }}>
            In 1701, Isaac Newton defined a temperature scale where water freezes at 0 °N
            and boils at <K>33 °N</K>. Drag the slider to feel the thermal shift — the entire
            field below re-tints with the heat.
          </p>
          <input
            type="range"
            min={0}
            max={33}
            value={newton}
            onChange={(e) => setNewton(Number(e.target.value))}
            className="w-full accent-cinnabar"
            style={{ accentColor: CINNABAR }}
            aria-label="Newton degrees"
          />
          <div className="flex justify-between font-mono text-[10px] mt-1" style={{ color: METRIC }}>
            <span>0 °N · FREEZE</span>
            <span>33 °N · BOIL</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["Newton", `${newton.toFixed(2)} °N`],
            ["Celsius", `${celsius.toFixed(2)} °C`],
            ["Fahrenheit", `${fahrenheit.toFixed(2)} °F`],
            ["Kelvin", `${kelvin.toFixed(2)} K`],
          ].map(([k, v]) => (
            <div key={k} className="border border-carbon/20 p-3" style={{ background: IVORY }}>
              <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: METRIC }}>{k}</div>
              <div className="font-mono text-xl" style={{ color: CARBON }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="px-4 md:px-8 py-10 border-t border-carbon/20" style={{ background: IVORY }}>
      <div className="flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px]" style={{ color: METRIC }}>
        <span>TRICONTATRIO · A CARTOGRAPHY OF 33 · STATIC EXPLAINER</span>
        <span>33 NODES · 7 SECTIONS · 1 NUMBER</span>
        <span style={{ color: CINNABAR }}>END OF SPINE</span>
      </div>
    </footer>
  );
}

export default function Home() {
  const heroUrl = "https://media.base44.com/images/public/6abc59840053192e0e25bfb3/3b90f61b5_generated_555f7b58.jpg";
  const spineUrl = "https://media.base44.com/images/public/6abc59840053192e0e25bfb3/9e1ba35a0_generated_8017ab52.jpg";
  const arsenicUrl = "https://media.base44.com/images/public/6abc59840053192e0e25bfb3/daf29116f_generated_74e0e426.png";

  return (
    <main className="font-body" style={{ color: CARBON }}>
      <Hero heroUrl={heroUrl} />
      <Mathematics />
      <ThreeCubes />
      <Biology spineUrl={spineUrl} />
      <Chemistry arsenicUrl={arsenicUrl} />
      <Cosmos />
      <Culture />
      <NewtonScale />
      <Footer />
    </main>
  );
}