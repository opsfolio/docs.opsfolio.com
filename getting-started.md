---
title: "Fumadocs Quick Start"
description: "Complete guide for Fumadocs MDX documentation setup and usage"
---

# Fumadocs - Complete Quick Start Guide

**Repo:** https://github.com/opsfolio/docs.opsfolio.com | **Stack:** Fumadocs v16.2.4 + Next.js v16 + Tailwind v4

---

## 🔄 Clone & Setup Repository

### Step 1: Clone Repository
```bash
git clone https://github.com/opsfolio/docs.opsfolio.com.git
cd docs.opsfolio.com
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Setup Environment
```bash
cp .env.sample .env.local
# Edit .env.local and add your API keys if needed
```

### Step 4: Run Development Server
```bash
npm run dev
# Open http://localhost:3000
```

---

## 📁 Folder Structure (What You Need)

```
docs.opsfolio.com/
├── content/
│   └── docs/                         # 📚 All documentation
│       ├── meta.json                 # Root navigation
│       ├── index.mdx                 # Home page
│       ├── spry/                     # Product section
│       │   ├── meta.json
│       │   ├── index.mdx
│       │   ├── getting-started/
│       │   │   ├── meta.json
│       │   │   ├── introduction.mdx
│       │   │   ├── installation.mdx
│       │   │   └── quick-start.mdx
│       │   ├── core-concepts/
│       │   │   ├── meta.json
│       │   │   ├── architecture.mdx
│       │   │   └── principles.mdx
│       │   ├── reference-guides/
│       │   │   ├── meta.json
│       │   │   ├── cli-commands.mdx
│       │   │   └── api-reference.mdx
│       │   └── advanced/
│       │       ├── meta.json
│       │       ├── performance.mdx
│       │       └── troubleshooting.mdx
│       ├── surveilr/                 # Another product
│       │   ├── meta.json
│       │   ├── index.mdx
│       │   └── getting-started/
│       │       ├── meta.json
│       │       └── installation.mdx
│       ├── qualityfolio/             # Another product
│       └── eaa/                      # Another product
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/
│   │   │   │   └── route.ts          # 🤖 AI chat endpoint
│   │   │   ├── feedback/
│   │   │   │   └── route.ts          # 👍 Feedback API
│   │   │   └── search/
│   │   │       └── route.ts          # 🔍 Search endpoint
│   │   ├── (docs)/
│   │   │   └── [[...slug]]/
│   │   │       └── page.tsx          # Dynamic docs pages
│   │   ├── (home)/
│   │   │   └── page.tsx              # Home/landing page
│   │   ├── layout.tsx                # Root layout
│   │   ├── global.css                # Global styles
│   │   ├── custom.css                # Custom theme
│   │   └── mdx-components.tsx        # MDX component mappings
│   ├── components/
│   │   ├── feedback.tsx              # Feedback component
│   │   ├── search.tsx                # Search component
│   │   ├── markdown.tsx              # Markdown processor
│   │   ├── navbar.tsx                # Navigation bar
│   │   ├── sidebar.tsx               # Sidebar navigation
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── callout.tsx
│   │       ├── tabs.tsx
│   │       ├── accordion.tsx
│   │       ├── code-block.tsx
│   │       └── card.tsx
│   ├── lib/
│   │   ├── source.ts                 # Fumadocs config
│   │   ├── layout.shared.tsx          # Layout setup
│   │   ├── db.ts                     # Database layer
│   │   ├── feedback.ts               # Feedback logic
│   │   ├── git-utils.ts              # Git integration
│   │   └── cn.ts                     # Utility functions
│   └── mdx-components.tsx            # MDX component registry
├── db/
│   └── feedback.json                 # Feedback storage (auto-created)
├── public/
│   ├── favicon.ico                   # Browser tab icon
│   ├── logo.png                      # Logo image
│   ├── logo.svg                      # Logo vector
│   ├── robots.txt                    # SEO robots config
│   └── sitemap.xml                   # XML sitemap
├── .github/
│   └── workflows/                    # GitHub Actions
├── .env.sample                       # Environment template
├── .env.local                        # Environment variables (local)
├── .gitignore                        # Git ignore rules
├── source.config.ts                  # MDX configuration
├── next.config.mjs                   # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS config
├── tsconfig.json                     # TypeScript configuration
├── postcss.config.mjs                # PostCSS configuration
├── eslint.config.mjs                 # ESLint configuration
├── package.json                      # Dependencies & scripts
├── package-lock.json                 # Dependency lock file
├── README.md                         # Project readme
└── cli.json                          # CLI configuration
```

**Key Points:**
- `content/docs/` = Where you add all documentation
- `src/app/` = Next.js pages and layouts
- `src/components/` = React components
- `src/lib/` = Utility functions and configs
- `public/` = Static files (images, icons)

---

## ➕ Add New MDX Files to Documentation

### Method 1: Add Single Page

**Step 1:** Create new file
```bash
touch content/docs/spry/core-concepts/my-page.mdx
```

**Step 2:** Add frontmatter
```mdx
---
title: "My Page Title"
description: "Brief description for SEO"
icon: "Lightbulb"
index: 0
---

