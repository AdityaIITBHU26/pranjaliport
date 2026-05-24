"use client";

import { ResumeDropdown } from "~/components/ui/ResumeDropdown";
import { AnimatedSection } from "~/components/ui/AnimatedSection";

export function ResumeCTA() {
  return (
    <AnimatedSection className="text-center">
      <div className="mx-auto max-w-3xl rounded-2xl p-10 md:p-14 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] relative overflow-hidden">
        {/* Subtle bottom accent glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fafafa]">
            Want to know more<span className="text-red-400">?</span>
          </h2>
          <p className="mt-4 text-[#a1a1aa] text-lg">
            Download my resume for a detailed look at my experience, skills,
            and education.
          </p>
          <div className="mt-8">
          <ResumeDropdown variant="cta" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
