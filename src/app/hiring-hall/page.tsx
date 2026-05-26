import Link from "next/link";
import GradientBackground from "@/components/GradientBackground";
import BackToTop from "@/components/BackToTop";

const assets = {
  heroImage: "https://www.figma.com/api/mcp/asset/195a5af3-dcb9-4f56-922f-ef0b76c00f48",
  heroImage1: "https://www.figma.com/api/mcp/asset/53b4d238-7782-461d-a22e-dc016faaa45b",
  heroImage2: "https://www.figma.com/api/mcp/asset/fde7b806-143a-4636-ab11-2fbb874a64af",
  heroImage3: "https://www.figma.com/api/mcp/asset/bb3ec885-e595-41ce-b671-641602de8d46",
  heroImage4: "https://www.figma.com/api/mcp/asset/84827032-8740-4bf7-9610-100c941a1a0f",
  emailIcon: "https://www.figma.com/api/mcp/asset/af474133-b385-4a9e-bffd-397b88d36393",
  linkedin: "https://www.figma.com/api/mcp/asset/29c93f3c-4422-42d5-a569-5cf5ff368866",
};

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="py-4">
          <span className="text-2xl font-extrabold text-[#010101]" style={{ fontFamily: "var(--font-bricolage)" }}>Peter </span>
          <span className="text-2xl font-extrabold gradient-warm" style={{ fontFamily: "var(--font-bricolage)" }}>Lee</span>
        </Link>
        <div className="flex items-center gap-2">
          {["Work", "About", "Philosophy"].map((link) => (
            <Link key={link} href={`/#${link.toLowerCase()}`}
              className="px-4 py-3 text-[#6b7280] text-base tracking-wide hover:text-[#010101] transition-colors"
              style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
              {link}
            </Link>
          ))}
          <Link href="/#contact"
            className="ml-2 px-6 py-3 bg-black text-white rounded-full text-base tracking-wide hover:bg-[#7c5cff] transition-colors"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 600 }}>
            Contact
          </Link>
        </div>
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

