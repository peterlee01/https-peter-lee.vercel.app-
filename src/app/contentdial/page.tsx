import Link from "next/link";
import GradientBackground from "@/components/GradientBackground";
import BackToTop from "@/components/BackToTop";
import MobileNav from "@/components/MobileNav";

const imgHero       = "https://www.figma.com/api/mcp/asset/ca90cad3-ba62-4dc4-b950-c7435029a7dc";
const imgResearch   = "https://www.figma.com/api/mcp/asset/89a93c66-e5b2-4783-9d75-83ec6b12dd21";
const imgStrategy   = "https://www.figma.com/api/mcp/asset/4a7c4fde-569b-4c14-84ae-e14a6551f84a";
const imgScreen1    = "https://www.figma.com/api/mcp/asset/692e6d1e-8f1d-442f-8189-6751adee4dc5";
const imgScreen2    = "https://www.figma.com/api/mcp/asset/26eccbde-f08e-4c90-8a16-dc652c8e9080";
const imgScreen3    = "https://www.figma.com/api/mcp/asset/c9f1c90c-a91a-413f-a9a6-418badba23f4";
const imgScreen4    = "https://www.figma.com/api/mcp/asset/94d47bff-9d7b-495b-886d-a10338ee210f";

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between relative">
        <Link href="/" className="py-4">
          <span className="text-2xl font-extrabold text-[#010101]" style={{ fontFamily: "var(--font-bricolage)" }}>Peter </span>
          <span className="text-2xl font-extrabold gradient-warm" style={{ fontFamily: "var(--font-bricolage)" }}>Lee</span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
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

function InsightCard({ title, accent, accentColor, children }: {
  title: string; accent: string; accentColor: string; children: React.ReactNode
}) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[20px] flex-1 min-w-[220px] max-w-[286px] p-6 flex flex-col gap-3"
      style={{ boxShadow: "0 0 20px rgba(0,0,0,0.04)" }}>
      <p className="text-[#010101] text-2xl font-bold" style={{ fontFamily: "var(--font-bricolage)" }}>{title}</p>
      <div className="text-[#6b7280] text-lg leading-7 flex-1" style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>{children}</div>
      <span className="text-lg font-extrabold" style={{ fontFamily: "var(--font-jetbrains)", color: accentColor }}>{accent}</span>
    </div>
  );
}

