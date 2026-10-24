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

function Shot({ src, alt, caption, className = "" }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={`flex flex-col gap-3 ${className}`}>
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

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold leading-[1.15]"
      style={{ fontFamily: "var(--font-bricolage)" }}>
      {children}
    </h2>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#6a6a6a] text-lg leading-7 max-w-[780px]"
      style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
      {children}
    </p>
  );
}

function Point({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="text-[#6a6a6a] text-lg leading-7" style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
      <span className="font-extrabold text-[#010101]">{title}</span>: {children}
    </li>
  );
}

export default function Credentialai() {
  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      <GradientBackground />

      <Nav />

      <main className="flex flex-col items-center gap-32 px-8 pb-0">
        {/* Hero */}
        <section className="w-full max-w-[1200px] pt-10 flex flex-col gap-14">
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
              <img src={assets.heroImage} alt="Credentialai home page" className="w-full h-full object-cover object-top" />
            </div>
          </div>

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
              A live, two-sided product: facilities verify a physician against primary sources and get AI-matched
              physicians; physicians get verified and AI-matched to facilities and open jobs. One run, one report.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <StatCard value="Minutes" label="To Verify a Physician" gradient="gradient-warm" />
            <StatCard value="98%" label="Accuracy Rate" gradient="gradient-warm-reverse" />
            <StatCard value="10x" label="Faster" gradient="gradient-cool" />
          </div>

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

        {/* Problem & Context */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>PROBLEM &amp; CONTEXT</SectionLabel>
          <H2>
            Credentialing is still a{" "}
            <span className="gradient-warm">90-120 day manual bottleneck</span>
          </H2>
          <Lead>
            Every physician must be checked for identity, sanctions and license status before seeing a patient,
            and every state board runs its own system. Staff still do it by hand, one website at a time.
          </Lead>
          <div className="flex flex-wrap gap-4">
            <StatCard value="90-120" label="Days a Full Credentialing Cycle Takes" gradient="gradient-warm" />
            <StatCard value="30%" label="of Healthcare Orgs Still Verify Credentials Manually, Site by Site" gradient="gradient-warm-reverse" />
            <StatCard value="60%" label="of Providers Need 4+ Hours of Primary-Source Verification" gradient="gradient-cool" />
          </div>
          <p className="text-[#7c5cff] text-2xl font-bold max-w-[780px] leading-normal"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            A fragmented, manual process consuming hours of valuable staff time: the case for Credentialai.
          </p>
        </section>

        {/* The product */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>THE PRODUCT</SectionLabel>
          <H2>
            One verification,{" "}
            <span className="gradient-cool">two sides of the market</span>
          </H2>
          <Lead>
            Facilities and physicians run the same check. Each side gets a verdict plus AI matches for what they need next.
          </Lead>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <p className="text-2xl font-bold text-[#010101]" style={{ fontFamily: "var(--font-bricolage)" }}>For facilities</p>
              <Shot src="/images/ca-v2-verify.jpg" alt="Verification result for a searched physician"
                caption="Verify a named physician: identity, sanctions and license, with a GO / NEEDS REVIEW / NO-GO verdict." />
              <Shot src="/images/ca-v2-matches.jpg" alt="AI-matched physicians with contact links"
                caption="AI-matched, pre-checked physicians in the same specialty, each with a reason and a contact link." />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-2xl font-bold text-[#010101]" style={{ fontFamily: "var(--font-bricolage)" }}>For physicians</p>
              <Shot src="/images/ca-v2-badge.jpg" alt="Verified badge" caption="A verified badge physicians can share." />
              <Shot src="/images/ca-v2-jobs.jpg" alt="AI-matched facilities and open jobs"
                caption="AI-matched facilities and open jobs, ranked by the physician's own preferences." />
            </div>
          </div>
        </section>

        {/* Accounts */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>ACCOUNTS</SectionLabel>
          <H2>
            Returning users{" "}
            <span className="gradient-warm">pick up where they left off</span>
          </H2>
          <Lead>
            Email sign-in for both sides. Facilities keep a history of runs, reports and intro requests; physicians keep a verified profile and job preferences.
          </Lead>
          <div className="grid md:grid-cols-2 gap-8">
            <Shot src="/images/ca-v2-facility.jpg" alt="Facility account dashboard"
              caption="Facility account: usage, past verifications and one-click intro requests." />
            <Shot src="/images/ca-v2-profile.jpg" alt="Physician verified profile"
              caption="Physician account: verified profile, preferences and saved matches." />
          </div>
        </section>

        {/* How it works */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <H2>
            One check,{" "}
            <span className="gradient-cool">a path for each side</span>
          </H2>
          <Shot src="/images/ca-v2-how.jpg" alt="How it works for facilities and physicians" />
        </section>

        {/* Under the hood */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>BACKEND, APIS &amp; AI</SectionLabel>
          <H2>
            A coordinator agent,{" "}
            <span className="gradient-warm">real government data</span>
          </H2>
          <Shot src="/images/ca-v2-architecture.jpg" alt="Credentialai architecture: API layer, AI agents, data sources and platform" />
          <ul className="flex flex-col gap-3 max-w-[900px] list-disc pl-6">
            <Point title="Identity first">a Claude coordinator (API + Tool Runner) confirms NPPES identity before checking OIG sanctions and the state license.</Point>
            <Point title="Live licenses in 26 states">free state open-data APIs first, then a paid License Verify fallback covering 23 states.</Point>
            <Point title="Matching in parallel">AI physician and job matching runs on a second thread, so results land with the verdict.</Point>
            <Point title="Guarded verdicts">a rule-based check backs every AI verdict, and Claude writes match reasons as structured JSON.</Point>
            <Point title="Production basics">Vercel serverless, Supabase auth and storage with row-level security, Resend email, and a visitor limit to cap API cost.</Point>
          </ul>
        </section>

        {/* Trust & design */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>DESIGN DECISIONS</SectionLabel>
          <H2>
            Designing the trust surfaces,{" "}
            <span className="gradient-cool">not just the pipeline</span>
          </H2>
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 items-start">
            <Shot src="/images/ca-v2-report.jpg" alt="Downloadable verification report"
              caption="Every run produces a downloadable PDF report that cites each source." />
            <div className="flex flex-col gap-4">
              <InfoCard title="Fail toward caution">
                Ambiguous identity or missing license data becomes NEEDS REVIEW, never a clean GO.
              </InfoCard>
              <InfoCard title="Cite every data point">
                Each verdict names the record behind it: NPPES match, OIG result, license board and date.
              </InfoCard>
              <InfoCard title="Infrastructure-grade UI">
                Dark surfaces with a teal-to-blue accent: teal for verified, blue for AI matching.
              </InfoCard>
              <BriefLink href="/credentialai-style-guide.html">Full style guide</BriefLink>
            </div>
          </div>
        </section>

        {/* Mobile */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>RESPONSIVE</SectionLabel>
          <H2>
            Built for the phone{" "}
            <span className="gradient-warm">a recruiter actually checks</span>
          </H2>
          <Shot src="/images/ca-v2-mobile.jpg" alt="Credentialai on mobile" />
        </section>

        {/* Business */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>BUSINESS STRATEGY</SectionLabel>
          <H2>
            From free demo{" "}
            <span className="gradient-cool">to early-access plans</span>
          </H2>
          <Lead>
            Three free runs show the full workflow. Plans scale from pay-as-you-go to enterprise, with ongoing
            roster monitoring as the recurring revenue, priced with each early-access facility.
          </Lead>
          <Shot src="/images/ca-v2-early-access.jpg" alt="Early access plans page" />
          <BriefLink href="/credentialai-concept-brief.html">Full concept brief: problem, customer, business model</BriefLink>
        </section>

        {/* Prototypes */}
        <section className="w-full max-w-[1200px] flex flex-col items-center gap-8">
          <p className="text-sm tracking-[2px] text-[#a3a3a3] uppercase" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>
            Early Prototypes
          </p>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            <ProtoCard
              label="Prototype · Lovable"
              title="Reviewer & Marketing"
              desc="Reviewer workflow and marketing site, usability-tested with 5 users."
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
        </section>

        {/* Outcomes */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10 pb-32">
          <SectionLabel>OUTCOMES</SectionLabel>
          <H2>
            Shipped and live,{" "}
            <span className="gradient-warm">not a mockup</span>
          </H2>
          <div className="flex flex-wrap gap-4">
            <StatCard value="26" label="States with Live License Checks" gradient="gradient-warm" />
            <StatCard value="2" label="Sides Matched: Facilities & Physicians" gradient="gradient-warm-reverse" />
            <StatCard value="60+" label="Pull Requests Shipped" gradient="gradient-cool" />
          </div>
          <Lead>
            Next: pilot with early-access facilities to measure review time against their current process, and add ongoing roster monitoring.
          </Lead>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="https://credentialai.co" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#7c5cff] text-[#7c5cff] text-lg font-medium hover:bg-[#7c5cff] hover:text-white transition-colors duration-200 w-fit"
              style={{ fontFamily: "var(--font-jakarta)" }}>
              Try the Live Product
            </a>
            <a href="https://github.com/peterlee01/credentialai" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#d4d4d4] text-[#4a5266] text-lg font-medium hover:border-[#7c5cff] hover:text-[#7c5cff] transition-colors duration-200 w-fit"
              style={{ fontFamily: "var(--font-jakarta)" }}>
              View Source
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