# My Content

This is my page content...
```

**Step 3:** Update parent `meta.json`

Edit `content/docs/spry/core-concepts/meta.json`:
```json
{
  "title": "Core Concepts",
  "icon": "Lightbulb",
  "pages": [
    "index",
    "architecture",
    "my-page"        # ← Add this
  ]
}
```

**Step 4:** Save and preview
```bash
npm run dev
# Check http://localhost:3000/docs/spry/core-concepts/my-page
```

---

### Method 2: Create New Folder Section

**Step 1:** Create folder
```bash
mkdir -p content/docs/spry/new-section
```

**Step 2:** Create `index.mdx`
```mdx
---
title: "New Section"
description: "Overview of new section"
icon: "BookOpen"
index: 0
---

# New Section

Welcome to this new section...
```

**Step 3:** Create `meta.json`
```json
{
  "title": "New Section",
  "icon": "BookOpen",
  "pages": [
    "index"
  ]
}
```

**Step 4:** Update root `meta.json`

Edit `content/docs/spry/meta.json`:
```json
{
  "title": "Spry",
  "pages": [
    "index",
    "getting-started",
    "core-concepts",
    "new-section"    # ← Add this
  ]
}
```

---

## 🎨 Styling MDX Files

### Option 1: Inline Tailwind Classes
```mdx
<div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
  <h3 className="text-xl font-bold mb-2">Styled Box</h3>
  <p className="text-gray-700">Content here</p>
</div>

<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
  Click Me
</button>
```

### Option 2: Use Fumadocs Components
```mdx
import { Card, Cards } from 'fumadocs-ui/components/card';

<Cards>
  <Card title="Feature 1" icon="Zap" className="bg-gradient-to-br from-blue-50 to-blue-100">
    Description
  </Card>
</Cards>
```

### Option 3: Global CSS Classes

Add to `src/app/global.css`:
```css
@layer components {
  .doc-highlight {
    @apply p-4 bg-yellow-50 border-l-4 border-yellow-400;
  }
  
  .doc-success {
    @apply p-4 bg-green-50 border-l-4 border-green-400;
  }
}
```

Then use in MDX:
```mdx
<div className="doc-highlight">
  Important highlighted content
</div>

<div className="doc-success">
  Success message content
</div>
```

### Option 4: Dark Mode Support
```mdx
<div className="p-4 bg-blue-50 dark:bg-blue-900 text-gray-800 dark:text-blue-100 rounded">
  Works in light and dark mode
</div>
```

---

## 🧩 Add Components to MDX Files

### Callout (Info/Warning/Error)
```mdx
import { Callout } from 'fumadocs-ui/components/callout';

<Callout type="info">
  📌 This is informational
</Callout>

<Callout type="warn">
  ⚠️ This is a warning
</Callout>

<Callout type="error">
  ❌ This is an error
</Callout>
```

### Steps (Numbered Instructions)
```mdx
import { Steps, Step } from 'fumadocs-ui/components/steps';

<Steps>
  <Step>
    ### Install Package
    ```bash
    npm install my-package
    ```
  </Step>

  <Step>
    ### Import and Use
    ```javascript
    import { something } from 'my-package';
    something();
    ```
  </Step>

  <Step>
    ### Run Your Code
    ```bash
    npm run dev
    ```
  </Step>
</Steps>
```

### Tabs (Code Examples)
```mdx
import { Tabs, Tab } from 'fumadocs-ui/components/tabs';

<Tabs items={["JavaScript", "Python", "Bash"]}>
  <Tab value="JavaScript">
    ```javascript
    console.log('Hello');
    ```
  </Tab>

  <Tab value="Python">
    ```python
    print('Hello')
    ```
  </Tab>

  <Tab value="Bash">
    ```bash
    echo "Hello"
    ```
  </Tab>
</Tabs>
```

### Cards (Feature Display)
```mdx
import { Card, Cards } from 'fumadocs-ui/components/card';

<Cards>
  <Card title="Feature 1" icon="Zap" href="/docs/feature1">
    Fast and efficient solution
  </Card>

  <Card title="Feature 2" icon="Lock">
    Secure by default
  </Card>

  <Card title="Feature 3" icon="Users">
    Great community support
  </Card>
</Cards>
```

### Accordion (FAQ/Expandable)
```mdx
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

<Accordions>
  <Accordion title="What is this?">
    This is a detailed explanation of what this is...
  </Accordion>

  <Accordion title="How do I use it?">
    Here's how you can use this feature...
  </Accordion>

  <Accordion title="Where can I get help?">
    You can get help from our community or documentation...
  </Accordion>
</Accordions>
```

### Code Blocks (Auto Syntax Highlight)
```mdx
```javascript
function hello() {
  console.log('Hello World');
}
```

