# Opsfolio Documentation

> Unified documentation site for all Opsfolio products and services

## 🌐 Live Documentation

**Main Site**: [https://docs.opsfolio.com](https://docs.opsfolio.com)

### Product Documentation

- **Spry**: [docs.opsfolio.com/spry](https://docs.opsfolio.com/spry)
- **Surveilr**: [docs.opsfolio.com/surveilr](https://docs.opsfolio.com/surveilr)
- **QualityFolio**: [docs.opsfolio.com/qualityfolio](https://docs.opsfolio.com/qualityfolio)
- **EAA**: [docs.opsfolio.com/eaa](https://docs.opsfolio.com/eaa)

---

## 🏗️ Repository Overview

This is a unified documentation site covering all Opsfolio products. It's built with **Next.js**, **Fumadocs**, and **Tailwind CSS**.

### Products Covered

| Product | Description | Docs Path |
|---------|-------------|-----------|
| **Spry** | Operations management & workflow automation | `/spry` |
| **Surveilr** | Surveillance & monitoring platform | `/surveilr` |
| **QualityFolio** | Quality assurance & testing | `/qualityfolio` |
| **EAA** | Enterprise Architecture & governance | `/eaa` |

---

## 🌟 Features

- **📚 Comprehensive Documentation** - Well-organized documentation with multiple sections
- **🤖 AI-Powered Search** - Ask AI questions powered by Groq
- **💬 User Feedback System** - Collect feedback with JSON storage
- **🎨 Modern UI** - Beautiful, responsive design with dark mode
- **📱 Mobile Friendly** - Fully responsive layout
- **⚡ Fast Performance** - Built with Next.js 16 and Turbopack
- **🔍 Full-Text Search** - Integrated search across all docs
- **📧 GitHub Integration** - Shows last edit time for each page
- **🎯 Professional Branding** - Consistent logo and favicon

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| [Next.js](https://nextjs.org/) | React framework | 16.0.1 |
| [Fumadocs](https://fumadocs.vercel.app/) | Documentation framework | 16.2.4 |
| [Tailwind CSS](https://tailwindcss.com/) | Styling | 4.1.16 |
| [TypeScript](https://www.typescriptlang.org/) | Type safety | 5.9.3 |
| [Groq](https://groq.com) | AI provider | Latest |
| [AI SDK](https://sdk.vercel.ai/) | AI integration | 5.0.104 |
| [Lucide React](https://lucide.dev/) | Icons | 0.552.0 |
| [Zod](https://zod.dev/) | Validation | 4.1.13 |

---

## 📁 Project Structure
```
docs.opsfolio.com/
├── content/
│   └── docs/                         # 📚 All documentation
│       ├── meta.json                 # Root navigation
│       ├── index.mdx                 # Home page
│       ├── getting-started.mdx       # Global getting started
│       ├── spry/                     # Spry product docs
│       │   ├── meta.json
│       │   ├── index.mdx
│       │   ├── getting-started/
│       │   ├── core-concepts/
│       │   ├── reference-guides/
│       │   └── advanced/
│       ├── surveilr/                 # Surveilr product docs
│       ├── qualityfolio/             # QualityFolio product docs
│       └── eaa/                      # EAA product docs
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/                 # 🤖 AI chat endpoint
│   │   │   ├── feedback/             # 👍 Feedback API
│   │   │   └── search/               # 🔍 Search endpoint
│   │   ├── (docs)/                   # Dynamic docs pages
│   │   ├── (home)/                   # Home/landing page
│   │   ├── layout.tsx
│   │   ├── global.css
│   │   └── mdx-components.tsx
│   ├── components/
│   │   ├── feedback.tsx
│   │   ├── search.tsx
│   │   ├── navbar.tsx
│   │   └── ui/
│   ├── lib/
│   │   ├── source.ts                 # Fumadocs config
│   │   ├── layout.shared.tsx
│   │   ├── db.ts
│   │   └── feedback.ts
│   └── mdx-components.tsx
├── db/
│   └── feedback.json                 # Auto-created
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   ├── logo.svg
│   └── robots.txt
├── .env.sample                       # Environment template
├── source.config.ts                  # MDX configuration
├── next.config.mjs
├── tailwind.config.ts
├── package.json
└── README.md
```

**Key Directories:**

- `content/docs/` = All documentation content
- `src/app/` = Next.js pages and layouts
- `src/components/` = React components
- `src/lib/` = Utility functions and configs
- `public/` = Static files (images, icons)
  
---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18 or higher
- **npm** 10 or higher
- **Git**
- **Groq API Key** ([Get free key](https://console.groq.com/keys))

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/opsfolio/docs.opsfolio.com.git
   cd docs.opsfolio.com
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up environment variables**
```bash
   cp .env.sample .env.local
```
   
4. **Add your API key** to `.env.local`:
```env
   # Required: Get free key at https://console.groq.com/keys
   GROQ_API_KEY=gsk_your_actual_key_here
   
   # Optional: GitHub integration
   GITHUB_TOKEN=ghp_your_token_here
   NEXT_PUBLIC_GITHUB_OWNER=opsfolio
   NEXT_PUBLIC_GITHUB_REPO=docs.opsfolio.com
   NEXT_PUBLIC_GITHUB_DOCS_PATH=content/docs
```

5. **Start development server**
```bash
   npm run dev
```

6. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🌍 Environment Variables

### Required

| Variable | Description | Get Value |
|----------|-------------|-----------|
| `GROQ_API_KEY` | Groq AI API key for search | [console.groq.com/keys](https://console.groq.com/keys) |

### Optional

| Variable | Description | Default |
|----------|-------------|---------|
| `GITHUB_TOKEN` | GitHub token for last edit time | (not set) |
| `NEXT_PUBLIC_GITHUB_OWNER` | GitHub repository owner | opsfolio |
| `NEXT_PUBLIC_GITHUB_REPO` | GitHub repository name | docs.opsfolio.com |
| `NEXT_PUBLIC_GITHUB_DOCS_PATH` | Path to docs in repo | content/docs |

---

## 📖 Documentation Guide

### Adding New Documentation

1. **Create a new `.mdx` file** in `content/docs/` subdirectory
```bash
   touch content/docs/spry/section/new-page.mdx
```

2. **Add frontmatter**:
```mdx
   ---
   title: "Your Page Title"
   description: "Brief description for SEO"
   icon: "FileText"
   ---

   # Your Content Here

   Content using MDX syntax...
```

3. **Update `meta.json`** to include your page in navigation:
```json
   {
     "title": "Section Name",
     "pages": ["existing-page", "new-page"]
   }
```

4. **Preview changes**:
```bash
   npm run dev
```

### Documentation Structure

Each product follows this structure:
```
product-name/
├── meta.json              # Navigation config
├── index.mdx             # Product overview
├── getting-started/      # Getting started guides
├── core-concepts/        # Fundamental concepts
├── reference-guides/     # API/CLI references
└── advanced/             # Advanced topics
```

### Writing Guidelines

- **Clear & Concise**: Use simple language
- **Action-Oriented**: Start with verbs
- **Code Examples**: Include working snippets
- **Consistent Terminology**: Use same terms across products
- **Visual Aids**: Add diagrams/screenshots where helpful

---

## 💬 Features Guide

### 🤖 AI Search

Users can access AI search by:

- Clicking the **Ask AI** button (bottom-right)
- Using keyboard shortcut: `Cmd+/` (Mac) or `Ctrl+/` (Windows/Linux)

**Capabilities:**

- Natural language questions
- AI-powered answers with relevant links
- Retry/regenerate responses
- Full conversation history
- Powered by Groq (Llama 3.3 70B)

### 👍 Feedback System

Users can provide feedback on pages:

- **Thumbs Up** - Mark page as helpful
- **Thumbs Down** - Mark page as unhelpful
- **Optional Message** - Add detailed feedback
- **Automatic Metadata** - Captures user agent, timezone, platform

**Storage**: Saved to `db/feedback.json` (auto-created)

### 🔍 Search

Built-in full-text search:

- Fast and responsive
- Shows relevant results
- Easy navigation

---

## 🔧 Configuration

### Site Settings

Configure in `src/lib/layout.shared.tsx`:

- Logo: `public/logo.png`
- Title: "Opsfolio Documentation"
- Navigation options

### Styling

- **Tailwind CSS 4**: Main styling framework
- **PostCSS**: Advanced styling
- **Dark Mode**: Built-in support

---

## 📊 Database

### Feedback Storage

Stored in `db/feedback.json`:
```json
[
  {
    "id": 1,
    "url": "/spry/getting-started",
    "opinion": "good",
    "message": "Very helpful!",
    "session_id": "1701520800000-abc123",
    "metadata": "{\"userAgent\":\"...\"}",
    "created_at": "2024-12-02T10:00:00Z"
  }
]
```

---

## 🌐 API Routes

### POST `/api/feedback`
Save user feedback

**Request:**
```json
{
  "type": "good" | "bad",
  "page": "/docs/page-path",
  "timestamp": "2024-12-02T10:00:00Z"
}
```

**Response:** `{ "success": true }`

### POST `/api/chat`
AI-powered documentation Q&A

- Uses Groq API (Llama 3.3 70B)
- Context-aware responses
- Error handling

### GET `/api/search`
Full-text search

- Query parameter: `q`
- Returns relevant pages

---

## 📦 Available Scripts
```bash
# Development
npm run dev              # Start dev server (:3000)
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run types:check      # TypeScript validation
```

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import at [Vercel Dashboard](https://vercel.com)
3. Add environment variables:
   - `GROQ_API_KEY`
   - `GITHUB_TOKEN` (optional)
4. Deploy

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Self-Hosted
```bash
npm run build
# Deploy .next/, db/, public/, package.json
npm install --prod
npm start
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| AI Search not working | Verify `GROQ_API_KEY` in `.env.local` |
| Feedback not saving | Check `db/` permissions |
| GitHub last edit missing | Add `GITHUB_TOKEN` to `.env.local` |
| Build fails | Run `rm -rf .next && npm install` |
| TypeScript errors | Run `npm run types:check` |

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repository
2. Create feature branch (`git checkout -b docs/feature`)
3. Make changes
4. Test locally (`npm run dev`)
5. Commit with clear messages
6. Push and create Pull Request

### Guidelines

- Follow existing structure
- Use consistent terminology
- Include code examples
- Test all links
- Update `meta.json` files

---

## 📞 Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/opsfolio/docs.opsfolio.com/issues)

---

## 🔗 Resources

- [Fumadocs Documentation](https://fumadocs.vercel.app/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Groq API Docs](https://console.groq.com/docs)
- [AI SDK Documentation](https://sdk.vercel.ai/)

---

## 🙏 Acknowledgments

- Built with [Fumadocs](https://fumadocs.vercel.app/)
- Powered by [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- AI by [Groq](https://groq.com/)

---

## 📚 Additional Documentation

For detailed guidelines, see:

- [GETTING-STARTED.md](getting-started.md) - Comprehensive getting started guide
