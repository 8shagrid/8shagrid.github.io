// ============================================
// Portfolio Data — Dirga Halim Susilo
// All content in one place for easy editing
// ============================================

// --- Hero ---
export const heroData = {
  name: "Dirga Halim Susilo",
  title: "AI-Native Full-Stack Developer\n& Tech Entrepreneur",
  tagline:
    "Building AI-powered products, running digital businesses, and helping clients turn data into decisions — all at once.",
  stats: [
    { label: "Live Products", value: "4" },
    { label: "GPA", value: "3.77" },
    { label: "Certifications", value: "6" },
    { label: "ERP Modules Built", value: "20" },
  ],
  location: "Medan, Indonesia",
};

// --- Featured Products ---
export interface Product {
  title: string;
  role: string;
  badge?: string;
  description: string;
  tech: string[];
  link: string;
  linkLabel: string;
  image: string;
}

export const products: Product[] = [
  {
    title: "SiapTempur.id",
    role: "Owner & Full-Stack Developer",
    description:
      "Platform tryout SKD CPNS dengan sistem penilaian standar CAT BKN, timer real-time 100 menit, dan payment gateway Midtrans. Sistem tryout ketengan tanpa langganan — melayani ribuan peserta.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "Midtrans",
      "Framer Motion",
      "Recharts",
    ],
    link: "https://siaptempur.id",
    linkLabel: "Visit Platform",
    image: "/screenshots/siaptempur.png",
  },
  {
    title: "PejuangKampus.co.id",
    role: "Solo Programmer",
    badge: "🏆 Solo Built",
    description:
      "Platform bimbel online persiapan PTN & sekolah kedinasan. Sistem ujian online, manajemen soal, leaderboard, dan pembelajaran — dikerjakan sendiri dari nol hingga produksi.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "Zustand",
      "Zod",
      "React Hook Form",
      "KaTeX",
    ],
    link: "https://pejuangkampus.co.id",
    linkLabel: "Visit Platform",
    image: "/screenshots/pejuangkampus.png",
  },
  {
    title: "Seraya ERP",
    role: "Solo Developer",
    badge: "🏆 Solo Built",
    description:
      "Enterprise-grade ERP system untuk operasional bisnis Seraya. 20 modul: Dashboard, Produksi, Penjualan, Cashflow, Budgeting, Bagi Hasil, Komisi Reseller, Audit Logs, dan lainnya. Role-based access, real-time analytics, automated reporting.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "Shadcn UI",
      "TanStack Table",
      "Playwright",
    ],
    link: "#contact",
    linkLabel: "Request Demo",
    image: "/screenshots/seraya-erp.png",
  },
  {
    title: "Seraya.my.id",
    role: "Owner & Developer",
    description:
      "Studio undangan digital & fisik yang elegan. 150+ tema untuk pernikahan, ulang tahun, aqiqah, khitanan. Rating 4.9 ⭐ dari klien.",
    tech: ["HTML5", "CSS3", "JavaScript", "Lucide Icons", "Vercel"],
    link: "https://seraya.my.id",
    linkLabel: "Visit Website",
    image: "/screenshots/seraya.png",
  },
];

// --- Tech Projects ---
export interface Project {
  title: string;
  type: string;
  description: string;
  tech: string[];
  link?: string;
  linkLabel?: string;
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    title: "CNN Sign Language Translator",
    type: "AI / Machine Learning",
    description:
      "CNN-based web app untuk menerjemahkan bahasa isyarat alfabet (MNIST dataset). Akurasi 100% pada mayoritas huruf. Riset skripsi dengan proposal pengembangan motion detection untuk aplikasi real-time.",
    tech: ["Python", "TensorFlow", "CNN", "FastAPI", "React"],
    link: "https://github.com/8shagrid",
    linkLabel: "GitHub",
  },
  {
    title: "HR Analytics Dashboard",
    type: "Data Visualization",
    description:
      "Dashboard interaktif monitoring metrik workforce — attrition rate, demografi, pendidikan, gender, kepuasan kerja. Mengurangi HR report generation time 40%.",
    tech: ["Excel", "Pivot Tables", "Data Analysis", "Interactive Dashboard"],
    link: "https://github.com/8shagrid/hr-analytics-dashboard-excel",
    linkLabel: "GitHub",
  },
  {
    title: "Road Accident Dashboard",
    type: "Data Visualization",
    description:
      "Dasbor interaktif berbasis Excel yang memvisualisasikan statistik kecelakaan jalan berdasarkan bulan, jenis jalan, kondisi cahaya, kondisi permukaan, dan lokasi.",
    tech: ["Excel", "Data Visualization", "Interactive Dashboard", "Statistics"],
    link: "https://github.com/8shagrid/road-accident-dashboard-excel",
    linkLabel: "GitHub",
  },
  {
    title: "Web Phishing Detection",
    type: "AI / Cybersecurity",
    description:
      "ML-based system untuk mendeteksi website phishing menggunakan ekstraksi fitur URL. Full-stack Django dengan model ML terintegrasi. Team: Barokah.",
    tech: ["Python", "Django", "Scikit-learn", "Feature Extraction", "SQLite"],
    link: "https://github.com/8shagrid",
    linkLabel: "GitHub",
  },
  {
    title: "AI Chat / RAG App",
    type: "AI + Full-Stack",
    description:
      "Retrieval-Augmented Generation app: upload dokumen, tanya jawab dengan AI. Integrasi LLM + vector database untuk konteks-aware responses.",
    tech: ["LangChain", "OpenAI", "Pinecone", "Next.js", "FastAPI"],
    comingSoon: true,
  },
  {
    title: "MLOps Pipeline Demo",
    type: "MLOps / DevOps",
    description:
      "End-to-end ML pipeline: data preprocessing → model training → evaluation → deployment → monitoring dengan CI/CD.",
    tech: ["Docker", "GitHub Actions", "FastAPI", "Scikit-learn"],
    comingSoon: true,
  },
];

