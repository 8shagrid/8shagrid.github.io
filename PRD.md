# PRD: Personal Portfolio Website — Dirga Halim Susilo

> **Version:** 1.0  
> **Date:** 27 Mei 2026  
> **Status:** Draft — Review

---

## 1. Product Overview

### 1.1 Vision
Personal website yang memposisikan **Dirga Halim Susilo** sebagai **AI-Native Full-Stack Developer & Tech Entrepreneur** — bukan sekadar fresh graduate, tapi seseorang yang sudah membangun dan mengelola 4 produk digital nyata, termasuk enterprise-grade ERP system.

### 1.2 Unique Value Proposition
> "S1 Data Science (GPA 3.77). Freelance developer & data specialist yang juga membangun dan mengelola 4 produk digital sendiri — termasuk enterprise ERP 20 modul. Menjalankan keduanya secara paralel: melayani klien sambil membangun bisnis sendiri."

### 1.3 Differentiator vs Portofolio Fresh Graduate Lain
| Fresh Grad Typical | Dirga |
|---|---|
| "Saya bisa React" | "Saya membangun 3 bisnis yang live & menghasilkan" |
| 1-2 project tutorial | Platform tryout CPNS, bimbel online, studio undangan digital |
| Belum pernah deploy | 3 produk live dengan real users |

---

## 2. Target Audience

| Audience | Pain Point | What They Look For |
|---|---|---|
| **Recruiter / HR Tech** | Butuh engineer yang bisa deliver, bukan cuma ngomong | Bukti produk nyata, tech stack, experience |
| **Tech Lead / CTO** | Butuh orang yang paham full cycle (data → deploy) | Project complexity, architecture decisions |
| **Client Freelance** | Butuh developer yang bisa dipercaya bangun produk | Portofolio bisnis, testimonial, contact |
| **Fellow Developer** | Networking / kolaborasi | GitHub, tech blog, open source |

---

## 3. Site Architecture

```
/
├── Hero Section
│   ├── Name + Title + Tagline
│   ├── CTA: "View My Work" / "Contact Me"
│   └── Quick stats (4 products, GPA, etc.)
│
├── Featured Products (PRIORITAS UTAMA)
│   ├── SiapTempur.id — Platform Tryout CPNS
│   ├── PejuangKampus.co.id — Bimbel Online (Solo Programmer)│   ├── Seraya ERP — Enterprise ERP System (Solo Developer)│   └── Seraya.my.id — Undangan Digital Studio
│
├── Tech Projects
│   ├── CNN Sign Language Translator (AI/ML)
│   ├── HR Analytics Dashboard (Data Viz)
│   ├── Web Phishing Detection (AI/Cybersecurity)
│   ├── [Coming Soon] AI Chat/RAG App (AI + Fullstack)
│   └── [Coming Soon] MLOps Pipeline Demo
│
├── Tech Stack / Skills
│   ├── AI & Data Science
│   └── Software Engineering
│
├── Experience Timeline
│   ├── Freelance Developer & Data Specialist (2024-Present)
│   ├── Data Scientist Intern — eBdesk (2023)
│   └── HR Data Analyst Intern — Santara (2020-2021)
│
├── Education
│   └── S1 Data Science, UTY (GPA 3.77)
│
├── Certifications
│   └── 6 badges (HackerRank, Google, TensorFlow, etc.)
│
├── Blog / Articles
│   └── Space untuk artikel LinkedIn/Medium
│
├── Contact / CTA
│
└── Footer
    ├── LinkedIn, GitHub, Email
    └── © 2026 Dirga Halim Susilo
```

---

## 4. Content Requirements (Per Section)

### 4.1 Hero Section
- **Headline**: "Dirga Halim Susilo"
- **Subheadline**: "AI-Native Full-Stack Developer & Tech Entrepreneur"
- **Tagline**: "Building AI-powered products, running digital businesses, and helping clients turn data into decisions — all at once."
- **Quick Stats Badge**: 🏢 4 Live Products · 💼 Freelance 2024-Present · 🎓 GPA 3.77 · 🏅 6 Certifications
- **CTA Primary**: "See My Work" → scroll ke Featured Products
- **CTA Secondary**: "Get In Touch" → scroll ke Contact

