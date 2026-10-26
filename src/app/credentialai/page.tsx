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

function FeatureCard({ title, dark, bullets }: { title: string; dark?: boolean; bullets: string[] }) {
  return (
    <div
      className={`flex-1 min-w-[260px] rounded-[20px] p-8 flex flex-col gap-4 ${dark ? "" : "border border-[#d4d4d4]"}`}
      style={{ background: dark ? "#111111" : "#ffffff", boxShadow: dark ? "none" : "0 0 20px rgba(0,0,0,0.04)" }}
    >
      <p className={`text-xl font-bold ${dark ? "text-white" : "text-[#010101]"}`} style={{ fontFamily: "var(--font-bricolage)" }}>{title}</p>
      <ul className={`list-disc pl-6 text-lg leading-7 space-y-2 ${dark ? "text-white/70" : "text-[#6b7280]"}`}
        style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
        {bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[240px] p-6 flex flex-col gap-2"
      style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
      <p className="text-[#010101] text-xl font-bold" style={{ fontFamily: "var(--font-bricolage)" }}>{title}</p>
      <p className="text-[#6b7280] text-lg leading-7" style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>{children}</p>
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
const bold = "font-extrabold text-[#6a6a6a]";

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
          <p className="text-[#7c5cff] text-2xl font-bold max-w-[780px] leading-normal"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Together: a fragmented, manual process consuming hours of valuable staff time, and a compelling case for Credentialai.
          </p>
        </section>

        {/* Role & Leadership */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>ROLE &amp; LEADERSHIP</SectionLabel>
          <h2 className={h2} style={{ fontFamily: "var(--font-bricolage)" }}>
            0-1 Product Design flow, research, architecture, design,{" "}
            <span className="gradient-cool">prototypes and final site build</span>
          </h2>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">
              <span className={bold}>Research</span>
              {`: competitive teardown and market scoping, user research, concept validation`}
            </NumberedItem>
            <NumberedItem n="02">
              <span className={bold}>Architecture</span>
              {`: coordinator agent, verification sub-agents, API data sources, AI matching on both sides of the market`}
            </NumberedItem>
            <NumberedItem n="03">
              <span className={bold}>Design</span>
              {`: trust surfaces, verdict tiers, reports, user journeys, UI & brand`}
            </NumberedItem>
            <NumberedItem n="04">
              <span className={bold}>Prototypes &amp; final site</span>
              {`: usability-tested prototypes, front & back-end site build`}
            </NumberedItem>
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
              <span className="text-[5rem] font-bold leading-none gradient-warm" style={{ fontFamily: "var(--font-bricolage)" }}>19</span>
              <span className="text-[#010101] text-2xl font-bold max-w-[220px] leading-tight" style={{ fontFamily: "var(--font-bricolage)" }}>
                Healthcare professionals interviewed
              </span>
            </div>
            <p className={`${lead} flex-1 min-w-[280px]`} style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
              7 hospitals, 5 staffing agencies, and 7 physicians revealed workflow pain-points and how credential
              verification breaks down across different sides of the hiring ecosystem.
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

        {/* The Agentic Approach */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>THE AGENTIC APPROACH</SectionLabel>
          <h2 className={h2} style={{ fontFamily: "var(--font-bricolage)" }}>
            Agentic AI, directed,{" "}
            <span className="gradient-cool">not just prompted</span>
          </h2>
          <p className={lead} style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            Agentic AI was the operating method for the whole build: I directed Claude like a team against a spec,
            from research to production.
          </p>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">
              <span className={bold}>Business strategy &amp; research</span>
              {`: competitor teardown, funding and review-mined complaints to find the wedge`}
            </NumberedItem>
            <NumberedItem n="02">
              <span className={bold}>Backend architecture</span>
              {`: coordinator agent with identity-first sequencing, on Claude API + Tool Runner`}
            </NumberedItem>
            <NumberedItem n="03">
              <span className={bold}>API &amp; systems integration</span>
              {`: NPPES, HHS-OIG, state license boards, License Verify, Google Jobs, Supabase and Resend`}
            </NumberedItem>
            <NumberedItem n="04">
              <span className={bold}>Prototypes &amp; workflows</span>
              {`: disposable Lovable and Figma Make prototypes to test ideas in hours`}
            </NumberedItem>
            <NumberedItem n="05">
              <span className={bold}>Design tooling via MCP</span>
              {`: design tools reading and writing the same live system, not static mockups`}
            </NumberedItem>
          </div>
          <div className="flex flex-wrap gap-4">
            <FeatureCard title="What I directed" bullets={[
              "The market wedge and concept, before any code",
              "The architecture, data sources and vendor choices",
              "Where agents act alone, and where a human reviews",
              "What to prototype fast versus build for real",
            ]} />
            <FeatureCard title="What agentic AI executed" dark bullets={[
              "Research synthesized into a concept brief",
              "The tool-calling backend against live APIs",
              "Working prototypes in hours, not weeks",
              "Screenshots, diagrams and docs kept in sync",
            ]} />
          </div>
        </section>

        {/* Design Decisions */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>DESIGN DECISIONS</SectionLabel>
          <h2 className={h2} style={{ fontFamily: "var(--font-bricolage)" }}>
            Designing the trust surfaces,{" "}
            <span className="gradient-warm">not just the pipeline</span>
          </h2>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">
              <span className={bold}>UX</span>
              {`: lead with value and proof, then let users run a real verification for free`}
            </NumberedItem>
            <NumberedItem n="02">
              <span className={bold}>UI</span>
              {`: near-black, infrastructure-grade surfaces; teal for verified, blue for AI matching`}
            </NumberedItem>
            <NumberedItem n="03">
              <span className={bold}>Branding</span>
              {`: modern and credible, neither overly clinical nor overly futuristic`}
            </NumberedItem>
          </div>
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 items-start">
            <Shot src="/images/ca-v2-report.jpg" alt="Downloadable verification report"
              caption="Every run produces a PDF report that cites each source." />
            <div className="flex flex-col gap-4">
              <InfoCard title="Confidence tiering">
                GO / NEEDS REVIEW / NO-GO. Ambiguous identity or missing license data never rounds up to GO.
              </InfoCard>
              <InfoCard title="Source citation per data point">
                Each verdict names the record behind it: NPPES match, OIG result, license board and date.
              </InfoCard>
              <InfoCard title="Audit trail by default">
                Every run is saved with its report, so a verdict can be reopened and reviewed later.
              </InfoCard>
            </div>
          </div>
          <Shot src="/images/ca-v2-mobile.jpg" alt="Credentialai on mobile"
            caption="Fully responsive: verification, matches and jobs on a phone." />
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
          <div className="flex flex-wrap gap-4">
            <SolutionCard title="Primary Source Verif." accent="Real, not scraped" accentColor="#7c5cff"
              bullets={["NPPES identity first, then OIG sanctions", "Live licenses in 26 states"]} />
            <SolutionCard title="AI Physician Matching" accent="For facilities" accentColor="#ff6b9a"
              bullets={["Similar, pre-checked physicians", "Reasons and contact links"]} />
            <SolutionCard title="AI Facility & Job Matching" accent="For physicians" accentColor="#4fc3ff"
              bullets={["Facilities and open jobs", "Ranked by their preferences"]} />
            <SolutionCard title="Accounts" accent="Email sign-in" accentColor="#4fc3ff"
              bullets={["Facility run history and intros", "Physician verified profile"]} />
            <SolutionCard title="Compliance Reporting" accent="Committee-ready" accentColor="#4fc3ff"
              bullets={["PDF report for every run", "Cites every source used"]} />
            <SolutionCard title="Guarded by Design" accent="Rules back the AI" accentColor="#4fc3ff"
              bullets={["Rule check on every verdict", "Visitor limit caps API cost"]} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <p className="text-2xl font-bold text-[#010101]" style={{ fontFamily: "var(--font-bricolage)" }}>For facilities</p>
              <Shot src="/images/ca-v2-verify.jpg" alt="Verification result for a searched physician"
                caption="Verify a named physician, with a cited verdict." />
              <Shot src="/images/ca-v2-matches.jpg" alt="AI-matched physicians with contact links"
                caption="AI-matched physicians, each with a reason and contact links." />
              <Shot src="/images/ca-v2-facility.jpg" alt="Facility account dashboard"
                caption="Facility account: usage, past runs and intro requests." />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-2xl font-bold text-[#010101]" style={{ fontFamily: "var(--font-bricolage)" }}>For physicians</p>
              <Shot src="/images/ca-v2-badge.jpg" alt="Verified badge" caption="A shareable verified badge." />
              <Shot src="/images/ca-v2-jobs.jpg" alt="AI-matched facilities and open jobs"
                caption="AI-matched facilities and open jobs, by preference." />
              <Shot src="/images/ca-v2-profile.jpg" alt="Physician verified profile"
                caption="Physician account: verified profile and report." />
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-8">
            <p className="text-sm tracking-[2px] text-[#a3a3a3] uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>
              Prototypes
            </p>
            <div className="flex flex-wrap justify-center gap-6 w-full">
              <ProtoCard
                label="Prototype · Lovable"
                title="Reviewer & Marketing"
                desc="Reviewer workflow and marketing site, tested with real users."
                image="/images/ca-proto-lovable.png"
                href="/prototype-credentialai-lovable/index.html"
              />
              <ProtoCard
                label="Prototype · Figma Make"
                title="Higher-Fidelity Design Exploration"
                desc="Higher-fidelity visual and interaction exploration."
                image="/images/ca-proto-figma.png"
                href="/prototype-credentialai-figma/index.html"
              />
            </div>
            <a href="https://github.com/peterlee01/credentialai" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#d4d4d4] text-[#4a5266] text-lg font-medium hover:border-[#7c5cff] hover:text-[#7c5cff] transition-colors duration-200"
              style={{ fontFamily: "var(--font-jakarta)" }}>
              View Source
            </a>
          </div>
        </section>

        {/* What's Next */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>WHAT&apos;S NEXT</SectionLabel>
          <h2 className={h2} style={{ fontFamily: "var(--font-bricolage)" }}>
            AI matching, scoped to{" "}
            <span className="gradient-warm">what verification already earns</span>
          </h2>
          <p className={lead} style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            A teardown of the matching market (over $700M raised; Nomad Health wound down its marketplace) argued
            against an open two-sided marketplace. So matching shipped narrowly: only verified physicians, inside
            the same run, with no marketplace liquidity to build.
          </p>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">Ongoing roster monitoring: scheduled license and sanctions rechecks with alerts</NumberedItem>
            <NumberedItem n="02">NCQA-grade verification through a paid partner such as Verisys or CertifyOS</NumberedItem>
            <NumberedItem n="03">Pilots with early-access facilities to measure review time against today&apos;s process</NumberedItem>
          </div>
        </section>

        {/* Outcomes & Targets */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10 pb-32">
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
