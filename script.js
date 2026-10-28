/**
 * Aster’s Digital Universe — Central Configuration & App Script
 */

const CONFIG = {
    TELEGRAM_BOT_URL: "https://t.me/your_telegram_bot_username", 
    socials: {
        telegram: "https://t.me/your_telegram_channel",
        github: "https://github.com/nyeineimonzaw",
        email: "mailto:contact@example.com"
    }
};

const projectsData = [
    {
        title: "Genius Excel Formula",
        category: "Educational Platform",
        description: "Structured textbooks, case study workbooks, and interactive practice levels for advanced Excel mastery.",
        url: "#",
        status: "Active"
    },
    {
        title: "Castle Tech Customer Care Chatbot",
        category: "AI & Automation",
        description: "Automated customer support chatbot deployed on GitHub Pages for computer sales and technical services.",
        url: "#",
        status: "Deployed"
    },
    {
        title: "Phoe War's Alphabet Adventure",
        category: "Digital Storybooks",
        description: "Waldorf-inspired watercolor educational children's storybook and workbook series.",
        url: "#",
        status: "In Progress"
    }
];

const booksData = [
    {
        title: "Phoe War's Alphabet Adventure (Workbook Vol. 1)",
        author: "Aster Zaw",
        category: "Children Education",
        language: "Bilingual",
        format: "PDF",
        access: "Free",
        description: "An engaging Waldorf-inspired alphabet learning guide featuring custom watercolor mascot illustrations.",
        detailUrl: "#",
        downloadUrl: "#"
    },
    {
        title: "Genius Excel Formulas & Dashboards Guide",
        author: "Aster Zaw",
        category: "Technology & Business",
        language: "Myanmar",
        format: "PDF",
        access: "Premium",
        description: "Comprehensive handbook covering XLOOKUP, SUMIFS, Power Query, and dynamic financial dashboards.",
        detailUrl: "#",
        downloadUrl: ""
    }
];

const resourcesData = [
    {
        title: "Excel Formula Masterclass",
        category: "Spreadsheet Tutorials",
        description: "Step-by-step guides and practice exercises for business operations and inventory control."
    },
    {
        title: "Waldorf Home Rhythm & Crafts",
        category: "Child Development",
        description: "Articles and practical guides on incorporating natural rhythms, storytelling, and domestic crafts."
    },
    {
        title: "AI Video & Mascot Creation",
        category: "Digital Creativity",
        description: "Workflows on creating short educational video content and mascots for technology tutorials."
    }
];

const blogData = [
    {
        title: "Building Warm Digital Spaces for Modern Learners",
        date: "October 2026",
        snippet: "Reflections on blending Waldorf educational principles with digital tools and automated workflows."
    },
    {
        title: "Optimizing Small Business Inventory with Excel",
        date: "October 2026",
        snippet: "Practical techniques using advanced formulas to track stock, sales, and depreciation efficiently."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initTelegramLinks();
    renderProjects();
    renderBooks();
    renderResources();
    renderBlog();
    renderContact();
    setDynamicYear();
    initBookFilters();
});

function initNavigation() {
    const toggleBtn = document.getElementById("mobileMenuToggle");
    const mainNav = document.getElementById("mainNav");

    if (toggleBtn && mainNav) {
        toggleBtn.addEventListener("click", () => {
            mainNav.classList.toggle("active");
        });

        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("active");
            });
        });
    }
}

function initTelegramLinks() {
    const telegramElements = document.querySelectorAll("#headerTelegramBtn, #heroTelegramBtn, #footerTelegramBtn");
    telegramElements.forEach(el => {
        if (CONFIG.TELEGRAM_BOT_URL && CONFIG.TELEGRAM_BOT_URL.startsWith("http")) {
            el.href = CONFIG.TELEGRAM_BOT_URL;
        } else {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                alert("Telegram bot URL is not configured yet. Please update script.js with your valid bot link.");
            });
        }
    });
}

function renderProjects() {
    const container = document.getElementById("projectsContainer");
    if (!container) return;

    container.innerHTML = projectsData.map(p => `
        <div class="card">
            <div>
                <div class="card-meta">${escapeHTML(p.category)} • ${escapeHTML(p.status)}</div>
                <h3>${escapeHTML(p.title)}</h3>
                <p>${escapeHTML(p.description)}</p>
            </div>
            <div>
                ${p.url && p.url !== "#" ? `<a href="${escapeHTML(p.url)}" class="btn btn-secondary" target="_blank" rel="noopener">View Project</a>` : `<span class="badge badge-free">Coming Soon</span>`}
            </div>
        </div>
    `).join("");
}

