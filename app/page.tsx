import { HeroSection } from "@/components/sections/hero-section";
import { SideProjectsSection } from "@/components/sections/side-projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { StoriesSection } from "@/components/sections/stories-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WorkExperienceSection } from "@/components/sections/work-experience-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <WorkExperienceSection />
        <SideProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <StoriesSection />
      </main>
      <SiteFooter />
    </div>
  );
}
