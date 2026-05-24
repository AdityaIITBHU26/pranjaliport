export interface ResumeOption {
  label: string;
  role: string;
  description: string;
  url: string;
  icon: string;
}

export const resumeOptions: ResumeOption[] = [
  {
    label: "Data Analyst",
    role: "DA",
    description: "SQL · Power BI · Visualization",
    url: "/resumes/resume-da.pdf",
    icon: "📊",
  },
  {
    label: "Data Scientist",
    role: "DS",
    description: "Statistics · ML Models · Python",
    url: "/resumes/resume-ds.pdf",
    icon: "🔬",
  },
  {
    label: "AI / ML Engineer",
    role: "AI",
    description: "Deep Learning · NLP · Model Training",
    url: "/resumes/resume-aiml.pdf",
    icon: "🤖",
  },
  {
    label: "SDE / Backend",
    role: "SDE",
    description: "Python · Flask · APIs · Databases",
    url: "/resumes/resume-sde.pdf",
    icon: "💻",
  },
];