import Link from "next/link";
import GradientBackground from "@/components/GradientBackground";
import BackToTop from "@/components/BackToTop";
import MobileNav from "@/components/MobileNav";

const assets = {
  heroImage: "/images/ca-hero.png",
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
      <span className={`text-[4.5rem] font-bold leading-none ${gradient}`}
        style={{ fontFamily: "var(--font-bricolage)" }}>{value}</span>
      <span className="text-[#6b7280] text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>{label}</span>
    </div>
  );
}

function InsightCard({ title, accent, accentColor, children }: {
  title: string; accent: string; accentColor: string; children: React.ReactNode
}) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[240px] max-w-[286px] p-6 flex flex-col gap-3"
      style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
      <p className="text-[#010101] text-2xl font-bold" style={{ fontFamily: "var(--font-bricolage)" }}>{title}</p>
      <div className="text-[#6b7280] text-lg leading-7 flex-1" style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>{children}</div>
      <span className="text-lg font-extrabold" style={{ fontFamily: "var(--font-jetbrains)", color: accentColor }}>{accent}</span>
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

            <div className="w-full aspect-[1200/750] rounded-[10px] md:rounded-[30px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.heroImage} alt="Credentialai live product" className="w-full h-full object-cover" />
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
              A coordinator agent orchestrating three tool-using sub-agents against real government data,
              verifying physician identity, sanctions, and license status, and knowing exactly when to hand off
              to a human. Live and runnable, not a mockup.
            </p>
          </div>

          {/* Overview stat cards */}
          <div className="flex flex-wrap gap-4">
            <StatCard value="3" label="Sub-agents Orchestrated" gradient="gradient-warm" />
            <StatCard value="4/4" label="Verdict Paths Verified" gradient="gradient-warm-reverse" />
            <StatCard value="5" label="Users Validated" gradient="gradient-cool" />
            <StatCard value="68%" label="Target Review-Time Reduction (pilot goal)" gradient="gradient-cool" />
          </div>

          {/* Project details */}
          <div className="flex flex-wrap gap-4">
            {[
              { label: "PROJECT", value: "Credentialai" },
              { label: "ROLE", value: "Research, Architecture,\nDesign & Prototyping" },
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
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Credentialing is still a{" "}
            <span className="gradient-warm">90-120 day manual bottleneck</span>
          </h2>
          <p className="text-[#6a6a6a] text-lg leading-7 max-w-[780px]"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            Every incoming physician has to be verified against identity, sanctions, and license-status records
            before they can see a patient, and incumbent platforms already claim 90%+ automation on the
            individual lookups alone.
          </p>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">The individual lookups are already commoditized: a demo built around just one of those wouldn&apos;t show anything incumbents don&apos;t already claim</NumberedItem>
            <NumberedItem n="02">The real bottleneck is reconciliation, not lookup: review-mined complaints against incumbent platforms consistently point at incomplete data pulls requiring manual follow-up</NumberedItem>
            <NumberedItem n="03">No unified public API covers license status: every state medical/professional board runs its own system, the one real infrastructure gap in the entire pipeline</NumberedItem>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <StatCard value="90-120" label="Days a Full Credentialing Cycle Takes" gradient="gradient-warm" />
            <StatCard value="0" label="Unified Public APIs for License Status" gradient="gradient-cool" />
            <StatCard value="2" label="Real Public Data Sources: NPPES, HHS-OIG" gradient="gradient-warm-reverse" />
          </div>
        </section>

        {/* Role & Leadership */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>ROLE &amp; LEADERSHIP</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Research, architecture, design,{" "}
            <span className="gradient-cool">backend code, prototypes and final site</span>
          </h2>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Research</span>
              {`: competitive teardown and market scoping; identified reconciliation, not lookup speed, as the real bottleneck`}
            </NumberedItem>
            <NumberedItem n="02">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Architecture</span>
              {`: scoped the agent boundary and corrected the build approach mid-course: caught that "Claude Agent SDK" was the wrong product, switched to Claude API + Tool Runner`}
            </NumberedItem>
            <NumberedItem n="03">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Design</span>
              {`: trust surfaces, confidence tiering, and the reviewer workflow, informed by UX decisions, usability validation, and UI decisions, plus the product's visual identity and branding`}
            </NumberedItem>
            <NumberedItem n="04">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Prototypes &amp; final site</span>
              {`: built and usability-tested the reviewer-console and marketing-site prototypes, then shipped the real production site, finding and fixing 2 real bugs along the way`}
            </NumberedItem>
          </div>
        </section>

        {/* Insight & Research */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>BUSINESS STRATEGY &amp; RESEARCH</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Reconciliation is{" "}
            <span className="gradient-warm">the product, not the lookup</span>
          </h2>
          <p className="text-[#6a6a6a] text-lg leading-7 max-w-[780px]"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            Research base: competitive teardown of credentialing platforms (Medallion, Verifiable), funding
            and press coverage, and review-site complaints on primary-source-verification workflows specifically.
          </p>
          <div className="flex flex-wrap gap-4">
            <InsightCard title="Health systems &amp; staffing" accent="Target customer" accentColor="#7c5cff">
              Hospital credentialing offices, locum/staffing agencies, and delegated-credentialing vendors,
              already paying for platforms like Medallion and Verifiable but still employing people to reconcile results.
            </InsightCard>
            <InsightCard title="Rising compliance scrutiny" accent="Why now" accentColor="#ff6b9a">
              NCQA and Joint Commission accreditation pressure keeps pushing credentialing offices toward
              defensible, auditable decisions, not just faster black-box automation.
            </InsightCard>
            <InsightCard title="API embed model" accent="Business model" accentColor="#4fc3ff">
              Sold as a verification API/webhook wired into the practice-management or HR system a health
              system already uses, priced per verification or per seat.
            </InsightCard>
          </div>
          <BriefLink href="/credentialai-concept-brief.html">
            Full concept brief: problem, customer, business model
          </BriefLink>
        </section>

        {/* Strategy & Approach */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>THE AGENTIC APPROACH</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Agentic AI, directed,{" "}
            <span className="gradient-cool">not just prompted</span>
          </h2>
          <p className="text-[#6a6a6a] text-lg leading-7 max-w-[780px]"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            This wasn&apos;t one chatbot feature bolted onto a roadmap: agentic AI was the operating method for
            the entire build. I directed it through market research and competitive synthesis, backend
            architecture and real API integration, rapid prototyping, and design tooling wired in over MCP,
            treating Claude less like an assistant answering questions and more like a team I was directing
            against a spec.
          </p>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Business strategy &amp; research</span>
              {`: directed agentic research across a competitor teardown, funding and press coverage, and review-mined complaints to isolate reconciliation, not lookup speed, as the real wedge`}
            </NumberedItem>
            <NumberedItem n="02">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Backend architecture</span>
              {`: directed the coordinator + three-sub-agent design and the identity-first sequencing, and caught a mid-course mistake: "Claude Agent SDK" was the wrong product, corrected to Claude API + Tool Runner before writing the real code`}
            </NumberedItem>
            <NumberedItem n="03">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>API &amp; systems integration</span>
              {`: directed real integration work against NPPES, HHS-OIG LEIE, and the Claude API itself, plus the rate-limiting and cost-guardrail logic a public-facing endpoint actually needs in production`}
            </NumberedItem>
            <NumberedItem n="04">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Prototypes &amp; workflows</span>
              {`: directed rapid, disposable prototyping (Lovable, Figma Make) to pressure-test the reviewer console and marketing site in hours, before committing to final designs`}
            </NumberedItem>
            <NumberedItem n="05">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Design tooling via MCP</span>
              {`: connected Model Context Protocol servers so design tools could read from and write to the same live system, instead of iterating against disconnected static mockups`}
            </NumberedItem>
          </div>
          <div className="flex flex-wrap gap-4">
            <FeatureCard title="What I directed" bullets={[
              "Scoped the market wedge and the concept itself before any code existed",
              "Chose the coordinator + sub-agent architecture, and caught the wrong-SDK mistake early",
              "Set the autonomy boundary: where agents could act alone, and where they had to stop",
              "Decided what to prototype fast versus build for real",
            ]} />
            <FeatureCard title="What agentic AI executed" dark bullets={[
              "Synthesized market research into a scoped, defensible concept brief",
              "Wrote and wired the real tool-calling backend against live government APIs",
              "Generated working prototypes from directional prompts in hours, not weeks",
              "Kept design assets in sync with the live product via MCP, on direction",
            ]} />
          </div>
        </section>

        {/* Decisions & Constraints */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>DESIGN DECISIONS</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Designing the trust surfaces,{" "}
            <span className="gradient-warm">not just the pipeline</span>
          </h2>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>UX</span>
              {`: users needed clarity, proof, and a tangible way to try it before engaging. The experience leads with value, surfaces proof points and sources, then guides users straight into a real verification.`}
            </NumberedItem>
            <NumberedItem n="02">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>UI</span>
              {`: dark, near-black surfaces read as infrastructure-grade software, not a consumer app. A teal-to-blue gradient carries every signal that matters: teal for verification and trust, blue for technology, so system state stays legible at a glance.`}
            </NumberedItem>
            <NumberedItem n="03">
              <span className="font-extrabold text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>Branding</span>
              {`: positioned as modern and credible, avoiding both overly clinical and overly futuristic extremes. Clean typography and restrained, confident messaging build enterprise trust without losing an innovative edge.`}
            </NumberedItem>
          </div>
          <div className="flex flex-wrap gap-4">
            <InfoCard title="Confidence tiering">
              GO / NEEDS REVIEW / NO-GO, with the tier boundary defined explicitly. Ambiguous identity or
              incomplete license data fails toward caution: an unresolved case never rounds up to a clean GO.
            </InfoCard>
            <InfoCard title="Source citation per data point">
              Every verdict names the exact record that drove it: an NPPES match, an LEIE hit, a license-board
              status, instead of a single opaque score.
            </InfoCard>
            <InfoCard title="Audit trail by default">
              Every check the coordinator runs is logged with a timestamp, so a verdict can be reconstructed
              and reviewed long after it was issued.
            </InfoCard>
          </div>
          <BriefLink href="/credentialai-style-guide.html">
            Full style guide: logo, color, type, components
          </BriefLink>
        </section>

        {/* Key Solutions */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>THE SYSTEM</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Coordinator + three sub-agents,{" "}
            <span className="gradient-warm">sequenced deliberately</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <SolutionCard title="Primary Source Verif." accent="Real, not scraped" accentColor="#7c5cff"
              bullets={["Agents navigate directly to authoritative sources", "Never uses secondary scraped data"]} />
            <SolutionCard title="Continuous Monitoring" accent="Built to track over time" accentColor="#ff6b9a"
              bullets={["Tracks expirations, sanctions, status changes", "Licenses don't just expire on renewal day"]} />
            <SolutionCard title="EHR Integrations" accent="Epic, Cerner-ready" accentColor="#4fc3ff"
              bullets={["Designed to push verified credential data directly", "Fits existing medical staff office systems"]} />
            <SolutionCard title="Automated Alerts" accent="Built to notify instantly" accentColor="#4fc3ff"
              bullets={["Flags disciplinary actions in any state", "Full citation context on every alert"]} />
            <SolutionCard title="Compliance Reporting" accent="Committee-ready" accentColor="#4fc3ff"
              bullets={["One-step packet generation", "Cites every source used to reach each verdict"]} />
            <SolutionCard title="Auditable By Design" accent="Timestamped, always" accentColor="#4fc3ff"
              bullets={["Every check is logged", "Capped at 1 run/visitor to bound live-demo API cost"]} />
          </div>

          <div className="w-full flex flex-col items-center gap-8">
            <p className="text-sm tracking-[2px] text-[#a3a3a3] uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>
              Prototypes
            </p>
            <div className="flex flex-wrap justify-center gap-6 w-full">
              <ProtoCard
                label="Prototype · Lovable"
                title="Reviewer & Marketing"
                desc="Interface direction for the reviewer workflow and marketing site, tested with real users."
                image="/images/ca-proto-lovable.png"
                href="/prototype-credentialai-lovable/index.html"
              />
              <ProtoCard
                label="Prototype · Figma Make"
                title="Higher-Fidelity Design Exploration"
                desc="Deeper visual and interaction exploration for the credentialing flows."
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
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Considered AI matching between physicians and hospitals,{" "}
            <span className="gradient-warm">and said not yet</span>
          </h2>
          <p className="text-[#6a6a6a] text-lg leading-7 max-w-[780px]"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            The natural-seeming next feature was AI-driven matching between verified physicians and hospitals,
            using the trust layer Credentialai already builds to power placement, not just compliance. Before
            committing engineering time, I directed a competitive teardown of the physician/clinician-matching
            space rather than assuming the extension made sense.
          </p>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">The space is large and well-capitalized: over $700M in disclosed funding across confirmed AI-matching players (Vivian Health, IntelyCare, Incredible Health, Aya Healthcare/Winnow AI, Medely), several at $1B+ valuations.</NumberedItem>
            <NumberedItem n="02">The strongest signal: Nomad Health, one of the oldest, best-funded players in the category ($241M raised), wound down its own two-sided marketplace as of May 2026, pivoting to licensing its matching software to agencies instead of running the marketplace itself.</NumberedItem>
            <NumberedItem n="03">Matching competes on network liquidity and consumer-marketplace economics: millions of clinicians, thousands of facility contracts, a fundamentally different, more capital-intensive business than Credentialai&apos;s current single-sided, per-verification model.</NumberedItem>
            <NumberedItem n="04">Saile, a very early-stage company combining credentialing verification and matching in one product, is the closest structural analog to what this extension would become, and the one worth revisiting if the calculus changes.</NumberedItem>
          </div>
          <p className="text-[#7c5cff] text-2xl font-bold max-w-[780px] leading-normal"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            The decision: a two-sided marketplace looks like a distinct product bet, not a natural feature
            extension. I chose to stay focused on deepening the verification/trust wedge, where
            Credentialai&apos;s architecture is actually differentiated, rather than chasing a crowded adjacent
            category on an unproven thesis.
          </p>
          <p className="text-[#6a6a6a] text-lg leading-7 max-w-[780px]"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            Rather than shelve the instinct entirely, I scoped a narrower version that sidesteps the liquidity
            problem above: eligibility-gated matching against a hospital&apos;s own already-open requisitions,
            not a physician-facing marketplace. Once a clinician clears verification, the coordinator checks
            which of that hospital&apos;s existing open roles they&apos;re now eligible for, no physician-side
            discovery, no cross-hospital liquidity to build. It&apos;s built and verified end-to-end in the
            underlying agent architecture; bringing it into this live demo is the next build step.
          </p>
        </section>

        {/* Impact */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10 pb-32">
          <SectionLabel>OUTCOMES &amp; TARGETS</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            What&apos;s validated,{" "}
            <span className="gradient-cool">and what we&apos;re targeting next</span>
          </h2>
          <p className="text-[#6a6a6a] text-lg leading-7 max-w-[780px]"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            Usability testing with 5 users validated the core concepts and drove targeted pivots to clarify the
            value proposition, simplify the multi-agent workflow, and strengthen trust in the verification
            process. The numbers below are pilot-stage targets based on the architecture&apos;s design intent,
            not yet measured against real production volume. The next phase is running them against real
            credentialing-office workflows to validate or correct them.
          </p>
          <div className="flex flex-wrap gap-4">
            <StatCard value="68%" label="Target: Credentialing Review-Time Reduction" gradient="gradient-warm" />
            <StatCard value="72%" label="Target: Manual-Verification Workload Decrease" gradient="gradient-cool" />
            <StatCard value="94%" label="Target: Agreement with Expert Manual Reviewers" gradient="gradient-warm-reverse" />
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