function renderBooks(filteredBooks = booksData) {
    const container = document.getElementById("booksContainer");
    const emptyMsg = document.getElementById("noBooksMessage");
    if (!container) return;

    if (filteredBooks.length === 0) {
        container.innerHTML = "";
        emptyMsg.classList.remove("hidden");
        return;
    }

    emptyMsg.classList.add("hidden");
    container.innerHTML = filteredBooks.map(b => `
        <div class="card">
            <div>
                <div class="card-meta">${escapeHTML(b.category)} | ${escapeHTML(b.language)}</div>
                <h3>${escapeHTML(b.title)}</h3>
                <p><strong>Author:</strong> ${escapeHTML(b.author)}</p>
                <p>${escapeHTML(b.description)}</p>
            </div>
            <div>
                <div style="margin-bottom: 15px;">
                    <span class="badge ${b.access === 'Free' ? 'badge-free' : 'badge-premium'}">${escapeHTML(b.access)}</span>
                    <span class="badge" style="background-color: var(--sand-beige); color: var(--charcoal-green);">${escapeHTML(b.format)}</span>
                </div>
                ${b.downloadUrl && b.downloadUrl !== "#" ? `<a href="${escapeHTML(b.downloadUrl)}" class="btn btn-primary" target="_blank" rel="noopener">Download</a>` : `<span style="font-size: 0.85rem; color: #778580; font-style: italic;">Available upon request</span>`}
            </div>
        </div>
    `).join("");
}

function renderResources() {
    const container = document.getElementById("resourcesContainer");
    if (!container) return;

    container.innerHTML = resourcesData.map(r => `
        <div class="card">
            <div>
                <div class="card-meta">${escapeHTML(r.category)}</div>
                <h3>${escapeHTML(r.title)}</h3>
                <p>${escapeHTML(r.description)}</p>
            </div>
        </div>
    `).join("");
}

function renderBlog() {
    const container = document.getElementById("blogContainer");
    if (!container) return;

    container.innerHTML = blogData.map(blog => `
        <div class="card">
            <div>
                <div class="card-meta">${escapeHTML(blog.date)}</div>
                <h3>${escapeHTML(blog.title)}</h3>
                <p>${escapeHTML(blog.snippet)}</p>
            </div>
        </div>
    `).join("");
}

function renderContact() {
    const card = document.getElementById("contactCard");
    if (!card) return;

    card.innerHTML = `
        <h3>Stay Connected</h3>
        <p>Reach out for collaborations, learning resources, or inquiries regarding educational tools and digital projects.</p>
        <div class="social-links">
            <a href="${escapeHTML(CONFIG.socials.telegram)}" target="_blank" rel="noopener" aria-label="Telegram"><i class="fa-brands fa-telegram"></i></a>
            <a href="${escapeHTML(CONFIG.socials.github)}" target="_blank" rel="noopener" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
            <a href="${escapeHTML(CONFIG.socials.email)}" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
        </div>
    `;
}

function initBookFilters() {
    const searchInput = document.getElementById("bookSearchInput");
    const categorySelect = document.getElementById("categoryFilter");
    const languageSelect = document.getElementById("languageFilter");

    const categories = [...new Set(booksData.map(b => b.category))];
    categories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat;
        categorySelect.appendChild(opt);
    });

    const filterHandler = () => {
        const query = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value;
        const selectedLanguage = languageSelect.value;

        const filtered = booksData.filter(b => {
            const matchesQuery = b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query);
            const matchesCategory = selectedCategory === "all" || b.category === selectedCategory;
            const matchesLanguage = selectedLanguage === "all" || b.language === selectedLanguage;
            return matchesQuery && matchesCategory && matchesLanguage;
        });

        renderBooks(filtered);
    };

    searchInput.addEventListener("input", filterHandler);
    categorySelect.addEventListener("change", filterHandler);
    languageSelect.addEventListener("change", filterHandler);
}

function setDynamicYear() {
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'}[tag] || tag)
    );
}