export default function HiringHall() {
  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      <GradientBackground />

      <Nav />

      <main className="flex flex-col items-center gap-36 px-8 pb-0">
        <div className="w-full max-w-[1200px] pt-10">
          <Link href="/#work" className="inline-flex items-center gap-2 text-[#6b7280] text-base hover:text-[#7c5cff] transition-colors group"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="transition-transform group-hover:-translate-x-1 duration-200">
              <path d="M11 14L6 9L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Work
          </Link>
        </div>

        {/* Hero image */}
        <section className="w-full max-w-[1200px] pt-16 flex flex-col gap-16">
          <div className="w-full aspect-[1200/835] rounded-[30px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.heroImage} alt="Hiring Hall app" className="w-full h-full object-cover" />
          </div>

          {/* Eyebrow + headline */}
          <div className="flex flex-col gap-7">
            <span className="text-[#7c5cff] text-lg tracking-[2px]"
              style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>
              CASE STUDY / HIRING HALL - B2C CONTECH APP
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
              style={{ fontFamily: "var(--font-bricolage)" }}>
              Re-imagining how the construction industry finds, hires, and connects talent -{" "}
              <span className="gradient-warm">cutting time-to-hire from weeks to hours.</span>
            </h1>
            <p className="text-[#4a5266] text-lg leading-7 max-w-[900px] tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}>
              Instantly connects construction companies with trusted pros. Similar to LinkedIn and Uber, we allow construction professionals to hire on demand, connect, build their credentials, and find jobs/workers.
            </p>
          </div>

          {/* Overview stat cards */}
          <div className="flex flex-wrap gap-4">
            <StatCard value="91%" label="Faster Hiring" gradient="gradient-warm" />
            <StatCard value="24/7" label="On-demand Hiring" gradient="gradient-cool" />
            <StatCard value="100%" label="Verified Credentials" gradient="gradient-warm-reverse" />
            <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[240px] max-w-[284px] h-[260px] flex flex-col items-center justify-center gap-2 p-6 text-center"
              style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
              <span className="text-[4rem] font-bold leading-none gradient-cool"
                style={{ fontFamily: "var(--font-bricolage)", lineHeight: "1" }}>80-<br />100%</span>
              <span className="text-[#6b7280] text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>
                Access Beyond Word-of-Mouth Hiring
              </span>
            </div>
          </div>

          {/* Project details */}
          <div className="flex flex-wrap gap-4">
            {[
              { label: "COMPANY", value: "Hiring Hall" },
              { label: "ROLE", value: "Founder" },
              {
                label: "TEAM", value: "1 Founder/UX Lead\n1 Investor\n5 Developers\n1 QA Tester\n1 Product Manager\n1 Project Manager"
              },
              { label: "TIMELINE", value: "Overall: 16 weeks\nDiscovery & Research: 6 weeks\nDesign & Testing: 6 weeks" },
            ].map(({ label, value }) => (
              <div key={label} className="flex-1 min-w-[240px] max-w-[320px] px-6 pb-6 flex flex-col gap-1">
                <span className="text-xl font-bold text-[#010101]" style={{ fontFamily: "var(--font-jakarta)" }}>{label}</span>
                {value.split("\n").map((line) => (
                  <span key={line} className="text-xl text-[#6a6a6a]" style={{ fontFamily: "var(--font-jakarta)" }}>{line}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Context & Problem */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>CONTEXT &amp; PROBLEM</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Construction hiring was{" "}
            <span className="gradient-warm">broken, biased, and decades behind</span>
          </h2>
          <p className="text-[#6a6a6a] text-lg leading-7 max-w-[780px]"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            Jobs for construction workers rely on slow, word of mouth, union halls, or antiquated and biased means of finding work. Favoritism and unfair practices lead to qualified professionals being at a disadvantage as well as wastefulness in cost and time.
          </p>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">U.S. construction industry facing its worst labor shortage in decades — hiring is the #1 challenge cited by contractors</NumberedItem>
            <NumberedItem n="02">Construction jobs still filled through word-of-mouth or union halls, locking out qualified tradespeople</NumberedItem>
            <NumberedItem n="03">Weeks time-to-hire for skilled trades using traditional methods — causing costly project delays and budget overruns</NumberedItem>
            <NumberedItem n="04">No purpose-built digital platforms existed for on-demand construction labor matching at launch — a wide-open category gap</NumberedItem>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[240px] max-w-[284px] h-[260px] flex flex-col items-center justify-center gap-2 p-6 text-center"
              style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
              <span className="text-[3.5rem] font-bold leading-tight gradient-warm w-full [word-break:break-word]"
                style={{ fontFamily: "var(--font-bricolage)" }}>$30B-$50B</span>
              <span className="text-[#6b7280] text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>Lost From Hiring Inefficiencies</span>
            </div>
            <StatCard value="78%" label="Firms Struggle to Find Qualified Workers" gradient="gradient-cool" />
            <StatCard value="80%" label="Jobs Filled Through Word-of-mouth" gradient="gradient-warm-reverse" />
            <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[240px] max-w-[284px] h-[260px] flex flex-col items-center justify-center gap-2 p-6 text-center"
              style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
              <span className="text-[4rem] font-bold leading-none gradient-cool"
                style={{ fontFamily: "var(--font-bricolage)" }}>1-2<br />Weeks</span>
              <span className="text-[#6b7280] text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>To Hire Skilled Workers</span>
            </div>
          </div>
        </section>

        {/* Role & Leadership */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>ROLE &amp; LEADERSHIP</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Define the product experience from{" "}
            <span className="gradient-cool">zero to launch</span>
          </h2>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">Led end-to-end product design from concept through launch as sole designer/researcher on mobile platform</NumberedItem>
            <NumberedItem n="02">Shaped product direction and influenced go-to-market positioning based on user research, competitive analysis, and customer interviews</NumberedItem>
            <NumberedItem n="03">Directed a cross-functional, remote team of 11 — across Product, Engineering, Marketing, QA, and Sales</NumberedItem>
            <NumberedItem n="04">Designed the UX/UI/design system that governed the platform's functionality, visual and interaction language</NumberedItem>
          </div>
        </section>

        {/* Insight & Research */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>INSIGHT &amp; RESEARCH</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            The real problem was{" "}
            <span className="gradient-warm">visibility and trust</span>
          </h2>
          <p className="text-[#6a6a6a] text-lg leading-7 max-w-[780px]"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            Skilled tradespeople had no credible way to present themselves. Companies had no reliable way to find them. The gap between talent and opportunity was a design problem.
          </p>
          <div className="flex flex-wrap gap-4">
            <InsightCard title="User needs" accent="12 pros, 10 companies" accentColor="#7c5cff">
              Users don&apos;t just want a job board; they want a digital handshake — a way to verify a person&apos;s reputation and work quality outside of their physical inner circle.
            </InsightCard>
            <InsightCard title="Funnel Analysis" accent="68% drop-off" accentColor="#ff6b9a">
              <ul className="list-disc pl-5 space-y-1">
                <li>Hiring delays = lost income (workers)</li>
                <li>Hiring delays = project risk (companies)</li>
                <li>Weeks-long cycles didn&apos;t match job site reality</li>
              </ul>
            </InsightCard>
            <InsightCard title='"I need work (or workers) fast — like today"' accent="Hours, not weeks" accentColor="#4fc3ff">
              Analyzed user journeys revealing 68% of contractors dropped off during the job requirements step.
            </InsightCard>
            <InsightCard title="Mobile Adoption" accent="80% job searches via mobile" accentColor="#4fc3ff">
              Majority of tradesmen and companies use mobile devices for finding jobs or workers.
            </InsightCard>
          </div>
          <div className="w-full aspect-[1200/829] rounded-[30px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.heroImage1} alt="Research insights" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Strategy & Approach */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>STRATEGY &amp; APPROACH</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Build the LinkedIn + Uber for{" "}
            <span className="gradient-cool">skilled trades</span>
          </h2>
          <p className="text-[#6a6a6a] text-lg leading-7 max-w-[780px]"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            We stopped designing for hiring workflows — and started designing for how work actually happens on job sites.
          </p>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">Anchored identity around verified credentials and work portfolios — not résumés built for office jobs</NumberedItem>
            <NumberedItem n="02">Target time-to-match for on-demand hire requests — designed for the urgency of live job sites, not HR pipelines</NumberedItem>
            <NumberedItem n="03">Built scheduling around project-based, non-linear work patterns — real-time availability, not static calendar slots</NumberedItem>
            <NumberedItem n="04">Invested in community features — connections, endorsements, reputation — that compound in value as the platform grows</NumberedItem>
          </div>
          <div className="w-full aspect-[1200/671] rounded-[30px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.heroImage2} alt="Strategy screens" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Key Solutions */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>KEY SOLUTIONS</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Six features that{" "}
            <span className="gradient-warm">changed the equation</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <SolutionCard title="On Demand Hiring" accent="24/7 Matching" accentColor="#7c5cff"
              bullets={["Post a need, accept work in real time — no application and waiting", "Filters for trade type, location, duration, and rate"]} />
            <SolutionCard title="Credential Builder" accent="Portable Identity" accentColor="#ff6b9a"
              bullets={["Licenses, certs, and specializations in one verified profile", "Build life-long credentials/profile"]} />
            <SolutionCard title="Work Portfolio" accent="Hours, not weeks" accentColor="#4fc3ff"
              bullets={["Photo-first project documentation with client context", "Replaces what a résumé or union card can never convey"]} />
            <SolutionCard title="Dual-sided Networking" accent="Two-sided networking" accentColor="#4fc3ff"
              bullets={["Connections and endorsements for pros and companies alike", "Professional community rooted in the construction sector"]} />
            <SolutionCard title="Flexible Scheduling" accent="Real-time availability" accentColor="#4fc3ff"
              bullets={["Dynamic availability signals for variable, project-based schedules", "Companies staff confidently; pros stay in control of their time"]} />
            <SolutionCard title="Job Discovery Feed" accent="Merit-based access" accentColor="#4fc3ff"
              bullets={["Personalized feed matched by trade, location, and availability", "Replaces word-of-mouth with a transparent, skills-first system"]} />
          </div>
          <div className="w-full aspect-[1200/829] rounded-[30px] overflow-hidden"
            style={{ boxShadow: "0 0 40px rgba(0,0,0,0.15)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.heroImage3} alt="Key solution screens" className="w-full h-full object-cover" />
          </div>
          <div className="w-full rounded-[30px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.heroImage4} alt="Full product screens" className="w-full h-auto" />
          </div>
        </section>

        {/* Impact */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10 pb-32">
          <SectionLabel>IMPACT</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            From blueprint to launch —{" "}
            <span className="gradient-cool">modernizing how construction hires.</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            <StatCard value="42%" label="User acquisition" gradient="gradient-warm" />
            <StatCard value="24%" label="Lift In Engagement" gradient="gradient-cool" />
            <StatCard value="80%" label="Reduction in Word-of-mouth dependency" gradient="gradient-warm-reverse" />
            <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[240px] max-w-[284px] h-[260px] flex flex-col items-center justify-center gap-2 p-6 text-center"
              style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
              <span className="text-[4rem] font-bold leading-none gradient-cool"
                style={{ fontFamily: "var(--font-bricolage)" }}>-1<br />Hour</span>
              <span className="text-[#6b7280] text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>To Hire Skilled Workers</span>
            </div>
          </div>
        </section>
        {/* Next Case Study */}
        <section className="w-full max-w-[1200px] flex flex-col items-center gap-6 pb-24">
          <span className="text-[#a3a3a3] text-sm tracking-[2px]" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>NEXT CASE STUDY</span>
          <Link
            href="/contentdial"
            className="flex items-center gap-3 px-10 py-5 rounded-full border-2 border-[#7c5cff] text-[#7c5cff] text-xl font-medium hover:bg-[#7c5cff] hover:text-white transition-colors duration-200"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            ContentDial — AI-Powered Content Intelligence
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.emailIcon} alt="" className="h-7 w-auto" />
              peterlee01@gmail.com
            </a>
            <a href="https://linkedin.com/in/peterlee" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full text-white text-base font-medium hover:opacity-90 transition-opacity"
              style={{ fontFamily: "var(--font-jakarta)", background: "linear-gradient(90deg, #4fc3ff, #7c5cff 73.792%)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.linkedin} alt="" className="h-9 w-9 object-cover" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}
