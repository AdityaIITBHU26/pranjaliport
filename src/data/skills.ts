import { SkillCategory } from "~/types/data";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: `${DI}/python/python-original.svg` },
      { name: "C", icon: `${DI}/c/c-original.svg` },
      { name: "C++", icon: `${DI}/cplusplus/cplusplus-original.svg` },
      { name: "SQL", icon: `${DI}/mysql/mysql-original.svg` },
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
    ],
  },
  {
    category: "ML / AI Frameworks",
    skills: [
      { name: "TensorFlow", icon: `${DI}/tensorflow/tensorflow-original.svg` },
      { name: "PyTorch", icon: `${DI}/pytorch/pytorch-original.svg` },
      { name: "Scikit-learn", icon: `${SI}/scikitlearn/F7931E` },
      { name: "Keras", icon: `${SI}/keras/D00000` },
      { name: "OpenCV", icon: `${DI}/opencv/opencv-original.svg` },
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      { name: "Pandas", icon: `${SI}/pandas/150458` },
      { name: "NumPy", icon: `${SI}/numpy/013243` },
      { name: "Matplotlib", icon: `${SI}/matplotlib/white` },
      { name: "Jupyter", icon: `${DI}/jupyter/jupyter-original.svg` },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: `${DI}/mysql/mysql-original.svg` },
      { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg` },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "GitHub", icon: `${DI}/github/github-original.svg` },
      { name: "Google Colab", icon: `${SI}/googlecolab/F9AB00` },
      { name: "Flask", icon: `${DI}/flask/flask-original.svg` },
      { name: "VS Code", icon: `${DI}/vscode/vscode-original.svg` },
    ],
  },
];