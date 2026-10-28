import Link from "next/link";
import GradientBackground from "@/components/GradientBackground";
import BackToTop from "@/components/BackToTop";
import MobileNav from "@/components/MobileNav";

const assets = {
  heroImage: "/images/ca-v2-hero.jpg",
};

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
      <p className="text-[#6a6a6a] text-lg leading-7 max-w-[780px]"
        style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>{children}</p>
    </div>
  );
}

function StatCard({ value, label, gradient }: { value: string; label: string; gradient: string }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[240px] max-w-[284px] h-[260px] flex flex-col items-center justify-center gap-2 p-6 text-center"
      style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
      <span className={`${value.length > 4 ? "text-[3.5rem]" : "text-[4.5rem]"} font-bold leading-none whitespace-nowrap ${gradient}`}
        style={{ fontFamily: "var(--font-bricolage)" }}>{value}</span>
      <span className="text-[#6b7280] text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>{label}</span>
    </div>
  );
}

function SolutionCard({ title, accent, accentColor, bullets }: {
  title: string; accent: string; accentColor: string; bullets: string[]
}) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[240px] max-w-[286px] p-6 flex flex-col gap-3"
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

function ProtoCard({ image, gradient, label, title, desc, href }: {
  image?: string; gradient?: string; label: string; title: string; desc: string; href: string
}) {
  return (
    <div className="flex-1 min-w-[280px] max-w-[560px] bg-white border border-[#d4d4d4] rounded-[20px] overflow-hidden flex flex-col"
      style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
      <div className="w-full aspect-[16/10] overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ background: gradient }}>
            <span className="text-white text-lg font-bold text-center px-6" style={{ fontFamily: "var(--font-bricolage)" }}>{title}</span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3">
        <span className="text-xs tracking-[2px] uppercase text-[#a3a3a3]" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 600 }}>{label}</span>
        <p className="text-[#6b7280] text-lg leading-7" style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>{desc}</p>
        <a href={href} target="_blank" rel="noopener noreferrer"
          className="mt-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#7c5cff] text-[#7c5cff] text-base font-medium hover:bg-[#7c5cff] hover:text-white transition-colors duration-200 w-fit"
          style={{ fontFamily: "var(--font-jakarta)" }}>
          Open Prototype
        </a>
      </div>
    </div>
  );
}

function BriefLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="text-[#7c5cff] text-lg font-bold hover:underline inline-flex items-center gap-2 w-fit"
      style={{ fontFamily: "var(--font-jakarta)" }}>
      {children} &rarr;
    </a>
  );
}

function Shot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="flex flex-col gap-3">
      <div className="w-full rounded-[16px] md:rounded-[24px] overflow-hidden border border-[#e5e5e5]"
        style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
      </div>
      {caption && (
        <figcaption className="text-[#6b7280] text-base leading-6" style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

const h2 = "text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]";
const lead = "text-[#6a6a6a] text-lg leading-7 max-w-[780px]";

const statusLegend = [
  { name: "Teal", label: "Verified", color: "#00d4aa" },
  { name: "Amber", label: "Pending or needs attention", color: "#edb200" },
  { name: "Red", label: "Expired or failed", color: "#fb2c36" },
  { name: "Blue", label: "AI match or recommendation", color: "#4a9eff" },
];

function DecisionRow({ n, label, title, image, alt, note, sample, reverse, extra, children }: {
  n: string; label: string; title: string; image: string; alt: string; note: string;
  sample?: boolean; reverse?: boolean; extra?: React.ReactNode; children: React.ReactNode
}) {
  return (
    <li className="grid md:grid-cols-2 gap-8 md:gap-14 items-center py-12 border-t border-[#e5e5e5] first:border-t-0 first:pt-2">
      <div className={`flex flex-col gap-4 ${reverse ? "md:order-2" : ""}`}>
        <span className="text-[#7c5cff] text-sm tracking-[2px]" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 600 }}>
          {n} — {label}
        </span>
        <h3 className="text-[#010101] text-[clamp(1.6rem,2.6vw,2.1rem)] font-extrabold leading-tight" style={{ fontFamily: "var(--font-bricolage)" }}>
          {title}
        </h3>
        <p className="text-[#6a6a6a] text-lg leading-7" style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>{children}</p>
        {extra}
      </div>
      <figure className="flex flex-col gap-3">
        <div className="w-full rounded-[16px] overflow-hidden border border-[#e5e5e5]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={alt} loading="lazy" width={1600} height={1200} className="w-full h-auto block" />
        </div>
        <figcaption className="flex items-center gap-3 text-[#4a5266] text-base" style={{ fontFamily: "var(--font-jakarta)", fontWeight: 600 }}>
          <span aria-hidden="true" className="h-px w-6 shrink-0" style={{ background: warmGradient }} />
          <span>{note}</span>
          {sample && <span className="ml-auto text-xs tracking-[1px] text-[#8a8a8a]" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>SAMPLE DATA</span>}
        </figcaption>
      </figure>
    </li>
  );
}

