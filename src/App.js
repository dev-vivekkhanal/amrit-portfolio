import AboutMeSection from "./components/about/AboutMeSection";
import ContactSection from "./components/contact/ContactSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import HeroSection from "./components/hero/HeroSection";
import SkillsSection from "./components/skills/SkillsSection";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { useState } from "react";

function App() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="relative cursor-default">
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection
        success={success}
        setSuccess={setSuccess}
        error={error}
        setError={setError}
      />
      {/* Snackbar */}
      <div className="fixed bottom-5 right-5 z-50">
        {success && (
          <div className="text-[#00ac69] bg-[#f6f4f4] p-5 rounded-xl flex justify-center items-center gap-5 transition-all">
            <span>
              <CheckCircleOutlineRoundedIcon />
            </span>
            <span>Message sent sucessfully</span>
          </div>
        )}

        {error && (
          <div className="text-[#ac0000] bg-[#f6f4f4] p-5 rounded-xl flex justify-center items-center gap-5 transition-all">
            <span>
              <ErrorOutlineRoundedIcon />
            </span>
            <span>Something went wrong, please try again.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
