# 🧑‍💻 Personal Portfolio Website

This is a modern, mobile-responsive personal portfolio website for a 2nd-year M.Tech Data Science student at IIT, targeting roles in Machine Learning, Data Science, and Quantitative Finance.

🚀 [Live Demo](https://yourusername.github.io/) *(replace with your GitHub Pages URL)*

---

## 📁 Folder Structure
```
📦 root/
├── index.html               # Home Page
├── about.html               # About Me Page
├── projects.html            # Projects (dynamic)
├── blog.html                # Blog (dynamic)
├── achievements.html        # Achievements Page
├── contact.html             # Contact Page
├── blog/                    # Blog post HTML files
│   ├── example-post.html
├── assets/
│   ├── css/
│   │   └── style.css        # Custom styles
│   ├── js/
│   │   ├── main.js          # Dynamic JS rendering
│   │   ├── projects.json    # Project data
│   │   └── blogs.json       # Blog metadata
│   ├── images/              # Profile and project images
│   └── resume.pdf           # Your resume
└── README.md                # This file
```

---

## ✨ Features
- ✅ Clean, modern UI with responsive layout (Flexbox/Grid)
- 📄 Dynamic Projects and Blog rendering from JSON
- 🌗 Light/Dark mode toggle
- 🐢 Lazy-loaded images for speed
- 🎯 SEO meta tags and Open Graph support
- 📬 Contact form + calendar scheduling link
- ✨ AOS animations and smooth transitions

---

## 🔧 How to Use

### 1. 🖥 Clone the Repository
```bash
git clone https://github.com/yourusername/yourportfolio.git
cd yourportfolio
```

### 2. 🧩 Customize Content
- **Update `projects.json`**: Add new projects easily.
- **Update `blogs.json`**: Add new blog metadata.
- **Add blog HTML files** in `/blog/` folder.
- **Edit `about.html`, `achievements.html`, etc.** for your info.
- **Add your profile image** in `/assets/images/`
- **Replace `resume.pdf`** in `/assets/`

### 3. 🌐 Deploy to GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main
```
Then go to **Settings > Pages > Source: root `/` on main branch**.

### 4. 🔄 Update Projects & Blogs
- Just modify `projects.json` or `blogs.json`
- No need to edit HTML for adding entries

---

## 🧠 JSON Format
### `projects.json`
```json
[
  {
    "name": "My Project",
    "description": "Short summary",
    "github": "https://github.com/yourname/project",
    "demo": "https://demo.com",
    "tags": ["NLP", "Deep Learning"]
  }
]
```
### `blogs.json`
```json
[
  {
    "title": "Cool ML Blog",
    "date": "2025-05-01",
    "preview": "This is a short preview...",
    "filename": "cool-blog.html",
    "tags": ["ML", "NLP"]
  }
]
```

---

## 📈 SEO & Analytics
- Customize `<meta>` tags in `index.html`
- Add your Google Analytics code in `<head>` (optional)

---

## 🧰 Tools Used
- HTML5, CSS3, JavaScript
- Optional: AOS.js (animations), Tailwind/Bootstrap (if added)
- Hosted on GitHub Pages

---

## 🙏 Credits
Designed and developed by [Your Name].
Feel free to fork, customize, and use for your own portfolio!

---

## 📬 Contact
- 📧 your.email@domain.com
- 💼 [LinkedIn](https://linkedin.com/in/yourusername)
- 💻 [GitHub](https://github.com/yourusername)
- 📅 [Calendly](https://calendly.com/yourusername)
