import Link from "next/link";
import GradientBackground from "@/components/GradientBackground";
import BackToTop from "@/components/BackToTop";
import MobileNav from "@/components/MobileNav";

const assets = {
  hhCard: "/images/hh-card.png",
  contentDialCard: "/images/contentdial-card.png",
  pricelineCard: "/images/priceline-card.png",
  verizon: "/logos/verizon.png",
  kargo: "/logos/kargo.png",
  citibank: "/logos/citibank.png",
  priceline: "/logos/priceline.png",
  triplelift: "/logos/triplelift.png",
  headshot: "/images/headshot.png",
};

const warmGradient = "linear-gradient(90deg, #7c5cff 19.231%, #ff6b9a 57.212%, #ffb070 87.019%)";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-6">
      <div className="h-px w-8" style={{ background: warmGradient }} />
      <span
        className="text-[#7c5cff] text-sm tracking-[2px] whitespace-nowrap"
        style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 600 }}
      >
        {children}
      </span>
      <div className="h-px w-8" style={{ background: warmGradient }} />
    </div>
  );
}

function SectionLabelLeft({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px w-8" style={{ background: warmGradient }} />
      <span
        className="text-[#7c5cff] text-sm tracking-[2px] whitespace-nowrap"
        style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}
      >
        {children}
      </span>
    </div>
  );
}

function ViewCaseStudyButton({ href }: { href?: string }) {
  const className = "flex items-center justify-center gap-2 border-2 border-[#7c5cff] text-[#7c5cff] text-base md:text-xl font-medium hover:bg-[#7c5cff] hover:text-white transition-colors duration-200 cursor-pointer shrink-0 w-full md:w-[320px]";
  const style = { fontFamily: "var(--font-jakarta)", height: 56, borderRadius: 50 };
  const inner = (
    <>
      View Case Study
      <svg width="28" height="15" viewBox="0 0 28 15" fill="none" aria-hidden="true">
        <path d="M0 7.5H26M26 7.5L20 1M26 7.5L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </>
  );
  return href
    ? <Link href={href} className={className} style={style}>{inner}</Link>
    : <button className={className} style={style}>{inner}</button>;
}

const pillStyles = {
  gray:       { background: "#ffffff", border: "1px solid #e0d4ff", color: "#4a2ea8" },
  "pink-blue":   { background: "linear-gradient(90deg, #ffe4f0, #ddf4ff)", border: "none", color: "#7c3a6b" },
  "blue-purple": { background: "linear-gradient(90deg, #ddf4ff, #ede4ff)", border: "none", color: "#2e5d8a" },
};

