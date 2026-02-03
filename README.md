# AI Tools Catalog 🚀

A modern, production-ready directory of the best AI tools, built with **Next.js 14**, **Tailwind CSS v4**, and **TypeScript**. 

This project demonstrates a high-performance, SEO-optimized web application featuring dynamic search, filtering, and a premium SaaS-style user interface.

![AI Tools Catalog Preview](/opengraph-image.png)

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

---

## 📦 Deployment

This project is optimized for deployment on **Vercel**:

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Deploy! (Framework settings are detected automatically).

*Note: The `sitemap.xml` and `robots.txt` are automatically generated based on the production URL.*

---

## 💡 Source & Inspiration

The goal was to build a "Product Hunt" style directory that feels premium and trustworthy. 
- **Design Inspiration:** Modern SaaS landing pages (Linear, Raycast) using subtle borders, glassmorphism, and soft shadows.
- **Dataset:** Manually curated list of top AI tools in 2024-2025.

---

## 🤖 AI Prompts Used

Here are 3 key prompts that helped accelerate development:

1.  *"Create a comprehensive TypeScript interface for an 'AI Tool' entity, including enums for Categories (Text, Image, Video, etc.) and Pricing Models (Free, Freemium, Paid). Then, generate a JSON dataset of 30 popular tools matching this schema."*

2.  *"Build a responsive grid component in React using Tailwind CSS that displays these tools. Implement client-side filtering by category and specific sort options like 'Highest Rated' and 'Newest First'. Ensure the empty state is visually appealing."*

3.  *"Refactor the listings page to separate the interactive search/filter logic into a Client Component (`ToolsList`) while keeping the parent `page.tsx` as a Server Component to ensure `generateMetadata` works correctly for SEO."*

---

## 🔮 Future Improvements (With 2 More Days)

If I had 48 more hours, here is what I would add:

1.  **Supabase Integration:** Move data from JSON to a Postgres database to allow dynamic updates without rebuilding the site.
2.  **User Authentication:** Add Clerk or NextAuth to let users "save" their favorite tools or submit new ones.
3.  **Analytics & tracking:** Integrate PostHog or Google Analytics to track popular search terms and clicks on external links.
4.  **Submission Form:** build a `react-hook-form` page for creators to submit their own AI tools.

---

**Built with ❤️ by [Your Name]**
