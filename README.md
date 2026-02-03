# AI Tools Catalog 🚀

A modern, production-ready directory of the best AI tools, built with **Next.js 14**, **Tailwind CSS v4**, and **TypeScript**. 

This project demonstrates a high-performance, SEO-optimized web application featuring dynamic search, filtering, and a premium SaaS-style user interface.

AI Tools Catalog Preview - https://ai-tools-catalog-rouge.vercel.app/

## 📖 Project Overview

The **AI Tools Catalog** allows users to:
- **Discover** 30+ curated AI tools across categories like Text Generation, Image Creation, and Coding.
- **Search & Filter** tools in real-time by name, category, or pricing model.
- **View Details** for each tool, including features, ratings, and direct links.
- **Toggle Themes** between a crisp light mode and a deep, focused dark mode.

It is designed to be **fast**, **accessible**, and **beautiful**, adhering to modern web standards.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Rendering:** Static Site Generation (SSG) & Server Components
- **Deployment:** Vercel / Netlify

---

## 🏗️ Architecture & Data Structure

### **Hybrid Rendering Strategy**
We utilize Next.js 14's power by splitting concerns:
- **Server Components (`page.tsx`):** Handle SEO metadata, OpenGraph tags, and initial layout rendering.
- **Client Components (`ToolsList.tsx`, `Navbar.tsx`):** Manage interactive state like search queries, filter selections, and theme toggling.

### **Data Handling**
The data acts as a lightweight CMS:
- **Source:** `data/tools.json` contains the static dataset.
- **Processing:** `lib/tools.ts` provides strictly typed utility functions to fetch, sort, and filter this data.
- **Type Safety:** `types/tool.ts` ensures reliable data usage across the app.

### **Static Site Generation (SSG)**
All 30+ tool detail pages are pre-rendered at build time using `generateStaticParams`, ensuring instant page loads and optimal SEO performance.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/ai-tools-catalog.git
    cd ai-tools-catalog
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:3000` to see the app in action.

      *Built with ❤️ by [K Mahesh Kumar Achary]**
