import ClockLoader from "./components/ClockLoader";
import GlassNav from "./components/GlassNav";
import FrameHero from "@/components/patterns/FrameHero";
import CollectionCase from "./components/CollectionCase";
import MaskReveal from "./components/MaskReveal";
import Specsheet from "./components/Specsheet";
import PrivilegeBento from "./components/PrivilegeBento";
import Boutiques from "./components/Boutiques";
import CareFaq from "./components/CareFaq";
import MeridianFooter from "./components/MeridianFooter";
import { FRAMES, nav, hero } from "./content";

const LOADER_FRAMES = [FRAMES]; // preloaded behind the frozen loader with &at=

const ICON = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#1d1a16"/><text x="16" y="22" font-family="serif" font-size="20" font-style="italic" fill="#c89a74" text-anchor="middle">L</text></svg>'
)}`;

/** Meridian: a printed horology catalogue. Plan + reasons: site/DESIGN.md. */
export default function Page() {
  return (
    <>
      {/* ?record=1: hide the mouse arrow from the very first frame (before React and RecordMode load) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `if(/[?&]record/.test(location.search)){var s=document.createElement("style");s.textContent="*,*::before,*::after{cursor:none!important}html{scrollbar-width:none}html::-webkit-scrollbar{display:none}";document.head.appendChild(s)}`,
        }}
      />
      {/* Site icon (React hoists it into <head>): a small bronze clock */}
      <link rel="icon" type="image/svg+xml" href={ICON} />
      <GlassNav {...nav} />
      <main>
        <FrameHero
          first
          s={{
            type: "frameHero",
            frames: FRAMES,
            title: hero.title,
            eyebrow: hero.eyebrow,
            subtitle: hero.text,
            buttons: hero.buttons,
            featured: hero.featured,
            length: 4,
            captions: [
              { 
                eyebrow: "01 / / THE ENTRANCE",
                title: "Welcome Home", 
                text: "Every journey begins with a beautifully designed entrance that sets the tone for everything beyond.", 
                at: 0.2412, 
                duration: 0.1535, 
                position: "left" 
              },
              { 
                eyebrow: "02 // LIVING SPACE",
                title: "Designed For Living", 
                text: "Open spaces, natural materials, handcrafted furniture, and carefully balanced lighting create timeless interiors.", 
                at: 0.4166, 
                duration: 0.0877, 
                position: "left",
                stats: [
                  { value: "250+", label: "COMPLETED PROJECTS" },
                  { value: "18", label: "YEARS EXPERIENCE" },
                  { value: "12", label: "DESIGN AWARDS" },
                  { value: "98%", label: "CLIENT SATISFACTION" }
                ]
              },
              { 
                eyebrow: "03 // THE CULINARY SUITE",
                title: "Beauty Meets Function", 
                text: "Every surface, every texture, and every detail is thoughtfully designed to make daily life effortless.", 
                at: 0.5701, 
                duration: 0.0877, 
                position: "right" 
              },
              {
                eyebrow: "04 // YOUR SANCTUARY AWAITS",
                title: "Your Dream Starts Here",
                text: "Transform your vision into an extraordinary living experience crafted with architectural perfection.",
                at: 0.7236,
                duration: 0.1929,
                position: "center",
                button: { label: "SCHEDULE CONSULTATION", href: "#contact" }
              }
            ],
          }}
        />
        <CollectionCase />
        <MaskReveal />
        <Specsheet />
        <PrivilegeBento />
        <Boutiques />
        <CareFaq />
      </main>
      <MeridianFooter />
    </>
  );
}