// --- Skills ---
export const skillGroups = [
  {
    title: "AI & Data Science",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Machine Learning",
      "Deep Learning",
      "Statistics",
      "Data Mining",
      "Predictive Modeling",
      "Data Visualization",
      "Power BI",
      "Tableau",
      "Streamlit",
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      "TypeScript",
      "JavaScript",
      "Next.js 16",
      "React 19",
      "Tailwind CSS 4",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "Zustand",
      "Zod",
      "REST APIs",
      "Midtrans",
      "Docker",
      "Git",
      "Vercel",
    ],
  },
];

// --- Experience ---
export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  details: string[];
}

export const experiences: Experience[] = [
  {
    period: "Jul 2024 — Present",
    role: "Freelance Developer & Data Specialist",
    company: "Remote / Various Clients",
    location: "Indonesia",
    details: [
      "Data Mining & Analysis: end-to-end data cycles — collection, cleaning, transformation, statistical analysis.",
      "Web Development: building landing pages, web apps, and internal systems with Next.js, React, Supabase.",
      "Data Visualization: interactive dashboards (Power BI, Tableau, Looker Studio, Recharts).",
      "Paralel dengan menjalankan 4 bisnis digital sendiri.",
    ],
  },
  {
    period: "Feb — Jul 2023",
    role: "Data Scientist Intern",
    company: "PT eBdesk Teknologi",
    location: "Tangerang Selatan",
    details: [
      "Assisted data science team with election data research — data cleaning and feature engineering.",
      "Supported dashboard visualization and machine learning lifecycle under senior mentorship.",
      "Participated in model parameter tuning experiments.",
    ],
  },
  {
    period: "Sep 2022 — Jan 2023",
    role: "Lecturer Assistant",
    company: "Universitas Teknologi Yogyakarta",
    location: "Yogyakarta",
    details: [
      "Lectured classes, seminars, and training. Provided university guidance for students.",
      "Examined student projects, practicum, and laboratory research activities.",
      "Head of Research Chapter Yogyakarta — Data Science Indonesia (Aug 2022 — Jan 2023).",
    ],
  },
  {
    period: "Dec 2020 — Feb 2021",
    role: "HR Data Analyst Intern",
    company: "Santara",
    location: "Yogyakarta",
    details: [
      "Daily data entry and validation of employee data in HRIS.",
      "Compiled Excel reports with pivot tables for strategic HR analysis.",
      "Participated in UX analysis of internal applications.",
    ],
  },
];

// --- Education ---
export const education = {
  degree: "Sarjana Sains Data (S1)",
  school: "Universitas Teknologi Yogyakarta",
  period: "Sep 2020 — Aug 2024",
  gpa: "3.77 / 4.00",
  thesis:
    "Riset Translator Bahasa Isyarat Berbasis Web Menggunakan CNN — mengembangkan model CNN untuk mengenali alfabet bahasa isyarat (dataset MNIST), mencapai akurasi 100% pada mayoritas huruf dan mengidentifikasi tantangan untuk aplikasi real-time.",
  achievements: [
    "Asisten Dosen (Sep 2022 — Jan 2023): Memimpin sesi praktikum, membantu penyampaian materi seminar, memeriksa dan menilai proyek mahasiswa (UTS & UAS), memberikan bimbingan akademik.",
    "Head of Research Chapter Yogyakarta — Data Science Indonesia (Aug 2022 — Jan 2023): Mengarahkan pelatihan dan riset data science melalui program seminar, mengelola chapter Yogyakarta.",
  ],
};

// --- Certifications ---
export const certifications = [
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "Dec 2023",
    credentialId: "47468dc16b59",
  },
  {
    title: "TensorFlow for Deep Learning Bootcamp",
    issuer: "Zero To Mastery Academy (Udemy)",
    date: "Aug 2023",
    credentialId: "UC-2e8d3c48-bd8f-40e7-a93c-965a6034627b",
  },
  {
    title: "Google Data Analytics Certificate",
    issuer: "Grow with Google (Coursera)",
    date: "Jan 2023",
    credentialId: "QAJBXXLX4PA7",
  },
  {
    title: "Complete A.I. & Machine Learning Bootcamp",
    issuer: "Zero To Mastery Academy (Udemy)",
    date: "Aug 2022",
    credentialId: "UC-c410785e-52f9-4f50-92ef-93566a29cea5",
  },
  {
    title: "Data Analyst Bootcamp",
    issuer: "365 Careers (Udemy)",
    date: "May 2022",
    credentialId: "UC-c5bfeb2e-13f6-428a-b5cb-82518e4b48f6",
  },
  {
    title: "ASEAN Data Science Explorers",
    issuer: "ASEAN Foundation",
    date: "Jan 2022",
  },
];

// --- Contact ---
export const contactData = {
  email: "halimdirga8@gmail.com",
  phone: "+6282367453590",
  linkedin: "linkedin.com/in/dirgahalimsusilo",
  github: "github.com/8shagrid",
  website: "8shagrid.github.io",
};

// --- CV Download ---
export const cvData = {
  label: "Download CV",
  url: "/cv-dirga-halim-susilo.pdf",
};

// --- Navigation ---
export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