### 4.2 Featured Products (Paling Atas!)

#### Card 1: SiapTempur.id
- **Role**: Owner & Full-Stack Developer
- **Deskripsi**: Platform tryout SKD CPNS dengan sistem penilaian standar CAT BKN, timer real-time 100 menit, dan payment gateway Midtrans. Melayani ribuan peserta dengan sistem tryout ketengan tanpa langganan.
- **Tech**: Next.js 16, TypeScript, Tailwind CSS 4, Supabase, Midtrans, Framer Motion, Recharts, KaTeX
- **Link**: https://siaptempur.id
- **Screenshot**: [TBD]

#### Card 2: PejuangKampus.co.id
- **Role**: **Solo Programmer** 🏆 (full-stack sendiri dari nol)
- **Deskripsi**: Platform bimbel online untuk persiapan masuk PTN & sekolah kedinasan. Mencakup sistem ujian online, manajemen soal, leaderboard, dan sistem pembelajaran — dikerjakan sendiri dari nol hingga produksi.
- **Tech**: Next.js 16, TypeScript, Tailwind CSS 4, Supabase, Zustand, Zod, React Hook Form, React Markdown, KaTeX
- **Link**: https://pejuangkampus.co.id
- **Screenshot**: [TBD]

#### Card 3: Seraya ERP
- **Role**: **Solo Developer** 🏆 — dibangun untuk bisnis sendiri
- **Deskripsi**: Enterprise-grade ERP system untuk mengelola seluruh operasional bisnis Seraya. 20 modul: Dashboard, Produksi, Penjualan, Cashflow, Budgeting, Bagi Hasil, Komisi Reseller, Pembayaran, Laporan, Audit Logs, dan lainnya. Mencakup role-based access, real-time analytics, dan automated reporting.
- **Tech**: Next.js 16, TypeScript, Tailwind CSS 4, Supabase, Prisma ORM, PostgreSQL, Shadcn UI, Radix UI, TanStack Table, Recharts, Zod, Playwright (E2E tests)
- **Link**: [Internal — demo on request]
- **Screenshot**: [TBD]

#### Card 4: Seraya.my.id
- **Role**: Owner & Developer
- **Deskripsi**: Studio undangan digital & fisik yang elegan. 150+ tema, layanan mencakup pernikahan, ulang tahun, aqiqah, khitanan. Rating 4.9 ⭐ dari klien.
- **Tech**: HTML5, CSS3, JavaScript (Vanilla), Lucide Icons, Vercel
- **Link**: https://seraya.my.id
- **Screenshot**: [TBD]

### 4.3 Tech Projects

#### Project 1: CNN Sign Language Translator
- **Type**: AI / Machine Learning
- **Deskripsi**: CNN-based web app untuk menerjemahkan bahasa isyarat alfabet (MNIST dataset). Akurasi 100% pada mayoritas huruf.
- **Tech**: Python, TensorFlow, CNN, FastAPI, React
- **Links**: GitHub / Demo

#### Project 2: HR Analytics Dashboard
- **Type**: Data Visualization
- **Deskripsi**: Dashboard interaktif untuk monitoring metrik workforce (attrition rate, demografi, kepuasan kerja). Mengurangi waktu report generation 40%.
- **Tech**: Excel → Web (React + Chart.js)
- **Links**: GitHub / Demo

#### Project 3: Web Phishing Detection (Team: Barokah)
- **Type**: AI / Cybersecurity
- **Deskripsi**: Machine learning-based system untuk mendeteksi website phishing menggunakan ekstraksi fitur URL. Full-stack dengan Django backend dan model ML terintegrasi.
- **Tech**: Python, Django, Scikit-learn, Feature Extraction, SQLite
- **Links**: GitHub

#### Project 4: [Coming Soon] AI Chat / RAG App
- Placeholder card dengan "Building..." badge
- Menunjukkan ambisi dan arah karir

#### Project 5: [Coming Soon] MLOps Pipeline
- Placeholder card dengan "Building..." badge

### 4.4 Tech Stack / Skills

Dua kolom:

| 🧠 AI & Data Science | ⚙️ Software Engineering |
|---|---|
| Python, Pandas, NumPy | TypeScript, JavaScript |
| Scikit-learn, TensorFlow, Keras | Next.js 16, React 19 |
| Machine Learning, Deep Learning | Supabase, PostgreSQL |
| Data Visualization (Recharts) | Tailwind CSS 4, Framer Motion |
| Statistics, Predictive Modeling | Zustand, Zod, React Hook Form |
| Power BI, Tableau | Midtrans, REST APIs |
| Streamlit, Django | Vercel, Git |

### 4.5 Experience Timeline

```
2024 — Present   Freelance Developer & Data Specialist
                 Remote / Various Clients
                 Data Mining • Web Development • Data Visualization
                 (Paralel dengan menjalankan 4 bisnis digital sendiri)
                  
Feb — Jul 2023    Data Scientist Intern
                  PT eBdesk Teknologi, Tangerang Selatan
                  
Sep 2022 — Jan 2023  Lecturer Assistant
                      Universitas Teknologi Yogyakarta
                  
Dec 2020 — Feb 2021  HR Data Analyst Intern
                      Santara, Yogyakarta
```

### 4.6 Education
- **S1 Data Science** — Universitas Teknologi Yogyakarta (2020-2024)
- GPA: **3.77 / 4.00**
- Penelitian: CNN-based Web Sign Language Translator

### 4.7 Certifications (6 badges)
1. SQL Advanced — HackerRank (Dec 2023)
2. TensorFlow for Deep Learning — ZTM Academy (Aug 2023)
3. Google Data Analytics — Coursera (Jan 2023)
4. Complete AI & ML Bootcamp — ZTM Academy (Aug 2022)
5. Data Analyst Bootcamp — 365 Careers (May 2022)
6. ASEAN Data Science Explorers — ASEAN Foundation (Jan 2022)

### 4.8 Organizational Experience
- **Head of Research Chapter Yogyakarta** — Data Science Indonesia (2022-2023)
  - Memimpin program pelatihan dan riset data science
  - Mengelola chapter Yogyakarta

### 4.9 Contact
- Email: halimdirga8@gmail.com
- Phone: +6282367453590
- LinkedIn: linkedin.com/in/dirgahalimsusilo
- GitHub: github.com/8shagrid
- Website: 8shagrid.github.io

---

## 5. Design System

### 5.1 Color Palette — 侍 (Samurai) Theme

```
┌─────────────────────────────────────────────┐
│  墨 (Sumi)     │  #0d0d12  │  Background     │
│  鉄 (Tetsu)    │  #1a1a22  │  Surface/Card   │
│  煤 (Susu)     │  #252530  │  Border/Hover   │
│  紅 (Beni)     │  #c53030  │  Primary Accent │
│  金 (Kin)      │  #c9a54b  │  Gold Highlight │
│  白 (Shiro)    │  #f0ece4  │  Text Primary   │
│  灰 (Hai)      │  #8c8c7e  │  Text Secondary │
│  竹 (Take)     │  #4a6741  │  Subtle/Muted   │
└─────────────────────────────────────────────┘
```

**Inspirasi:** Armor samurai (紅 = beni/crimson cords), pedang katana (sharp, precise), kuil Jepang (金 = gold accents), washi paper (白 = warm off-white), taman zen (竹 = bamboo green accents).

**Prinsip Warna:**
- Background gelap pekat — seperti malam sebelum pertempuran
- Aksen merah crimson digunakan **sangat hemat** — hanya untuk CTA, hover, highlight kritis
- Gold hanya untuk elemen spesial (penghargaan, stats penting)
- Teks off-white hangat (bukan putih mentah) — seperti washi paper
- Sharp, clean, tidak ada rounded corners berlebihan — seperti katana
- Gradien: tidak digunakan, solid & tegas

### 5.2 Typography
```
Heading:   Playfair Display (serif, elegan, Japanese-inspired contrast)
           → Alternatif: Noto Serif JP untuk vibe Jepang autentik
Body:      Inter / DM Sans (clean sans-serif, readable)
Mono:      JetBrains Mono (untuk code snippets)
Japanese:  Noto Serif JP (untuk dekorasi huruf Jepang)
```

### 5.3 Spacing & Layout
- Max width content: 1200px
- Section padding: 96px vertical (lebih lega, zen spacing)
- Card gap: 24px
- Border radius: **4px** (tajam, hampir tidak rounded — seperti katana)
- Focus ring: 2px solid Beni (merah)

