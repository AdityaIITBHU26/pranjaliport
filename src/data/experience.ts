import { Experience } from "~/types/data";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Prodigy InfoTech",
    role: "Machine Learning Intern",
    period: "Dec 2025",
    location: "Remote",
    highlights: [
      "Customer Segmentation Analysis: Engineered a K-Means clustering model to group mall customers based on annual income and spending scores; utilized the Elbow Method to identify optimal clusters for personalized marketing strategies.",
      "Image Classification (SVM): Implemented a Support Vector Machine to classify images using Histogram of Oriented Gradients (HOG) features; analyzed confidence scores to evaluate AI perception versus human visual interpretation.",
    ],
    techUsed: ["Python", "Scikit-learn", "K-Means", "SVM", "HOG", "Pandas", "NumPy"],
  },
  {
    id: "exp-2",
    company: "Navodita Infotech",
    role: "Machine Learning Intern",
    period: "2025",
    location: "Nagpur, India",
    highlights: [
      "Model Optimization & Engineering: Developed ML models using Pandas and NumPy achieving ~92% accuracy on target datasets.",
      "Reduced model training time by 30% via feature engineering and hyperparameter tuning.",
      "Improved model performance by 15% through comparative algorithm evaluation and selection.",
    ],
    techUsed: ["Python", "Pandas", "NumPy", "Scikit-learn", "Feature Engineering"],
  },
  {
    id: "exp-3",
    company: "Marpu Foundation (NGO)",
    role: "Content Writing Intern",
    period: "Jul 2025 – Aug 2025",
    location: "Remote",
    highlights: [
      "Created educational and awareness content for the NGO's campaigns and digital platforms.",
      "Recognized for contributions with an official internship certification.",
    ],
    techUsed: ["Content Writing", "Research", "Communication"],
  },
];