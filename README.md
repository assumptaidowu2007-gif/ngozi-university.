# Ngozi University — Official Web Portal

> **New Horizon React JS Web Development Project**  
> **Course:** React JS  
> **Project Type:** Individual Practical Project  
> **Author:** Academic Project Student  
> **Framework:** React JS (v18) + Vite  
> **Routing:** React Router DOM (v6)  
> **Version Control:** Git & GitHub  
> **Deployment Target:** Vercel / Netlify / Render  

---

## 1. Project Overview

**Ngozi University** is a modern, responsive, and fully interactive university web application engineered with **React JS**, **Vite**, and **React Router DOM**. It provides prospective students, current scholars, faculty members, and visitors with an intuitive digital gateway to explore academic faculties, learn about the university's 28-year history, review accredited degree programmes, and submit admission inquiries.

The project strictly follows modern React architectural patterns: component-based modularity, props drilling, controlled state management with hooks (`useState`, `useEffect`), client-side single-page routing without page reloads, and custom responsive CSS without relying on bulky CSS frameworks.

---

## 2. Key Features & Page Breakdown

### A. Home Page (`/`)
* **University Branding & Motto:** Institutional heraldry crest, name, and Latin motto (*Scientia • Virtus • Veritas*).
* **Welcome Message & Hero Banner:** High-impact hero section with 2026/2027 admission badges, university overview, and action buttons.
* **Direct Links:** Prominent CTA button linking directly to academic programmes (`/programmes`) and campus tour booking (`/contact`).
* **Interactive Element 1 — Pillars of Excellence Explorer:** Real-time tabbed switcher (`useState`) that toggles dynamically between Research, Technology & Labs, Leadership & Character, and Global Community.
* **Interactive Element 2 — Institutional Impact & Academic Metrics:** Interactive category switcher toggling vital statistics (enrollment, employment rates, student-faculty ratios).
* **Interactive Element 3 — Campus Landmark Tour Spotlight:** Interactive landmark selector with 4 clickable campus facilities, updating images and descriptive overviews on the fly.
* **Featured Programmes Preview:** Live preview of top 3 flagship programmes using the reusable `ProgrammeCard` component.

### B. About Page (`/about`)
* **University Background & History:** Narrative documenting the university's growth from foundation in 1998 to a premier 250-acre institution with 14,500+ students.
* **Core Mandate (What We Do):** Three core pillars—Transformative Teaching, Groundbreaking Research, and Societal Empowerment.
* **Mission Statement:** "To provide an intellectually stimulating, digitally enabled learning environment that produces visionary graduates of impeccable moral character..."
* **Vision Statement:** "To be globally recognized as a premier center of academic distinction, technological innovation, and ethical leadership development in Africa..."
* **Strategic Objectives:** 6 clearly defined institutional goals formatted in a responsive grid.
* **Interactive Element — Milestones Timeline:** Interactive year selector (1998, 2005, 2012, 2018, 2024, 2026) that updates historical breakthroughs dynamically using React state.

### C. Programmes Page (`/programmes`)
* **Comprehensive Programme Catalog:** Displays 8 fully accredited degree programmes spanning Computing & AI, Software Engineering, Electrical Engineering, Civil Engineering, Business Administration, Nursing Science, Law, and Mass Communication.
* **Reusable Component (`ProgrammeCard.jsx`):** Renders degree type, duration, faculty, descriptions, curriculum highlights, and career tags via props.
* **JavaScript Array Methods:** Utilizes `.map()` and `.filter()` to dynamically render and filter programmes.
* **Interactive Category Filter:** One-click faculty filter pills (All, Computing & IT, Engineering, Business & Management, Health Sciences, Law & Arts).
* **Interactive Live Search Input:** Real-time keyword filter searching programme titles, descriptions, and degrees.
* **Interactive Programme Details Modal:** Clicking "View Curriculum & Requirements" opens an accessible dialog displaying full syllabus modules, entry requirements, and target career pathways.