function CapabilityPill({ label, variant = "gray" }: { label: string; variant?: keyof typeof pillStyles }) {
  const s = pillStyles[variant];
  return (
    <div
      className="rounded-full px-6 py-3 text-base font-medium whitespace-nowrap"
      style={{ fontFamily: "var(--font-jakarta)", background: s.background, border: s.border, color: s.color }}
    >
      {label}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      <GradientBackground />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between relative">
          <a href="#" className="py-2">
            <span
              className="text-2xl font-extrabold text-[#010101]"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Peter{" "}
            </span>
            <span
              className="text-2xl font-extrabold gradient-warm"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Lee
            </span>
          </a>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {["Work", "About", "Philosophy"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-4 py-3 text-[#6b7280] text-base tracking-wide hover:text-[#010101] transition-colors"
                style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-6 py-3 bg-black text-white rounded-full text-base tracking-wide hover:bg-[#7c5cff] transition-colors"
              style={{ fontFamily: "var(--font-jakarta)", fontWeight: 600 }}
            >
              Contact
            </a>
          </div>
          {/* Mobile hamburger */}
          <MobileNav />
        </div>
      </nav>

      <main className="flex flex-col items-center gap-20 md:gap-40 px-4 md:px-8 pb-0">

        {/* Hero */}
        <section className="w-full max-w-[1200px] flex flex-col gap-8 md:gap-16 pt-20 md:pt-36">
          <h1
            className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.15]"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Hi, I&apos;m an{" "}
            <span className="gradient-warm">Agentic AI Design Lead</span>
            {" "}- I drive business results by shaping product strategy, leading high-performing design teams, and solving complex challenges at the intersection of user needs and organizational goals.
          </h1>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {[
              { label: "Agentic AI Design", cls: "gradient-warm" },
              { label: "Product Design", cls: "gradient-cool" },
              { label: "Product Strategy", cls: "gradient-warm" },
              { label: "Business Impact", cls: "gradient-warm" },
            ].map(({ label, cls }) => (
              <div
                key={label}
                className="border border-[#d8d8d8] rounded-full px-6 md:px-10 py-3 md:py-5 flex items-center justify-center bg-white"
              >
                <span
                  className={`text-lg md:text-2xl font-semibold ${cls}`}
                  style={{ fontFamily: "var(--font-bricolage)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="w-full max-w-[1200px] flex flex-col gap-8 md:gap-16">
          <div className="flex justify-center">
            <SectionLabel>FEATURED WORK</SectionLabel>
          </div>

          {/* Card 1 — Hiring Hall */}
          <div
            className="w-full rounded-[24px] md:rounded-[33px] px-5 py-8 md:px-12 md:py-16 flex flex-wrap gap-6 md:gap-8 items-center"
            style={{
              background: "linear-gradient(119deg, #f8feff 44.85%, #f2e0f8 97.74%)",
              boxShadow: "0 0 35px rgba(63,0,141,0.16)",
            }}
          >
            <div className="w-full md:flex-1 md:min-w-[280px] md:max-w-[480px] h-[260px] md:h-[480px] relative rounded-[10px] md:rounded-[33px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.hhCard} alt="Hiring Hall app" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-[260px] max-w-[600px] flex flex-col gap-4 md:gap-5">
              <span className="text-[#7c5cff] text-sm md:text-base tracking-widest px-2" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>
                B2C CONTECH APP
              </span>
              <h2
                className="text-[clamp(1.5rem,3.5vw,2.9rem)] font-bold leading-[1.1] px-2 text-[#010101]"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Networking and hiring platform for commercial construction
              </h2>
              <p className="text-[#6b7280] text-lg md:text-2xl px-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                Hiring Hall | Founder
              </p>
              <div className="h-2 md:h-4" />
              <div className="flex items-end justify-between">
                <div className="flex flex-col items-center gap-1 pl-2">
                  <span className="text-[3rem] md:text-[4.5rem] font-bold leading-none gradient-warm" style={{ fontFamily: "var(--font-bricolage)" }}>24%</span>
                  <span className="text-[#6b7280] text-base md:text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>Adoption rate</span>
                </div>
                <div className="flex flex-col items-end gap-1 pr-2">
                  <span className="text-[3rem] md:text-[4.5rem] font-bold leading-none gradient-cool" style={{ fontFamily: "var(--font-bricolage)" }}>5%</span>
                  <span className="text-[#6b7280] text-base md:text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>MoM revenue</span>
                </div>
              </div>
              <div className="mt-3 md:mt-4">
                <ViewCaseStudyButton href="/hiring-hall" />
              </div>
            </div>
          </div>

          {/* Card 2 — ContentDial */}
          <div
            className="w-full rounded-[24px] md:rounded-[33px] px-5 py-8 md:px-12 md:py-16 flex flex-wrap gap-6 md:gap-8 items-center"
            style={{
              background: "linear-gradient(120deg, #f8feff 44.85%, #f2e0f8 97.74%)",
              boxShadow: "0 0 35px rgba(63,0,141,0.16)",
            }}
          >
            <div className="flex-1 min-w-[260px] max-w-[600px] flex flex-col gap-4">
              <span className="text-[#7c5cff] text-sm md:text-base tracking-widest px-2" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>
                AI-POWERED SAAS PRODUCT
              </span>
              <h2
                className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-bold leading-[1.1] px-2 text-[#010101]"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Built 0-1 AI-Powered Branded Content Intelligence System
              </h2>
              <p className="text-[#6b7280] text-lg md:text-2xl px-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                ContentDial | Lead Product Designer
              </p>
              <div className="h-2 md:h-4" />
              <div className="flex items-end justify-between">
                <div className="flex flex-col items-center gap-1 pl-2">
                  <span className="text-[3rem] md:text-[4.5rem] font-bold leading-none gradient-warm" style={{ fontFamily: "var(--font-bricolage)" }}>15%</span>
                  <span className="text-[#6b7280] text-base md:text-lg text-center" style={{ fontFamily: "var(--font-jakarta)" }}>Campaign ROI<br />Improvement</span>
                </div>
                <div className="flex flex-col items-end gap-1 pr-2">
                  <span className="text-[3rem] md:text-[4.5rem] font-bold leading-none gradient-cool" style={{ fontFamily: "var(--font-bricolage)" }}>27%</span>
                  <span className="text-[#6b7280] text-base md:text-lg text-right" style={{ fontFamily: "var(--font-jakarta)" }}>Reduced<br />Wasted Spend</span>
                </div>
              </div>
              <div className="hidden md:block mt-4">
                <ViewCaseStudyButton href="/contentdial" />
              </div>
            </div>
            <div className="w-full md:flex-1 md:min-w-[280px] md:max-w-[500px] h-[260px] md:h-[480px] relative rounded-[10px] md:rounded-[33px] overflow-hidden border-2 border-[#aadedb]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.contentDialCard} alt="ContentDial dashboard" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="w-full md:hidden">
              <ViewCaseStudyButton href="/contentdial" />
            </div>
          </div>

          {/* Card 3 — Priceline */}
          <div
            className="w-full rounded-[24px] md:rounded-[33px] px-5 py-8 md:px-12 md:py-16 flex flex-wrap gap-6 md:gap-8 items-center"
            style={{
              background: "linear-gradient(120deg, #f8feff 44.85%, #f2e0f8 97.74%)",
              boxShadow: "0 0 35px rgba(63,0,141,0.16)",
            }}
          >
            <div className="w-full md:flex-1 md:min-w-[280px] md:max-w-[500px] h-[260px] md:h-[480px] relative rounded-[10px] md:rounded-[33px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.pricelineCard} alt="Priceline redesign" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-[260px] max-w-[600px] flex flex-col gap-4">
              <span className="text-[#7c5cff] text-sm md:text-base tracking-widest px-2" style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}>
                B2C E-COMMERCE
              </span>
              <h2
                className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-bold leading-[1.1] px-2 text-[#010101]"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Redesign desktop and mobile web and e-commerce products
              </h2>
              <p className="text-[#6b7280] text-lg md:text-2xl px-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                Priceline | UX/UI Creative Director
              </p>
              <div className="h-2 md:h-4" />
              <div className="flex items-end justify-between">
                <div className="flex flex-col items-center gap-1 pl-2">
                  <span className="text-[3rem] md:text-[4.5rem] font-bold leading-none gradient-cool" style={{ fontFamily: "var(--font-bricolage)" }}>4.9%</span>
                  <span className="text-[#6b7280] text-base md:text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>Conversion Increase</span>
                </div>
                <div className="flex flex-col items-end gap-1 pr-2">
                  <span className="text-[3rem] md:text-[4.5rem] font-bold leading-none gradient-warm" style={{ fontFamily: "var(--font-bricolage)" }}>6pt</span>
                  <span className="text-[#6b7280] text-base md:text-lg text-right" style={{ fontFamily: "var(--font-jakarta)" }}>Lift In Customer<br />Satisfaction</span>
                </div>
              </div>
              <div className="mt-3 md:mt-4">
                <ViewCaseStudyButton href="/priceline" />
              </div>
            </div>
          </div>
        </section>

        {/* Logo strip */}
        <section className="w-full max-w-[1200px] flex flex-col gap-8 md:gap-10">
          <div className="h-px w-full bg-[#e5e7eb]" />
          <div className="flex flex-col md:flex md:flex-row md:justify-between items-center w-full gap-8 md:gap-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.verizon} alt="Verizon" className="h-6 md:h-8 object-contain" style={{ mixBlendMode: "multiply" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.kargo} alt="Kargo" className="h-8 md:h-10 object-contain" style={{ mixBlendMode: "multiply" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.citibank} alt="Citibank" className="h-7 md:h-9 object-contain" style={{ mixBlendMode: "multiply" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.priceline} alt="Priceline" className="h-8 md:h-10 object-contain" style={{ mixBlendMode: "multiply" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.triplelift} alt="TripleLift" className="h-6 md:h-8 object-contain" style={{ mixBlendMode: "multiply" }} />
          </div>
          <div className="h-px w-full bg-[#e5e7eb]" />
        </section>

        {/* About Me */}
        <section id="about" className="w-full max-w-[1200px] flex flex-col gap-6 md:gap-8">
          <SectionLabelLeft>ABOUT ME</SectionLabelLeft>
          <div className="h-4" />

          <h2
            className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.2]"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            I&apos;m a hands-on, strategic design thinker helping organizations deliver experiences that{" "}
            <span className="gradient-warm-reverse">
              drive revenue, improve growth, and create lasting customer value.
            </span>
          </h2>

          <div className="flex flex-wrap gap-8 md:gap-16 items-center justify-between mt-2 md:mt-4">
            <p
              className="flex-1 min-w-[260px] max-w-[680px] text-[#4a5266] text-base md:text-lg leading-7"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              My work spans complex environments, including AI-driven products, B2B & B2C platforms,
              SaaS, and multi-product ecosystems across mobile and web. I design products, systems,
              and user-centered experiences that compound value beyond a single launch. I ensure
              design drives business success while empowering teams to solve meaningful problems at scale.
            </p>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 mx-auto md:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.headshot} alt="Peter Lee" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Core capabilities */}
          <div className="flex flex-col gap-4 mt-4 max-w-[700px]">
            <span
              className="text-[#a3a3a3] text-base tracking-widest px-2"
              style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 500 }}
            >
              CORE CAPABILITIES
            </span>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Product Design",            variant: "pink-blue"   },
                { label: "AI Product Strategy",       variant: "blue-purple" },
                { label: "Generative AI UX",          variant: "blue-purple" },
                { label: "Design Leadership",         variant: "pink-blue"   },
                { label: "Agentic Experience Design", variant: "gray"        },
                { label: "UX Research",               variant: "gray"        },
                { label: "Design Thinking",           variant: "pink-blue"   },
                { label: "User-centered Design",      variant: "blue-purple" },
                { label: "Systems Thinking",          variant: "gray"        },
                { label: "Interaction Design",        variant: "blue-purple" },
                { label: "UI Design",                 variant: "pink-blue"   },
                { label: "A/B Testing",               variant: "gray"        },
                { label: "Rapid Prototyping",         variant: "blue-purple" },
                { label: "Usability Testing",         variant: "pink-blue"   },
              ].map(({ label, variant }) => (
                <CapabilityPill key={label} label={label} variant={variant as "gray" | "pink-blue" | "blue-purple"} />
              ))}
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section id="philosophy" className="w-full max-w-[1200px] flex flex-col gap-8 md:gap-14 pb-16 md:pb-32">
          <div className="flex justify-center">
            <SectionLabel>DESIGN PHILOSOPHY</SectionLabel>
          </div>

          <div className="flex flex-col gap-10 items-center">
            <h2
              className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.2] text-center"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              I believe great design is measured by the{" "}
              <span className="gradient-warm">value it drives for users and the business,</span>{" "}
              <span className="gradient-warm">not outputs.</span>
            </h2>

            <div
              className="max-w-[900px] text-[#4a5266] text-lg leading-7 tracking-wide space-y-5 w-full"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              <p>
                Design, at its best, is a business decision. I work at the intersection of product
                vision and organizational influence — identifying where the market is going, making
                hard prioritization calls, and ensuring the team has the clarity and confidence to execute.
              </p>
              <p>
                Building great design orgs is the job. I hire for judgment, not just craft. I develop
                leaders who can hold their own in any room — with engineers, executives, or customers —
                and I build cultures where critical thinking and data-informed decision-making are the
                norm, not the exception.
              </p>
              <p>
                The work only matters if it moves the needle. I partner closely with product, engineering,
                and executive leadership to make sure design isn&apos;t just at the table — it&apos;s
                shaping the direction. Success is defined by outcomes: what shipped, how it performed,
                and the measurable impact it created for the users and business.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Contact footer */}
      <footer id="contact" className="bg-black w-full flex justify-center px-4 md:px-8 mt-12 md:mt-24">
        <div className="w-full max-w-[1200px] py-12 md:py-20 flex flex-col gap-8 md:gap-16">
          <div className="flex items-center gap-4">
            <div className="h-px w-8" style={{ background: warmGradient }} />
            <span
              className="text-[#f0f0f0] text-sm tracking-[2px]"
              style={{ fontFamily: "var(--font-jetbrains)", fontWeight: 700 }}
            >
              CONTACT
            </span>
          </div>

          <h2
            className="text-white text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.2] max-w-[680px]"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Let&apos;s build something great together.
          </h2>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="mailto:peterlee01@gmail.com"
              className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full text-white text-sm md:text-base font-medium hover:opacity-90 transition-opacity"
              style={{
                fontFamily: "var(--font-jakarta)",
                background: "linear-gradient(90deg, #7c5cff 19.231%, #ff6b9a 57.212%, #ffb070 87.019%)",
              }}
            >
              peterlee01@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/pldesigns/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full text-white text-sm md:text-base font-medium hover:opacity-90 transition-opacity"
              style={{
                fontFamily: "var(--font-jakarta)",
                background: "linear-gradient(90deg, #4fc3ff, #7c5cff 73.792%)",
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}