export default function ContentDial() {
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

        {/* Hero */}
        <section className="w-full max-w-[1200px] flex flex-col gap-16">
          {/* Hero image */}
          <div className="w-full rounded-[10px] md:rounded-[30px] overflow-hidden" style={{ background: "linear-gradient(90deg, #4fc3ff, #7c5cff 73.792%)", aspectRatio: "1200/835" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgHero} alt="ContentDial hero" className="w-full h-full object-cover rounded-[10px] md:rounded-[30px]" />
          </div>

          {/* Eyebrow + headline */}
          <div className="flex flex-col gap-7">
            <span className="text-[#7c5cff] text-lg tracking-[2px]"
              style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>
              AI - POWERED SAAS PRODUCT
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
              style={{ fontFamily: "var(--font-bricolage)" }}>
              {`Increased advertiser `}
              <span className="gradient-warm">ROI by 32%</span>
              {` by transforming manual content workflow into an AI-driven decision platform`}
            </h1>
            <p className="text-[#6a6a6a] text-xl leading-7 max-w-[900px] tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}>
              Transformed branded content from a manual, high-touch service into a scalable, data-driven product, enabling advertisers to make smarter decisions and drive measurable performance - driving higher ROI, engagement, and campaign efficiency.
            </p>
          </div>

          {/* Impact stat cards */}
          <div className="flex flex-wrap gap-4">
            <StatCard value="65%" label="AI Recommendation Adoption" gradient="gradient-warm" />
            <StatCard value="32%" label="Increase in ROI" gradient="gradient-cool" />
            <StatCard value="8%" label="Brand awareness lift" gradient="gradient-warm-reverse" />
            <StatCard value="100s hrs" label="Saved per Campaign" gradient="gradient-cool" />
          </div>

          {/* Project details */}
          <div className="flex flex-wrap gap-4">
            {[
              { label: "COMPANY", value: "Triplelift" },
              { label: "ROLE", value: "Lead UX Designer" },
              {
                label: "TEAM",
                value: "1 UX designer\n4 developers\nCEO\nCTO\nGeneral Manager\n1 Product Manager"
              },
              { label: "TIMELINE", value: "9 Weeks" },
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
            {`Branded content was `}
            <span className="gradient-cool">expensive, manual, and impossible to scale</span>
          </h2>
          <div className="text-[#6a6a6a] text-lg leading-7 max-w-[780px] flex flex-col gap-0"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            <p>Advertisers lacking clear insight into which publisher partnerships and content strategies would perform - resulting in inefficient spend, fragmented workflows, and inconsistent campaign outcomes.</p>
            <p className="mt-4">Three core problems made the category structurally broken:</p>
          </div>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">Zero visibility into publisher performance. Advertisers selected partners on reputation and gut feel - not data - leading to misaligned expectations and inconsistent results.</NumberedItem>
            <NumberedItem n="02">Campaign execution required heavy manual coordination across teams</NumberedItem>
            <NumberedItem n="03">Poor predictability led to wasted spend and inconsistent ROI</NumberedItem>
          </div>
          <p className="text-[#7c5cff] text-2xl font-bold max-w-[780px] leading-normal"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            The opportunity was clear: if prediction and usability could be solved simultaneously, branded content could become a repeatable, scalable growth channel.
          </p>
        </section>

        {/* Role & Leadership */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>ROLE &amp; LEADERSHIP</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            {`Define the product experience from `}
            <span className="gradient-warm">zero to launch</span>
          </h2>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">Led end-to-end research and design across planning, launch, and optimization phases</NumberedItem>
            <NumberedItem n="02">Partnered with cross-functional leadership to translate ML capabilities into usable decision-making workflows</NumberedItem>
            <NumberedItem n="03">Shaped product direction and influenced go-to-market positioning based on user research and competitive insights</NumberedItem>
            <NumberedItem n="04">{`Defined the design system and experience principles that governed the platform's visual and interaction language`}</NumberedItem>
          </div>
        </section>

        {/* Insight & Research */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>INSIGHT &amp; RESEARCH</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            {`The problem wasn't content creation— it was `}
            <span className="gradient-cool">decision uncertainty</span>
          </h2>
          <p className="text-[#7c5cff] text-2xl font-bold max-w-[780px] leading-normal"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            {`Prediction + usability = unlock scale. Advertisers don't need more data, they need clear, trustworthy signals at the moment of decision."`}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <InsightCard title="User needs" accent="10 Customers" accentColor="#7c5cff">
              Confidence, efficiency, and measurable impact were the main themes that emerged from our customer feedback research.
            </InsightCard>
            <InsightCard title="Content Creation Time" accent="45% Coordination" accentColor="#ff6b9a">
              Teams spent 40% of their time on coordination and status updates rather than actual content creation.
            </InsightCard>
            <InsightCard title="AI Trust Barrier" accent="72% engaged with AI rationale" accentColor="#7c5cff">
              AI must be explainable, transparent, and augment (not replace) human judgment.
            </InsightCard>
            <InsightCard title="ROI Visibility" accent="78% Unclear ROI" accentColor="#4fc3ff">
              {`78% of users couldn't articulate the ROI their content marketing was generating—a key retention issue.`}
            </InsightCard>
          </div>
          {/* Research image */}
          <div className="w-full rounded-[10px] md:rounded-[30px] overflow-hidden" style={{ aspectRatio: "1175/701" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgResearch} alt="Research findings" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Strategy & Approach */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>STRATEGY &amp; APPROACH</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            {`Shift from execution tool to `}
            <span className="gradient-warm">decision engine</span>
          </h2>
          <div className="text-[#6a6a6a] text-lg leading-7 max-w-[780px] flex flex-col gap-0"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            <p>The strategic pivot was fundamental: stop designing a content management tool and start designing a platform for confident, data-backed decisions</p>
            <p className="mt-4">Key strategic moves:</p>
          </div>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">Surface ML predictions as clear, actionable recommendations</NumberedItem>
            <NumberedItem n="02">Design workflows around campaign lifecycle (plan, launch, optimize)</NumberedItem>
            <NumberedItem n="03">Enable real-time optimization, not post-campaign reporting</NumberedItem>
            <NumberedItem n="04">Reduce friction between advertisers and publishers</NumberedItem>
          </div>
          {/* Strategy image */}
          <div className="w-full rounded-[20px] overflow-hidden border border-[#a3a3a3]" style={{ aspectRatio: "777/532" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgStrategy} alt="Strategy diagram" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Key Solutions */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10">
          <SectionLabel>KEY SOLUTIONS</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            Four{" "}
            <span className="gradient-cool">high-leverage</span>
            {" design decisions"}
          </h2>
          <div className="flex flex-col gap-6">
            <NumberedItem n="01">
              <div>
                <p className="mb-2">Predictive Partner Matching</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ML models scored publisher/content combinations</li>
                  <li>Designers translated outputs into ranked, confidence-based recommendations</li>
                </ul>
              </div>
            </NumberedItem>
            <NumberedItem n="02">Design workflows around campaign lifecycle (plan, launch, optimize)</NumberedItem>
            <NumberedItem n="03">Enable real-time optimization, not post-campaign reporting</NumberedItem>
            <NumberedItem n="04">Reduce friction between advertisers and publishers</NumberedItem>
          </div>
          {/* Screen shots */}
          <div className="flex flex-col gap-8">
            <div className="w-full rounded-[10px] md:rounded-[30px] overflow-hidden" style={{ aspectRatio: "1200/886", boxShadow: "0 0 30px rgba(0,0,0,0.25)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgScreen1} alt="ContentDial screen 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-full rounded-[10px] md:rounded-[30px] overflow-hidden" style={{ aspectRatio: "1200/895", boxShadow: "0 0 30px rgba(0,0,0,0.25)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgScreen2} alt="ContentDial screen 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-full rounded-[10px] md:rounded-[30px] overflow-hidden" style={{ aspectRatio: "1200/1434", boxShadow: "0 0 30px rgba(0,0,0,0.25)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgScreen3} alt="ContentDial screen 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-full rounded-[10px] md:rounded-[30px] overflow-hidden" style={{ aspectRatio: "1200/1434", boxShadow: "0 0 30px rgba(0,0,0,0.25)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgScreen4} alt="ContentDial screen 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="w-full max-w-[1200px] flex flex-col gap-10 pb-32">
          <SectionLabel>IMPACT</SectionLabel>
          <h2 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}>
            {`Branded content became `}
            <span className="gradient-warm">{`predictable, scalable, and defensible`}</span>
          </h2>
          <p className="text-[#6a6a6a] text-lg leading-7 max-w-[780px]"
            style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}>
            ContentDial moved TripleLift from a content delivery vendor to a strategic intelligence engine. The outcomes spanned performance metrics, operational efficiency, enhanced customer experience, and strengthened competitive positioning.
          </p>
          <div className="flex flex-wrap gap-4">
            <StatCard value="52%" label="Increase in activation" gradient="gradient-warm" />
            <StatCard value="24%" label="Lift In Engagement" gradient="gradient-cool" />
            <StatCard value="45%" label="Reduced Campaign Setup Time" gradient="gradient-warm-reverse" />
            <StatCard value="28%" label="Reduced Wasted Ad Spend" gradient="gradient-cool" />
          </div>
        </section>
        {/* Next Case Study */}
        <section className="w-full max-w-[1200px] flex flex-col items-center gap-6 pb-24">
          <span className="text-[#a3a3a3] text-sm tracking-[2px]" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>NEXT CASE STUDY</span>
          <Link
            href="/priceline"
            className="flex items-center gap-3 px-10 py-5 rounded-full border-2 border-[#7c5cff] text-[#7c5cff] text-xl font-medium hover:bg-[#7c5cff] hover:text-white transition-colors duration-200"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Priceline — E-Commerce Redesign
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
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}
