import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "cancer-cell-counter",
    title: "Cancer Cell Counter",
    description:
      "A Deep Learning model to count cancer cells in microscope images. Modified ResNet-34 architecture with a single output neuron for regression. Achieved RMSE Loss of 0.98 and secured Runner-Up position in the competition.",
    techStack: ["Python", "PyTorch", "ResNet-34", "Deep Learning", "Image Processing"],
    githubUrl: "https://github.com/pranjalisakure",
    image: "/projects/cancer-cell.jpg",
    featured: true,
    highlights: [
      {
        icon: "Sparkles",
        label: "ResNet-34 Architecture",
        detail: "Modified with single output neuron for cell count regression",
      },
      {
        icon: "ShieldCheck",
        label: "RMSE Loss: 0.98",
        detail: "High accuracy on microscope image datasets",
      },
      {
        icon: "Zap",
        label: "Runner-Up Position",
        detail: "Awarded runner-up in the competition",
      },
      {
        icon: "Users",
        label: "Image Preprocessing",
        detail: "Normalization and center cropping pipeline",
      },
    ],
  },
  {
    id: "backorder-determination",
    title: "Backorder Prediction",
    description:
      "A Machine Learning system to predict if a product will go on Backorder. Trained Random Forest on a highly imbalanced dataset of 1.6M records without oversampling. Achieved cross-validated recall score of 0.83 using Feature Importance for critical insights.",
    techStack: ["Python", "Random Forest", "Scikit-learn", "Pandas", "Feature Engineering"],
    githubUrl: "https://github.com/pranjalisakure",
    image: "/projects/backorder.jpg",
    featured: true,
  },
  {
    id: "iot-water-quality",
    title: "IoT Water Quality Monitor",
    description:
      "Research project on an Enhanced IoT-Based Water Quality Monitoring System. Presented as a research paper at RBUCON'25 — International Conference on Future Computing Technologies, Ramdeobaba University.",
    techStack: ["IoT", "Sensors", "Data Analysis", "Python", "Research"],
    image: "/projects/water-quality.jpg",
    featured: false,
  },
  {
    id: "coming-soon-1",
    title: "Coming Soon",
    description:
      "An exciting new AI/ML project is currently in development. Stay tuned for updates.",
    techStack: ["???"],
    image: "/projects/placeholder.jpg",
    featured: false,
    disabled: true,
  },
];