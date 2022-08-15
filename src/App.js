import AboutMeSection from "./components/about/AboutMeSection";
import ContactSection from "./components/contact/ContactSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import HeroSection from "./components/hero/HeroSection";
import SkillsSection from "./components/skills/SkillsSection";

function App() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

export default App;