### 5.4 Design Principles — 侍 Way
| Principle | Implementation |
|---|---|
| **切れ味 (Sharpness)** | Border radius minimal, garis tegas, transition cepat |
| **余白 (Ma/Yohaku)** | Whitespace banyak, zen minimalism |
| **静寂 (Seijaku)** | Tidak rame, tidak banyak warna, fokus pada konten |
| **自然 (Shizen)** | Warna earth-tone alami, tidak neon/sintetik |
| **脱俗 (Datsuzoku)** | Anti-mainstream, tidak ikut template portofolio pada umumnya |

### 5.5 Component Inventory
- **Navigation:** Sticky top bar, background blur (glassmorphism ringan), minimalist — hanya logo + nav links + CTA. Garis merah tipis di bottom sebagai active indicator.
- **Hero:** Bold typography Playfair Display, vertical layout, aksen garis merah vertikal seperti tarikan kuas (筆).
- **Product Cards:** Dark surface 鉄, subtle border 煤, red accent 紅 on hover left border, screenshot preview.
- **Timeline:** Garis vertikal 煤 dengan dot 紅, teks clean.
- **Skill Tags:** Outline style 煤, hover fill 紅.
- **Certification Badges:** Grid, subtle gold 金 border.
- **Blog Cards:** Minimal, date + title + excerpt, hover garis merah.
- **Contact:** Clean links dengan ikon, hover merah.
- **Footer:** Simpel, sumi-e minimalism. Divider horizontal tipis.
- **Divider:** Garis horizontal 煤, bisa pakai pattern Jepang subtle.

---

## 6. Technical Specifications

### 6.1 Tech Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide Icons / Phosphor Icons |
| Deployment | Vercel |
| Domain | 8shagrid.github.io (existing) |
| Analytics | Vercel Analytics (optional) |

### 6.2 Performance Targets
- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Fully responsive (mobile, tablet, desktop)

### 6.3 SEO Requirements
- Meta tags (title, description, OG image)
- Semantic HTML structure
- Sitemap.xml
- robots.txt
- Schema.org markup (Person)

---

## 7. Non-Functional Requirements

- **Dark mode:** Default (optional light mode toggle)
- **Mobile-first:** Desain harus sempurna di mobile
- **Aksesibilitas:** Keyboard navigation, screen reader friendly, contrast ratio AA
- **No external dependency yang berat:** Hindari jQuery, Bootstrap, atau library besar yang tidak perlu

---

## 8. Open Questions (Perlu Konfirmasi dari Dirga)

- [x] ~~Tech stack 3 bisnis~~ → SUDAH DIKETAHUI (dari eksplorasi folder)
- [x] ~~Screenshots~~ → Ambil dari browser saat develop
- [x] ~~Blog section~~ → YES, disediakan
- [x] ~~Warna~~ → Tema Jepang/Samurai — minimalist, anti-mainstream
- [x] ~~Project placeholder~~ → WAJIB ditampilkan (RAG App + MLOps)
- [ ] Foto profile — ada?
- [ ] Ada testimonial dari client/user yang bisa dimasukkan?
- [x] ~~Project tambahan~~ → Phishing Detection (Django+ML) dimasukkan

---

## 9. Success Metrics

| Metric | Target |
|---|---|
| Website live | ✅ |
| Lighthouse score | 90+ |
| Load time (FCP) | < 1.5s |
| Semua section terisi | 100% |
| Responsive di semua device | ✅ |
| Resume/CV bisa di-download | PDF available |

---

## 10. Milestones

| Phase | Deliverable | Status |
|---|---|---|
| **Phase 1: Foundation** | Next.js project setup, layout, navigation, hero | ⬜ |
| **Phase 2: Core Content** | Featured Products, Experience, Education | ⬜ |
| **Phase 3: Projects** | Tech Projects, Skills, Certifications | ⬜ |
| **Phase 4: Polish** | Animations, SEO, responsive, performance | ⬜ |
| **Phase 5: Launch** | Deploy ke Vercel/GitHub Pages, testing final | ⬜ |

---

> **Next Step:** Review PRD → Konfirmasi open questions → Mulai Phase 1 (setup project + coding)
