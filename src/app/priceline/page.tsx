import Link from "next/link";
import GradientBackground from "@/components/GradientBackground";
import BackToTop from "@/components/BackToTop";
import MobileNav from "@/components/MobileNav";

const imgHero     = "/images/pl-hero.png";
const imgStrategy = "/images/pl-strategy.png";
const imgScreen1  = "/images/pl-screen1.png";
const imgScreen2  = "/images/pl-screen2.png";
const imgScreen3  = "/images/pl-screen3.png";
const imgScreen4  = "/images/pl-screen4.png";

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between relative">
        <Link href="/" className="py-4">
          <span className="text-2xl font-extrabold text-[#010101]" style={{ fontFamily: "var(--font-bricolage)" }}>Peter </span>
          <span className="text-2xl font-extrabold gradient-warm" style={{ fontFamily: "var(--font-bricolage)" }}>Lee</span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          {[
            { label: "Work", id: "work" },
            { label: "About", id: "about" },
            { label: "How I Operate", id: "how-i-operate" },
          ].map(({ label, id }) => (
            <Link key={id} href={`/#${id}`}
              className="px-4 py-3 text-[#6b7280] text-base tracking-wide hover:text-[#010101] transition-colors"
              style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
              {label}
            </Link>
          ))}
          <Link href="/#contact"
            className="ml-2 px-6 py-3 bg-black text-white rounded-full text-base tracking-wide hover:bg-[#7c5cff] transition-colors"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 600 }}>
            Contact
          </Link>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}

const warmGradient = "linear-gradient(90deg, #7c5cff 19.231%, #ff6b9a 57.212%, #ffb070 87.019%)";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px w-8" style={{ background: warmGradient }} />
      <span className="text-[#7c5cff] text-sm tracking-[2px] whitespace-nowrap"
        style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>
        {children}
      </span>
    </div>
  );
}

function NumberedItem({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-8 items-start">
      <span className="text-[#7c5cff] text-2xl shrink-0 w-14"
        style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 800 }}>{n}</span>
      <div className="text-[#6a6a6a] text-lg leading-7 max-w-[780px]"
        style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>{children}</div>
    </div>
  );
}

function StatCard({ value, label, gradient }: { value: string; label: string; gradient: string }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[200px] max-w-[284px] h-[260px] flex flex-col items-center justify-center gap-2 p-6 text-center"
      style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
      <span className={`text-[4.5rem] font-bold leading-none ${gradient}`}
        style={{ fontFamily: "var(--font-bricolage)" }}>{value}</span>
      <span className="text-[#6b7280] text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>{label}</span>
    </div>
  );
}

function ImpactCard({ value, label, gradient }: { value: string; label: string; gradient: string }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[200px] max-w-[284px] min-h-[284px] flex flex-col items-center justify-center gap-3 p-6 text-center"
      style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
      <span className={`text-[4.5rem] font-bold leading-none ${gradient}`}
        style={{ fontFamily: "var(--font-bricolage)" }}>{value}</span>
      <span className="text-[#6b7280] text-lg leading-6" style={{ fontFamily: "var(--font-jakarta)" }}>{label}</span>
    </div>
  );
}

function SolutionCard({ title, accent, accentColor, bullets }: {
  title: string; accent: string; accentColor: string; bullets: string[]
}) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[260px] max-w-[286px] p-6 flex flex-col gap-3"
      style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
      <p className="text-[#010101] text-2xl font-bold" style={{ fontFamily: "var(--font-bricolage)" }}>{title}</p>
      <span className="text-lg font-extrabold" style={{ fontFamily: "var(--font-jetbrains)", color: accentColor }}>{accent}</span>
      <ul className="list-disc pl-6 text-[#6b7280] text-lg leading-7 space-y-1"
        style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
        {bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </div>
  );
}