```bash
npm install package
npm run dev
```

```json
{
  "name": "example",
  "version": "1.0.0"
}
```
```

---

## 🧭 Set Navigation (meta.json)

### Root Navigation

**File:** `content/docs/meta.json`

```json
{
  "title": "Documentation Hub",
  "pages": [
    "index",
    "spry",
    "surveilr",
    "qualityfolio",
    "eaa"
  ]
}
```

### Product Section Navigation

**File:** `content/docs/spry/meta.json`

```json
{
  "title": "Spry",
  "icon": "Rocket",
  "pages": [
    "index",
    "getting-started",
    "core-concepts",
    "reference-guides",
    "advanced",
    "troubleshooting"
  ]
}
```

### Subsection Navigation

**File:** `content/docs/spry/getting-started/meta.json`

```json
{
  "title": "Getting Started",
  "icon": "Rocket",
  "pages": [
    "index",
    "introduction",
    "installation",
    "quick-start",
    "first-project"
  ]
}
```

### Navigation Rules

| Rule | Example |
|------|---------|
| List filenames WITHOUT `.mdx` | `"installation"` ✅ NOT `"installation.mdx"` ❌ |
| Order in array = sidebar order | First item appears first |
| `title` = Sidebar display name | "Getting Started" shows as folder name |
| `icon` = Optional Lucide icon | "Rocket", "Zap", "Lock", etc. |
| File must be in same folder | `meta.json` in same folder as pages |

---

## 🔄 Convert Existing MD Files to MDX

### Step 1: Rename `.md` Files to `.mdx`

Manually rename each file from `filename.md` → `filename.mdx`

Or use your IDE/file explorer to batch rename all `.md` files to `.mdx`

### Step 2: Add Frontmatter to Each File

If file doesn't have frontmatter, add this at the top:

**Before:**
```markdown
# Installation

Steps to install...
```

**After:**
```mdx
---
title: "Installation"
description: "How to install the package"
icon: "Download"
---

# Installation

Steps to install...
```

### Step 3: Add Component Imports (Optional)

If using interactive components, add imports at top:

```mdx
---
title: "Installation"
description: "How to install the package"
---

import { Callout } from 'fumadocs-ui/components/callout';
import { Steps, Step } from 'fumadocs-ui/components/steps';

# Installation

<Steps>
  <Step>
    ### Step 1
    Content here
  </Step>
</Steps>

<Callout type="info">
Important info
</Callout>
```

### Step 4: Update meta.json Files

Ensure each folder has `meta.json` listing all pages:

```json
{
  "title": "Getting Started",
  "pages": [
    "index",
    "installation",
    "quick-start"
  ]
}
```

### Step 5: Test Conversion

```bash
npm run dev
# Check all pages load correctly
# Look for console errors
```

---

## 🚀 Run & Deploy

### Development (Local Preview)
```bash
npm run dev
# Open http://localhost:3000
# Hot reload on file changes
```

### Build for Production
```bash
npm run build
# Creates optimized build in .next/ folder
```

### Start Production Server
```bash
npm start
# Runs production build locally
```

### Type Check
```bash
npm run types:check
# Checks for TypeScript errors
```

### Clear Cache & Rebuild
```bash
rm -rf .next
npm run build
# Forces clean rebuild
```

---

## 📊 Common Workflow

```
1. Clone repo
   git clone https://github.com/opsfolio/docs.opsfolio.com.git

2. Install dependencies
   npm install

3. Create new file
   touch content/docs/spry/section/page.mdx

4. Add frontmatter & content
   Edit file with title, description, icon

5. Update meta.json
   Add page to parent folder's meta.json

6. Add components (optional)
   Import and use Fumadocs components

7. Style (optional)
   Use Tailwind classes or CSS components

8. Preview
   npm run dev
   Open localhost:3000

9. Commit changes
   git add .
   git commit -m "Add new page"
   git push

10. Deploy
    Push to GitHub → Auto deploys to Vercel
```

---

## ✅ Frontmatter Template

```mdx
---
title: "Page Title"
description: "Brief description for SEO (150-160 chars)"
icon: "IconName"
index: 0
---

import { Callout } from 'fumadocs-ui/components/callout';

# Main Heading

Your content here...

<Callout type="info">
Important information
</Callout>
```

**Icon Options:** Download, Zap, Settings, FileText, Terminal, Layers, Lock, Bug, GitPullRequest, HelpCircle, Award, BookOpen, Rocket, Lightbulb

---

## ✨ Quick Checklist

- [ ] Cloned repository
- [ ] Ran `npm install`
- [ ] Created `.mdx` file (or converted `.md`)
- [ ] Added frontmatter with `title` and `description`
- [ ] Updated parent `meta.json`
- [ ] Ran `npm run dev` to test
- [ ] Added components if needed
- [ ] Added styles if needed
- [ ] Links work correctly
- [ ] Ready to push to GitHub

---

**You're all set! Start documenting.** 🎉