### D. Contact Page (`/contact`)
* **Official University Contact Details:** Campus address, telephone hotlines, email addresses, and operating hours.
* **Sample Details Notice:** Prominent notice clearly identifying contact details as academic demonstration data.
* **Controlled Form Inputs:** Full name, email address, inquiry subject dropdown, and message managed via React `useState`.
* **Robust Validation:**
  - Full name: Required, minimum 3 characters.
  - Email address: Required, validated against an RFC-compliant regex pattern.
  - Subject: Required selection.
  - Message: Required, minimum 10 characters with live character counter.
* **Feedback States:** In-line red validation error messages, error summary banner, and an alert confirmation card displaying a unique tracking reference code (`NU-INQ-XXXXXX`).
* **Interactive FAQ Accordion:** Expandable/collapsible accordion (`useState`) answering common admissions questions.

---

## 3. Technologies Used

* **React JS (v18.3.1):** Functional components, React Hooks (`useState`, `useEffect`).
* **Vite (v5.4.11):** Next-generation frontend build tooling and development server.
* **React Router DOM (v6.28.0):** Client-side routing (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`, `useLocation`).
* **HTML5:** Semantic markup, accessibility attributes (`aria-expanded`, `aria-label`, `role`).
* **CSS3:** Custom variables, CSS Grid, Flexbox, media queries, keyframe animations.
* **Git & GitHub:** Version control with clean commits and `.gitignore` excluding `node_modules/`.

---

## 4. Project Folder Structure

```text
ngozi-university/
├── .gitignore               # Excludes node_modules/, dist/, logs, OS files
├── index.html               # Main HTML entry with typography fonts & favicon
├── package.json             # Project dependencies and npm scripts
├── package-lock.json        # Deterministic dependency lockfile
├── vite.config.js           # Vite configuration with React plugin
├── README.md                # Full project documentation & submission guide
├── public/
│   └── university-logo.svg  # Custom SVG heraldic shield & university seal
└── src/
    ├── components/
    │   ├── Navbar.jsx       # Responsive header with mobile drawer & NavLinks
    │   ├── Footer.jsx       # University footer with quick links & disclaimer
    │   └── ProgrammeCard.jsx# Reusable academic programme card with props
    ├── pages/
    │   ├── Home.jsx         # Homepage with hero, interactive tabs & tour
    │   ├── About.jsx        # History, mission, vision, objectives & timeline
    │   ├── Programmes.jsx   # Catalog with search, filters & details modal
    │   └── Contact.jsx      # Controlled contact form with validation & FAQs
    ├── App.jsx              # Main router configuration & ScrollToTop helper
    ├── App.css              # Page & component styles with media queries
    ├── index.css            # Global CSS reset, design tokens & utility classes
    └── main.jsx             # React DOM root entry with BrowserRouter
```

---

## 5. React Concepts Demonstrated

| React Concept | Implementation in Ngozi University |
| :--- | :--- |
| **Functional Components** | All pages (`Home`, `About`, `Programmes`, `Contact`) and components (`Navbar`, `Footer`, `ProgrammeCard`) are written as modern functional components. |
| **Component Reusability** | `ProgrammeCard.jsx` is reused across both the Home Page featured showcase and the full Programmes Catalog with distinct data payloads. |
| **Props Passing** | `ProgrammeCard` accepts `programme` (object) and `onSelect` (callback function), passing data down from parent to child. |
| **State Management (`useState`)** | Mobile menu toggles in `Navbar`, active pillar switcher in `Home`, milestone year in `About`, category filters & search input in `Programmes`, and controlled form inputs + validation errors in `Contact`. |
| **Side Effects (`useEffect`)** | Implemented in `ScrollToTop` inside `App.jsx` to reset window scroll position to `(0, 0)` upon route transition. |
| **Event Handling** | Comprehensive use of `onClick` (tab switching, modals, accordions), `onChange` (real-time inputs, search query), and `onSubmit` (form validation). |
| **Array Methods in JSX** | Extensively employs `.map()` to iterate over programmes, milestones, objectives, statistics, and FAQ lists, and `.filter()` for search/category queries. |
| **Controlled Forms** | Form inputs in `Contact.jsx` are bound directly to React state values and updated via `onChange` handlers with real-time error clearance. |
| **Client-Side Routing** | Configured with `react-router-dom` using `BrowserRouter`, `Routes`, `Route`, and `NavLink` for instant page transitions without browser reload. |

---

## 6. Installation & Local Development Instructions

Follow these steps to run the application on your computer:

### Step 1: Clone or Download the Repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/ngozi-university.git
cd ngozi-university
```

### Step 2: Install Project Dependencies
```bash
npm install
```
*(This installs React, React-DOM, React-Router-DOM, Vite, and development dependencies. Note: `node_modules` is excluded from Git tracking).*

### Step 3: Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local server URL (typically `http://localhost:5173/`).

### Step 4: Build for Production
To create an optimized production build:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## 7. How to Push to GitHub (Step-by-Step)

1. Open your terminal in the `ngozi-university` project directory.
2. Verify that `.gitignore` contains `node_modules/`:
   ```bash
   cat .gitignore
   ```
3. Initialize Git and add all files:
   ```bash
   git add .
   ```
4. Commit your files:
   ```bash
   git commit -m "Complete Ngozi University React Web Application"
   ```
5. Create a new repository on your GitHub account named `ngozi-university`.
6. Link your local project to GitHub and push:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ngozi-university.git
   git branch -M main
   git push -u origin main
   ```
7. Verify on GitHub that `src`, `public`, `package.json`, `package-lock.json`, and `README.md` are present, and confirm `node_modules` is **NOT** uploaded.

---

## 8. Deployment to Vercel (Step-by-Step)

1. Visit [vercel.com](https://vercel.com/) and sign in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your `ngozi-university` repository and click **"Import"**.
4. Keep the default settings:
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **"Deploy"**.
6. Within 60 seconds, Vercel will provide your public live website URL (e.g., `https://ngozi-university.vercel.app`).
7. Copy both your GitHub URL and Vercel live URL for final submission.

---

## 9. Final Google Form Submission Guide

| Form Field | Suggested Submission Text |
| :--- | :--- |
| **1. Full Name** | *[Enter your official full name]* |
| **2. Matriculation Number** | *[Enter your official matriculation number]* |
| **3. Department** | *[Enter your department]* |
| **4. Project Title** | Ngozi University — Responsive Web Application Using React JS |
| **5. Short Project Description** | A complete, responsive, multi-page university website for Ngozi University built with React JS, Vite, and React Router. Features institutional branding, an interactive campus landmarks tour, academic pillars explorer, filterable and searchable academic programmes catalog with reusable card components and detail modals, and a validated contact form with controlled inputs. |
| **6. Project Type** | School or University Website |
| **7. GitHub Username** | *[Enter your GitHub username]* |
| **8. GitHub Repository URL** | `https://github.com/YOUR_GITHUB_USERNAME/ngozi-university` |
| **9. Live Application URL** | `https://ngozi-university.vercel.app` *(or your Netlify URL)* |
| **10. Hosting Platform** | Vercel (or Netlify) |
| **11. Explanation of React Concepts** | Implemented functional React components with JSX, modular component architecture, props passing, state management via `useState` for interactive tabs, search queries, modals, and controlled form inputs. Client-side navigation without page refresh powered by React Router (`NavLink`, `Routes`, `Route`), dynamic list rendering via `.map()` and `.filter()`, and scroll restoration with `useEffect`. |
| **12. Confirmation of Mobile & Desktop Testing** | Yes, fully tested and verified across mobile (iPhone/Android), tablet (iPad), and desktop viewports with responsive Flexbox and CSS Grid. |
| **13. Confirmation of Successful Execution** | Yes, the production build compiles cleanly without errors (`npm run build`) and runs successfully. |

---

## 10. License & Academic Attribution
Developed as an individual academic assignment for the **New Horizon React JS Web Development Course**. All university names, contacts, and student references are simulated for academic demonstration purposes.