const roleRows = [
  { stage: "Research", owned: "Competitive teardown and market scoping, user research, concept validation",
    ai: "Synthesized competitors, funding news and review complaints into a concept brief" },
  { stage: "Architecture", owned: "Coordinator agent, verification sub-agents, API data sources, AI matching on both sides of the market",
    ai: "Wrote and wired the tool-calling backend against live government APIs" },
  { stage: "Design", owned: "Trust surfaces, verdict tiers, reports, user journeys, UI & brand",
    ai: "Design tools connected to the live site over MCP, so designs matched what was built" },
  { stage: "Prototypes & build", owned: "Usability-tested prototypes, front & back-end site build",
    ai: "Prototypes in hours, not weeks; 60+ pull requests shipped" },
];

export default function Credentialai() {
  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      <GradientBackground />

      <Nav />

      <main className="flex flex-col items-center gap-36 px-8 pb-0">
        {/* Hero image */}
        <section className="w-full max-w-[1200px] pt-10 flex flex-col gap-16">
          <div className="flex flex-col gap-[70px]">
            <Link href="/#work" className="inline-flex items-center gap-2 text-[#6b7280] text-base hover:text-[#7c5cff] transition-colors group"
              style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="transition-transform group-hover:-translate-x-1 duration-200">
                <path d="M11 14L6 9L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Work
            </Link>

            <div className="w-full aspect-[1200/750] rounded-[10px] md:rounded-[30px] overflow-hidden border border-[#e5e5e5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.heroImage} alt="Credentialai live product" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Eyebrow + headline */}
          <div className="flex flex-col gap-7">
            <span className="text-[#7c5cff] text-lg tracking-[2px]"
              style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>
              CASE STUDY / CREDENTIALAI · BETA · AI-POWERED PHYSICIAN CREDENTIALING &amp; MATCHING
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
              style={{ fontFamily: "var(--font-bricolage)" }}>
              Directing a credentialing{" "}
              <span className="gradient-warm">AI agent from market gap to viable business.</span>
            </h1>
            <p className="text-[#4a5266] text-lg leading-7 max-w-[900px] tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}>
              A coordinator agent verifies physician identity, sanctions and license status against real
              government data, then AI-matches both sides: physicians for facilities, facilities and jobs for
              physicians.
            </p>
          </div>

          {/* Overview stat cards */}
          <div className="flex flex-wrap gap-4">
            <StatCard value="Minutes" label="To Verify a Physician" gradient="gradient-warm" />
            <StatCard value="98%" label="Accuracy Rate" gradient="gradient-warm-reverse" />
            <StatCard value="10x" label="Faster" gradient="gradient-cool" />
          </div>

          {/* Project details */}
          <div className="flex flex-wrap gap-4">
            {[
              { label: "PROJECT", value: "Credentialai" },
              { label: "ROLE", value: "Research, Architecture,\nDesign & Build" },
              { label: "COLLABORATOR", value: "Claude\n(API + Tool Runner)" },
              { label: "LIVE SITE", value: "credentialai.co" },
            ].map(({ label, value }) => (
              <div key={label} className="flex-1 min-w-[240px] max-w-[320px] px-6 pb-6 flex flex-col gap-1">
                <span className="text-xl font-bold text-[#010101]" style={{ fontFamily: "var(--font-jakarta)" }}>{label}</span>
                {label === "LIVE SITE" ? (
                  <a href="https://credentialai.co" target="_blank" rel="noopener noreferrer"
                    className="text-xl text-[#7c5cff] hover:underline w-fit" style={{ fontFamily: "var(--font-jakarta)" }}>
                    {value}
                  </a>
                ) : (
                  value.split("\n").map((line) => (
                    <span key={line} className="text-xl text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>{line}</span>
                  ))
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Context & Problem */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>CONTEXT &amp; PROBLEM</SectionLabel>
          <h2 className={h2} style={{ fontFamily: "var(--font-bricolage)" }}>
            Credentialing is still a{" "}
            <span className="gradient-warm">90-120 day manual bottleneck</span>
          </h2>
          <p className={lead} style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            Every physician must be verified for identity, sanctions and license status before seeing a patient,
            and every state board runs its own system.
          </p>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">Lookups alone are commoditized: incumbents already claim 90%+ automation on individual checks</NumberedItem>
            <NumberedItem n="02">The real bottleneck is reconciliation: incomplete pulls still need manual follow-up</NumberedItem>
            <NumberedItem n="03">No unified license API: each state board is its own system, the real infrastructure gap</NumberedItem>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <StatCard value="90-120" label="Days a Full Credentialing Cycle Takes" gradient="gradient-warm" />
            <StatCard value="30%" label="of Healthcare Orgs Still Verify Credentials Manually, Site by Site" gradient="gradient-warm-reverse" />
            <StatCard value="60%" label="of Providers Need 4+ Hours of Primary-Source Verification" gradient="gradient-cool" />
          </div>
        </section>

        {/* Role & Approach */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>ROLE &amp; APPROACH</SectionLabel>
          <h2 className={h2} style={{ fontFamily: "var(--font-bricolage)" }}>
            0-1 product design,{" "}
            <span className="gradient-cool">directed with agentic AI</span>
          </h2>
          <p className={lead} style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            I led every stage, from research to the final site build, and directed Claude like a team against a spec.
          </p>
          <div className="w-full bg-white border border-[#d4d4d4] rounded-[20px] overflow-hidden"
            style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)", fontFamily: "var(--font-jakarta)" }}>
            <div className="hidden md:grid grid-cols-[200px_1fr_1fr] gap-8 px-8 py-4 bg-[#fafafa] border-b border-[#e5e5e5]">
              {["STAGE", "WHAT I OWNED", "HOW I USED AI"].map((h) => (
                <span key={h} className="text-sm tracking-[2px] text-[#7c5cff]" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 600 }}>{h}</span>
              ))}
            </div>
            {roleRows.map((r) => (
              <div key={r.stage} className="grid md:grid-cols-[200px_1fr_1fr] gap-2 md:gap-8 px-6 md:px-8 py-6 border-b border-[#e5e5e5] last:border-b-0">
                <p className="text-[#010101] text-xl font-bold" style={{ fontFamily: "var(--font-bricolage)" }}>{r.stage}</p>
                <p className="text-[#4a5266] text-lg leading-7">
                  <span className="md:hidden text-xs tracking-[2px] text-[#7c5cff] block mb-1" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 600 }}>WHAT I OWNED</span>
                  {r.owned}
                </p>
                <p className="text-[#6b7280] text-lg leading-7">
                  <span className="md:hidden text-xs tracking-[2px] text-[#7c5cff] block mb-1 mt-2" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 600 }}>HOW I USED AI</span>
                  {r.ai}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Research & Discovery */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>RESEARCH &amp; DISCOVERY</SectionLabel>
          <h2 className={h2} style={{ fontFamily: "var(--font-bricolage)" }}>
            Trust is{" "}
            <span className="gradient-warm">the product, not the lookup</span>
          </h2>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-[55px] font-bold leading-none text-[#2f6fe4]" style={{ fontFamily: "var(--font-bricolage)" }}>19</span>
              <span className="text-[#010101] text-2xl font-bold max-w-[220px] leading-tight" style={{ fontFamily: "var(--font-bricolage)" }}>
                Healthcare professionals interviewed
              </span>
            </div>
            <p className={`${lead} flex-1 min-w-[280px]`} style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
              I interviewed 7 hospitals, 5 staffing agencies, and 7 physicians to understand their credential
              verification &amp; hiring workflows and pain-points.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <StatCard value="70%" label="of Facilities Said Verification Is Too Slow, Wasting 8-9 Hours" gradient="gradient-warm" />
            <StatCard value="68%" label="of Providers Want Less Fragmented, More Centralized Workflows" gradient="gradient-warm-reverse" />
            <StatCard value="56%" label="of Physicians Say Job Searching Is Too Tedious & Slow" gradient="gradient-cool" />
          </div>
          <Shot src="/images/ca-v2-research.jpg"
            alt="Research synthesis: 19 participants across hospitals, staffing agencies and physicians, their quotes, key insights and six themes" />
        </section>

        {/* Insights & Strategy */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>INSIGHTS &amp; STRATEGY</SectionLabel>
          <h2 className={h2} style={{ fontFamily: "var(--font-bricolage)" }}>
            Trust{" "}
            <span className="gradient-cool">before the match</span>
          </h2>
          <p className={lead} style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            Our research found that credentialing was fragmented and manual: staff spent hours reconciling results
            across disconnected sources, and that slowed hiring. Even after a physician was cleared, matching them to
            the right facility was a separate manual step. That pointed to one opportunity: verify and match in a
            single flow.
          </p>
          <div className="flex flex-wrap gap-4">
            <SolutionCard title="Unified flow" accent="One run, start to finish" accentColor="#7c5cff"
              bullets={["Identity, sanctions and license together", "Matches arrive with the verdict"]} />
            <SolutionCard title="Transparent verification and trust" accent="Every verdict cited" accentColor="#ff6b9a"
              bullets={["Each check names its source", "Unclear data goes to a person"]} />
            <SolutionCard title="Automated AI matching" accent="Both sides of the market" accentColor="#4fc3ff"
              bullets={["Facilities get verified physicians", "Physicians get facilities and jobs"]} />
            <SolutionCard title="Simple UI" accent="One clear answer" accentColor="#4fc3ff"
              bullets={["GO, NEEDS REVIEW or NO-GO", "Next steps for every result"]} />
          </div>
        </section>

        {/* Validation & Prototyping */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>VALIDATION &amp; PROTOTYPING</SectionLabel>
          <h2 className={h2} style={{ fontFamily: "var(--font-bricolage)" }}>
            Two prototypes, one question:{" "}
            <span className="gradient-warm">would users trust it?</span>
          </h2>
          <p className={lead} style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            I created 2 high-fidelity prototypes with different directions: a guided, step-by-step approach (Lovable),
            and a unified dashboard (Figma Make), and ran usability tests. We discovered that users preferred the
            faster, unified dashboard.
          </p>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            <ProtoCard
              label="Prototype · Lovable"
              title="Guided, step-by-step"
              desc="A guided, step-by-step verification flow."
              image="/images/ca-proto-lovable.png"
              href="/prototype-credentialai-lovable/index.html"
            />
            <ProtoCard
              label="Prototype · Figma Make"
              title="Unified dashboard"
              desc="A unified dashboard, preferred by users for speed."
              image="/images/ca-proto-figma.png"
              href="/prototype-credentialai-figma/index.html"
            />
          </div>
          <p className="text-[#010101] text-2xl font-bold pt-4" style={{ fontFamily: "var(--font-bricolage)" }}>What we learned</p>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">All users appreciated combining verification and AI matching, saving time and context switching.</NumberedItem>
            <NumberedItem n="02">Speed beat guidance. Credentialing staff are experts, so a step-by-step guide adds clicks without adding clarity. They preferred a single run that returns the verdict, each check with its source, AI matches and a PDF report.</NumberedItem>
            <NumberedItem n="03">Transparent verification builds trust. Show verification sources, timestamps, expiration dates, outstanding checks, and clear explanations for any flagged credentials.</NumberedItem>
            <NumberedItem n="04">The physician side still uses light steps: sign in, claim your NPI, set preferences, then matches. That&apos;s where guidance helped.</NumberedItem>
          </div>
        </section>

        {/* Design Decisions */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>DESIGN DECISIONS</SectionLabel>
          <h2 className={h2} style={{ fontFamily: "var(--font-bricolage)" }}>
            Designing the trust surfaces,{" "}
            <span className="gradient-warm">not just the pipeline.</span>
          </h2>
          <p className={lead} style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            Every design decision was shaped by one goal: make credential verification feel transparent, efficient,
            and trustworthy, from the first interaction to the final hiring decision.
          </p>
          <ol className="flex flex-col">
            <DecisionRow n="01" label="UX STRATEGY" title="Show the value before asking for commitment."
              image="/images/ca-dd-ux.jpg"
              alt="Credentialai home page: the value proposition beside the verification form, with the Facilities and Physicians tabs and the Run free verification button outlined"
              note="Value first. Clear next steps.">
              Lead with a clear value proposition, then guide users through verification with a focused, low-friction
              workflow. Make the next action and progress visible so users understand what the product does and what to
              expect.
            </DecisionRow>
            <DecisionRow n="02" label="VISUAL SYSTEM" title="Make trust visible at a glance." reverse
              image="/images/ca-dd-status.jpg"
              alt="A verification card with teal, red and amber status badges for identity, sanctions and license, beside an AI match card with a blue match score"
              note="Status at a glance." sample
              extra={
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1" aria-label="Status colors">
                  {statusLegend.map((l) => (
                    <li key={l.label} className="flex items-start gap-2 text-[#4a5266] text-base">
                      <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full shrink-0 mt-2" style={{ background: l.color }} />
                      <span><span className="font-bold text-[#010101]">{l.name}</span> · {l.label}</span>
                    </li>
                  ))}
                </ul>
              }>
              Use a consistent status system to distinguish verified credentials from pending, expired, or missing
              information. Reserve teal for verified states and blue for AI-powered matching, so confirmed facts never
              look like recommendations.
            </DecisionRow>
            <DecisionRow n="03" label="AI EXPERIENCE" title="Explain the recommendation. Keep the decision human."
              image="/images/ca-dd-ai.jpg"
              alt="AI-matched physician cards, each with a match score, a plain-language reason, contact actions, and one flagged as License needs review"
              note="Explainable recommendations. Human control." sample>
              Show why a physician matches by connecting the recommendation to specialty, location, availability and
              verification status. Surface gaps or unverified credentials clearly, while leaving the final hiring
              decision with the user.
            </DecisionRow>
            <DecisionRow n="04" label="BRAND IDENTITY" title="Credible by design. Modern by nature." reverse
              image="/images/ca-dd-brand.jpg"
              alt="Credentialai brand in use: the logo, Space Grotesk, Inter and mono type, the color tokens, and the primary button with status chips"
              note="Healthcare credibility. Modern AI.">
              Balance the rigor of healthcare infrastructure with the clarity of modern AI software. A restrained dark
              palette, deliberate typography and consistent components communicate confidence without feeling overly
              clinical or futuristic.
            </DecisionRow>
          </ol>
          <BriefLink href="/credentialai-style-guide.html">
            Full style guide: logo, color, type, components
          </BriefLink>
        </section>

        {/* The System */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>THE SYSTEM</SectionLabel>
          <h2 className={h2} style={{ fontFamily: "var(--font-bricolage)" }}>
            Coordinator agent + AI matching,{" "}
            <span className="gradient-warm">sequenced deliberately</span>
          </h2>
          <Shot src="/images/ca-v2-architecture.jpg" alt="Credentialai architecture: API layer, AI agents, data sources and platform" />
        </section>

        {/* Outcomes & Targets */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>OUTCOMES &amp; TARGETS</SectionLabel>
          <h2 className={h2} style={{ fontFamily: "var(--font-bricolage)" }}>
            What&apos;s shipped,{" "}
            <span className="gradient-cool">and what we&apos;re targeting next</span>
          </h2>
          <p className={lead} style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            Usability testing with 5 users shaped the value proposition and the workflow. The product is now live
            with accounts on both sides; early-access pilots will measure the speed and accuracy targets above.
          </p>
          <div className="flex flex-wrap gap-4">
            <StatCard value="26" label="States with Live License Checks" gradient="gradient-warm" />
            <StatCard value="2" label="Sides Matched: Facilities & Physicians" gradient="gradient-warm-reverse" />
            <StatCard value="60+" label="Pull Requests Shipped" gradient="gradient-cool" />
          </div>
          <div className="pt-2">
            <a href="https://credentialai.co" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#7c5cff] text-[#7c5cff] text-lg font-medium hover:bg-[#7c5cff] hover:text-white transition-colors duration-200 w-fit"
              style={{ fontFamily: "var(--font-jakarta)" }}>
              Try the Live Product
            </a>
          </div>
        </section>

        {/* What's Next */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10 pb-32">
          <SectionLabel>WHAT&apos;S NEXT</SectionLabel>
          <h2 className={h2} style={{ fontFamily: "var(--font-bricolage)" }}>
            AI matching, scoped to{" "}
            <span className="gradient-warm">what verification already earns</span>
          </h2>
          <p className={lead} style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            A teardown of the matching market (over $700M raised; Nomad Health wound down its marketplace) argued
            against an open two-sided marketplace, so matching shipped inside verification instead. Facilities now get
            AI-matched physicians with every check: similar, pre-verified physicians nearby, each with a plain-language
            reason, contact links and one-click intro requests. Physicians get AI-matched facilities and open jobs,
            ranked by their own preferences, with staffing agencies filtered out. Every match is verified first, and
            next steps come with every verdict.
          </p>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">Ongoing roster monitoring: scheduled license and sanctions rechecks with alerts</NumberedItem>
            <NumberedItem n="02">NCQA-grade verification through a paid partner such as Verisys or CertifyOS</NumberedItem>
            <NumberedItem n="03">Pilots with early-access facilities to measure review time against today&apos;s process</NumberedItem>
            <NumberedItem n="04">Bulk upload verifications: upload a roster as a CSV, verify every physician in one batch, and download the results with a report for each</NumberedItem>
            <NumberedItem n="05">Facility dashboard: a roster view with each physician&apos;s status at a glance, a calendar of upcoming license expirations, alerts when a status changes, saved shortlists of AI-matched physicians, intro request tracking, team seats with roles, and exportable reports for credentialing committees and audits</NumberedItem>
          </div>
        </section>

        {/* Next Case Study */}
        <section className="w-full max-w-[1200px] flex flex-col items-center gap-6 pb-24">
          <span className="text-[#a3a3a3] text-sm tracking-[2px]" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>NEXT CASE STUDY</span>
          <Link
            href="/hiring-hall"
            className="flex items-center gap-3 px-10 py-5 rounded-full border-2 border-[#7c5cff] text-[#7c5cff] text-xl font-medium hover:bg-[#7c5cff] hover:text-white transition-colors duration-200"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Hiring Hall: B2C ConTech App
            <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7.5H26M26 7.5L20 1M26 7.5L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
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