export default function Priceline() {
  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      <GradientBackground />

      <Nav />

      <main className="flex flex-col items-center gap-36 px-8 pb-0">
        {/* Hero */}
        <section className="w-full max-w-[1200px] pt-10 flex flex-col gap-16">
          <div className="flex flex-col gap-[70px]">
            <Link href="/#work" className="inline-flex items-center gap-2 text-[#6b7280] text-base hover:text-[#7c5cff] transition-colors group"
              style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="transition-transform group-hover:-translate-x-1 duration-200">
                <path d="M11 14L6 9L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Work
            </Link>
            {/* Hero image */}
            <div className="w-full rounded-[10px] md:rounded-[30px] overflow-hidden" style={{ aspectRatio: "1200/2364" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgHero} alt="Priceline redesign" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Eyebrow + headline */}
          <div className="flex flex-col gap-7">
            <span className="text-[#7c5cff] text-lg tracking-[2px]"
              style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>
              CASE STUDY / PRICELINE · B2C · GROWTH · CONVERSION · SCALE
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
              style={{ fontFamily: "var(--font-bricolage)" }}>
              {`Redesign `}
              <span className="gradient-warm">desktop and mobile web </span>
              e-commerce products
            </h1>
            <p className="text-[#6a6a6a] text-xl leading-7 max-w-[900px] tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}>
              {`A full-platform UX/UI transformation of one of the world's largest travel booking sites - from legacy debt to a modern, conversion-driven experience.`}
            </p>
          </div>

          {/* Impact stat cards */}
          <div className="flex flex-wrap gap-4">
            <StatCard value="+2.9 pts" label="Checkout conversion (2% → 4.9%)" gradient="gradient-warm" />
            <StatCard value="NPS 41" label="+6 post-redesign" gradient="gradient-cool" />
            <StatCard value="+20 pts" label="Authenticated sessions via VIP sign-in" gradient="gradient-warm-reverse" />
            <StatCard value="VIP" label="Loyalty concept still live in production" gradient="gradient-cool" />
          </div>

          {/* Project details */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[240px] max-w-[320px] px-6 pb-6 flex flex-col gap-1">
              <span className="text-xl font-bold text-[#010101]" style={{ fontFamily: "var(--font-jakarta)" }}>COMPANY</span>
              <span className="text-xl text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Priceline</span>
            </div>
            <div className="flex-1 min-w-[240px] max-w-[320px] px-6 pb-6 flex flex-col gap-1">
              <span className="text-xl font-bold text-[#010101]" style={{ fontFamily: "var(--font-jakarta)" }}>ROLE</span>
              <span className="text-xl text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>UX/UI Creative Director</span>
            </div>
            <div className="flex-1 min-w-[240px] max-w-[320px] px-6 pb-6 flex flex-col gap-1">
              <span className="text-xl font-bold text-[#010101]" style={{ fontFamily: "var(--font-jakarta)" }}>TEAM</span>
              <ul className="list-disc pl-5 text-xl text-[#6a6a6a] space-y-0" style={{ fontFamily: "var(--font-jakarta)" }}>
                <li>7 UX/UI Designers</li>
                <li>12 Engineers</li>
                <li>5 Product managers</li>
              </ul>
            </div>
            <div className="flex-1 min-w-[240px] max-w-[320px] px-6 pb-6 flex flex-col gap-1">
              <span className="text-xl font-bold text-[#010101]" style={{ fontFamily: "var(--font-jakarta)" }}>TIMELINE</span>
              <ul className="list-disc pl-5 text-xl text-[#6a6a6a] space-y-0" style={{ fontFamily: "var(--font-jakarta)" }}>
                <li>Overall: 10 months</li>
                <li>{`Discovery & Research: 7+ weeks`}</li>
                <li>{`Design & testing: 23 weeks`}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Context & Problem */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>CONTEXT &amp; PROBLEM</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            {`Priceline had accrued years of design and tech debt - `}
            <span className="gradient-warm">directly impacting conversion and trust.</span>
          </h2>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Dated look &amp; feel</span>
              {` - Priceline's UI hadn't kept pace with modern travel platforms, visual inconsistency across pages fractured the experience and eroded user confidence`}
            </NumberedItem>
            <NumberedItem n="02">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Confusing deal structure</span>
              {` - Express Deals, NYOP, Hot Rates, and Tonight Only Deals created decision paralysis: users couldn't identify which deal gave the best price`}
            </NumberedItem>
            <NumberedItem n="03">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Suboptimal conversion &amp; NPS</span>
              {` - Checkout was the highest abandonment stage: a fragmented, high-friction flow that no landing-page polish could compensate for`}
            </NumberedItem>
          </div>
          <p className="text-[#7c5cff] text-2xl font-bold max-w-[780px] leading-normal"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            The platform needed more than a visual refresh. It needed a structural rethink of how deals were presented, how trust was earned, and how checkout friction was removed.
          </p>
        </section>

        {/* Role & Leadership */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>ROLE &amp; LEADERSHIP</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Creative direction, end-to-end ownership,<br />
            {`and `}<span className="gradient-cool">measurable outcomes</span>
          </h2>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Creative Direction</span>
              {` - Owned all design decisions across desktop: set the visual and interaction direction for the entire platform redesign`}
            </NumberedItem>
            <NumberedItem n="02">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Design System</span>
              {` - Built the unified component library: type, color, spacing, and patterns used across every redesigned surface to enforce consistency at scale`}
            </NumberedItem>
            <NumberedItem n="03">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>UX Research</span>
              {` - Led usability testing and 10 user interviews; surfaced deal-type confusion that shaped the core product strategy and testable solutions`}
            </NumberedItem>
            <NumberedItem n="04">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>A/B Testing</span>
              {` - Led research and design partnership on Hotels conversion, driving the baseline from 2% to a 4.9% rate through funnel optimization`}
            </NumberedItem>
            <NumberedItem n="05">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>VIP Loyalty</span>
              {` - Led design workshops with Product and Engineering on a loyalty sign-in concept, still live in production today, driving account creation`}
            </NumberedItem>
          </div>
        </section>

        {/* Insight & Research */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>INSIGHT &amp; RESEARCH</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            {`The real problem wasn't the UI - it was `}
            <span className="gradient-warm">decision paralysis</span>
          </h2>
          <p className="text-[#7c5cff] text-2xl font-bold max-w-[780px] leading-normal"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            {`Users didn't want to understand deal types. They wanted one trustworthy answer: what's the cheapest option right now?`}
          </p>
          <div className="flex flex-wrap gap-6 pt-2">
            {/* Insight card 1 */}
            <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[220px] max-w-[286px] p-6 flex flex-col gap-3"
              style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
              <p className="text-[#010101] text-2xl font-bold" style={{ fontFamily: "var(--font-bricolage)" }}>Deal Confusion &amp; Decision Paralysis</p>
              <span className="text-lg font-extrabold text-[#7c5cff]" style={{ fontFamily: "var(--font-jetbrains)" }}>INSIGHT #1</span>
              <ul className="list-disc pl-5 text-[#6b7280] text-lg leading-7 space-y-1 flex-1"
                style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
                <li>Users struggled to distinguish between NYOP vs Express Deals vs Hot Rates vs Tonight Only Deals.</li>
                <li>Different rules (bidding vs hidden vs fixed prices) created friction.</li>
                <li>Too many deal types = slower decisions + drop-off.</li>
              </ul>
            </div>
            {/* Insight card 2 */}
            <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[220px] max-w-[286px] p-6 flex flex-col gap-3"
              style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
              <p className="text-[#010101] text-2xl font-bold" style={{ fontFamily: "var(--font-bricolage)" }}>{`Best Price: That's What Users Cared About`}</p>
              <span className="text-lg font-extrabold text-[#ff6b9a]" style={{ fontFamily: "var(--font-jetbrains)" }}>INSIGHT #2</span>
              <p className="text-[#6b7280] text-lg leading-7 flex-1"
                style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
                {`Best price. Not deal types. Users wanted a simple, trustworthy answer to one question: what's the cheapest right now?`}
              </p>
            </div>
            {/* Insight card 3 */}
            <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[220px] max-w-[286px] p-6 flex flex-col gap-3"
              style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
              <p className="text-[#010101] text-2xl font-bold" style={{ fontFamily: "var(--font-bricolage)" }}>No Loyalty Motivation for Frequent Travelers</p>
              <span className="text-lg font-extrabold text-[#7c5cff]" style={{ fontFamily: "var(--font-jetbrains)" }}>INSIGHT #3</span>
              <p className="text-[#6b7280] text-lg leading-7 flex-1"
                style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
                {`Frequent customers wanted to be rewarded for their loyalty. They needed a compelling sign-in benefit, beyond just "My Trips."`}
              </p>
            </div>
          </div>
        </section>

        {/* Strategy & Approach */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>STRATEGY &amp; APPROACH</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            {`Three parallel phases, `}
            <span className="gradient-cool">one unified direction</span>
          </h2>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Modernize</span>
              {` - Build a unified design system from scratch; ship a consistent, contemporary UI across all desktop surfaces before touching product logic`}
            </NumberedItem>
            <NumberedItem n="02">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Clarify</span>
              {` - Run "How Might We" workshops with stakeholders; test three strategic concepts (VIP Loyalty Sign-In, Best Value Pick, Best-Price Guarantee) to resolve deal confusion`}
            </NumberedItem>
            <NumberedItem n="03">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Convert</span>
              {` - Conduct funnel analysis, identify the 28% checkout drop-off as the highest-leverage intervention, redesign the full purchase flow, and A/B test iteratively`}
            </NumberedItem>
            <NumberedItem n="04">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Measure</span>
              {` - Define success metrics upfront: conversion rate, NPS, and design consistency, and validate every decision against those targets before shipping`}
            </NumberedItem>
          </div>
          {/* Strategy diagram */}
          <div className="w-full rounded-[20px] overflow-hidden border border-[#a3a3a3]" style={{ aspectRatio: "1200/865" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgStrategy} alt="Strategy diagram" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Decisions & Constraints */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>DECISIONS &amp; CONSTRAINTS</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            The choices that defined the outcome,{" "}
            <span className="gradient-cool">and the ones we had to fight for</span>
          </h2>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Deal simplification was off the table</span>
              {`: The business couldn't remove deal types (revenue risk). We reframed the constraint: instead of simplifying the catalog, we surfaced one algorithmically-selected "Best Value" recommendation. Users got clarity; business kept its deal structure intact.`}
            </NumberedItem>
            <NumberedItem n="02">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Mobile parity deferred</span>
              {`: Timeline and resource constraints meant desktop shipped first. We accepted a temporary gap on mobile but mitigated it by building the design system for portability from day one: mobile implementation took 60% less time because of it.`}
            </NumberedItem>
            <NumberedItem n="03">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Three concepts validated before engineering started</span>
              {`: VIP Loyalty Sign-In, Best Value Pick, and Best-Price Guarantee were all tested as lo-fi prototypes. This changed the budget conversation: design could prove ROI before a single line of code was written.`}
            </NumberedItem>
            <NumberedItem n="04">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Checkout as the primary intervention</span>
              {`: Funnel analysis revealed 28% drop-off at checkout, higher than any upstream page. We concentrated resources there rather than spreading effort across the full site. The 4.9% conversion rate validated the focus.`}
            </NumberedItem>
          </div>
          <p className="text-[#7c5cff] text-2xl font-bold max-w-[780px] leading-normal"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Retrospective: I&apos;d push for mobile parity from the start. And I&apos;d define explicit success metrics for each design concept before entering stakeholder reviews. Pre-mortems would have sharpened the A/B test design from round one.
          </p>
        </section>

        {/* Key Solutions */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>KEY SOLUTIONS</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            {`Six high-leverage `}
            <span className="gradient-warm">design decisions</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <SolutionCard title="Unified Design System" accent="unified system" accentColor="#7c5cff"
              bullets={[
                "Type, color, spacing, and component patterns applied across every page",
                "Eliminated the fragmented look-and-feel that eroded user confidence",
              ]} />
            <SolutionCard title="VIP Loyalty Sign-In" accent="Live in production" accentColor="#ff6b9a"
              bullets={[
                `Sign-in reframed as a value driver: "see your best price", not a gate`,
                "Signed-in users showed significantly lower abandonment at checkout",
              ]} />
            <SolutionCard title="Best Value Recommendation" accent="Decision paralysis" accentColor="#4fc3ff"
              bullets={[
                `Algorithmically surfaced a single "best value" pick, removing deal-type confusion`,
                `Users answered one question instead of four: what's cheapest right now?`,
              ]} />
            <SolutionCard title="Checkout Redesign" accent="4.9% conversion rate" accentColor="#4fc3ff"
              bullets={[
                "Redesigned the highest drop-off stage with fee transparency and progress indicators",
                "Autofill for signed-in users cut checkout time by 40%, the single largest conversion driver",
              ]} />
            <SolutionCard title="4-Round A/B Testing" accent="Data-driven" accentColor="#4fc3ff"
              bullets={[
                "Tested fee transparency timing, progress-bar placement, and autofill across 4 rounds",
                "Lo-fi prototype validated the redesigned checkout before a single line of code",
              ]} />
            <SolutionCard title="Hotel Detail Optimization" accent="trust at decision point" accentColor="#4fc3ff"
              bullets={[
                "Best-Price Guarantee badge built trust at the highest-hesitation moment",
                "Reduced hesitation at the booking confirmation step through research-led iteration",
              ]} />
          </div>
          {/* Screen shots */}
          <div className="flex flex-col gap-8">
            <div className="w-full rounded-[10px] md:rounded-[30px] overflow-hidden" style={{ boxShadow: "0 0 30px rgba(0,0,0,0.25)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgScreen1} alt="Priceline screen 1" className="w-full h-auto block" />
            </div>
            <div className="w-full rounded-[10px] md:rounded-[30px] overflow-hidden" style={{ boxShadow: "0 0 30px rgba(0,0,0,0.25)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgScreen2} alt="Priceline screen 2" className="w-full h-auto block" />
            </div>
            <div className="w-full rounded-[10px] md:rounded-[30px] overflow-hidden" style={{ boxShadow: "0 0 30px rgba(0,0,0,0.25)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgScreen3} alt="Priceline screen 3" className="w-full h-auto block" />
            </div>
            <div className="w-full rounded-[10px] md:rounded-[30px] overflow-hidden" style={{ boxShadow: "0 0 30px rgba(0,0,0,0.25)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgScreen4} alt="Priceline screen 4" className="w-full h-auto block" />
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10 pb-32">
          <SectionLabel>IMPACT</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            {`Better UX produced `}
            <span className="gradient-cool">measurable business outcomes</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <ImpactCard value="4.9%" label="Checkout conversion rate (up from 2%, +2.9 pts), achieved through A/B testing and proof that design framed in business metrics earns a seat at the strategy table" gradient="gradient-warm" />
            <ImpactCard value="NPS 41" label="Post-redesign satisfaction score (+6), reflecting a measurably improved experience across the full purchase journey" gradient="gradient-cool" />
            <ImpactCard value="20pts" label="Increase in authenticated sessions via VIP sign-in" gradient="gradient-warm-reverse" />
            <ImpactCard value="VIP" label="Loyalty concept still live in production" gradient="gradient-cool" />
          </div>
        </section>
      </main>

      {/* Contact footer */}
      <footer id="contact" className="bg-black w-full flex justify-center px-8 mt-0">
        <div className="w-full max-w-[1200px] py-20 flex flex-col gap-16">
          <div className="flex items-center gap-4">
            <div className="h-px w-8" style={{ background: warmGradient }} />
            <span className="text-[#f0f0f0] text-sm tracking-[2px]"
              style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 700 }}>CONTACT</span>
          </div>
          <h2 className="text-white text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.2] max-w-[680px]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Let&apos;s build something great together.
          </h2>
          <div className="flex flex-wrap gap-5 items-center">
            <a href="mailto:peterlee01@gmail.com"
              className="flex items-center gap-3 px-8 py-4 rounded-full text-white text-base font-medium hover:opacity-90 transition-opacity"
              style={{ fontFamily: "var(--font-jakarta)", background: "linear-gradient(90deg, #7c5cff 19.231%, #ff6b9a 57.212%, #ffb070 87.019%)" }}>
              peterlee01@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/pldesigns/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full text-white text-base font-medium hover:opacity-90 transition-opacity"
              style={{ fontFamily: "var(--font-jakarta)", background: "linear-gradient(90deg, #4fc3ff, #7c5cff 73.792%)" }}>
              LinkedIn
            </a>
            <a href="/api/resume" download="Peter_Lee_Resume_090526.pdf"
              className="flex items-center gap-3 px-8 py-4 rounded-full text-white text-base font-medium hover:opacity-90 transition-opacity border border-white/30"
              style={{ fontFamily: "var(--font-jakarta)" }}>
              Download Resume
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1v9M7 10L4 7m3 3 3-3M1 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}
