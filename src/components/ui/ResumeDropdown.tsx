"use client";

import { useState, useRef, useEffect } from "react";
import { Download, ChevronDown, FileText } from "lucide-react";
import { resumeOptions } from "~/data/resumes";
import { cn } from "~/lib/cn";

interface ResumeDropdownProps {
  variant?: "navbar" | "cta" | "mobile";
}

export function ResumeDropdown({ variant = "navbar" }: ResumeDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  if (variant === "mobile") {
    return (
      <div className="px-4 py-2">
        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2 font-medium">
          Download Resume
        </p>
        <div className="space-y-1">
          {resumeOptions.map((option) => (
             <a
              key={option.role}
              href={option.url}
              download
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
            >
              <span className="text-base leading-none">{option.icon}</span>
              <div className="flex-1">
                <p className="font-bold text-sm">{option.label}</p>
                <p className="text-xs text-zinc-600 mt-0.5">{option.description}</p>
              </div>
              <Download size={13} className="shrink-0" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-1.5 font-medium transition-all duration-300",
          variant === "navbar"
            ? "px-3 py-1.5 text-sm rounded-xl text-red-400 hover:bg-red-500/10"
            : "inline-flex justify-center gap-2 px-8 py-3.5 text-sm text-red-400 rounded-lg border border-red-500/25 bg-red-500/[0.06] hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-300"
        )}
      >
        {variant === "cta" && <FileText size={18} />}
        Resume
        <ChevronDown
          size={14}
          className={cn(
            "transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div
          className={cn(
            "absolute mt-2 w-64 rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-black/60 z-50 overflow-hidden",
            variant === "cta"
              ? "left-1/2 -translate-x-1/2"
              : "right-0"
          )}
        >
          <div className="px-4 py-3 border-b border-zinc-800/80">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Select role resume
            </p>
          </div>
          <div className="p-2">
            {resumeOptions.map((option) => (
               <a
                key={option.role}
                href={option.url}
                download
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors group cursor-pointer"
              >
                <span className="text-lg leading-none">{option.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                    {option.label}
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5 truncate">
                    {option.description}
                  </p>
                </div>
                <Download
                  size={13}
                  className="text-zinc-600 group-hover:text-red-400 transition-colors shrink-0"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}