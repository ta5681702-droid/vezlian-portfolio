/* ==========================================================================
   VEZLIAN - PERSONAL PORTFOLIO DATA CONFIGURATION & LOGIC
   ========================================================================== */

// ==========================================================================
// EDIT YOUR PORTFOLIO DATA HERE
// ==========================================================================
const portfolioData = {
  personal: {
    firstName: "MD TANIM",
    lastName: "CHOWDHURY",
    title: "Graphic Designer",
    tagline: "I create clean, meaningful and visually powerful designs that help brands communicate with confidence.",
    experience: "2+ Years",
    location: "Bangladesh",
    email: "contact@vezlian.com", // Replace with your email address
    cvUrl: "#", // Replace with your actual CV file link (e.g. "assets/MD_Tanim_CV.pdf")
    profileImage: "images/profile.jpg",
    logoImage: "images/logo.png"
  },

  aboutBio: [
    "I'm MD Tanim Chowdhury, a professional Graphic Designer focused on creating modern, meaningful and visually engaging design experiences.",
    "With 2+ years of experience, I work across branding, social media, print design, editorial design and other visual communication projects.",
    "I believe good design is not only about appearance — it is about communication, clarity and creating a memorable visual experience."
  ],

  services: [
    {
      number: "01",
      title: "BRAND IDENTITY",
      description: "Logo design, visual identity and complete brand systems crafted for longevity."
    },
    {
      number: "02",
      title: "SOCIAL MEDIA DESIGN",
      description: "Creative and engaging social media visuals tailored for modern digital brands."
    },
    {
      number: "03",
      title: "PRINT DESIGN",
      description: "Flyers, brochures, posters, business cards and premium tactile marketing materials."
    },
    {
      number: "04",
      title: "PACKAGING DESIGN",
      description: "Modern, structural and eye-catching packaging and product artwork."
    },
    {
      number: "05",
      title: "EDITORIAL DESIGN",
      description: "Magazines, catalogues, publications and structured editorial layouts."
    },
    {
      number: "06",
      title: "CREATIVE DESIGN",
      description: "Custom visual solutions designed around specific high-impact project needs."
    }
  ],

  categories: ["ALL", "BRANDING", "LOGO", "SOCIAL MEDIA", "POSTER", "BROCHURE", "PRINT", "PACKAGING", "EDITORIAL"],

  projects: [
    {
      id: "proj-1",
      title: "RICHMAN",
      category: "BRANDING",
      year: "2026",
      role: "Brand Identity Designer",
      thumbnail: "images/projects/richman-thumb.jpg",
      description: "Complete visual identity and brand execution for Richman, creating an elegant visual presence tailored for modern fashion retail.",
      gallery: [
        "images/projects/richman-thumb.jpg",
        "images/projects/richman-detail-1.jpg"
      ]
    },
    {
      id: "proj-2",
      title: "VEZLIAN IDENTITY",
      category: "LOGO",
      year: "2026",
      role: "Visual Identity",
      thumbnail: "images/logo.png",
      description: "Core logo symbol and identity design crafted for VEZLIAN personal branding, based on precision and futuristic vision.",
      gallery: [
        "images/logo.png"
      ]
    },
    {
      id: "proj-3",
      title: "AURA COSMETICS",
      category: "PACKAGING",
      year: "2025",
      role: "Packaging & Print Designer",
      thumbnail: "images/projects/aura-packaging.jpg",
      description: "Minimalist luxury packaging design for a skincare collection focusing on clean composition and premium finishes.",
      gallery: [
        "images/projects/aura-packaging.jpg"
      ]
    },
    {
      id: "proj-4",
      title: "URBAN BEAT MAG",
      category: "EDITORIAL",
      year: "2025",
      role: "Editorial Layout",
      thumbnail: "images/projects/urban-mag.jpg",
      description: "Bold grid system and editorial typography layout for a contemporary culture magazine.",
      gallery: [
        "images/projects/urban-mag.jpg"
      ]
    },
    {
      id: "proj-5",
      title: "CYBERPUNK FEST",
      category: "POSTER",
      year: "2025",
      role: "Graphic Designer",
      thumbnail: "images/projects/poster-fest.jpg",
      description: "High-contrast promotional print poster design for a music & visual arts festival.",
      gallery: [
        "images/projects/poster-fest.jpg"
      ]
    },
    {
      id: "proj-6",
      title: "SUMMIT BROCHURE",
      category: "BROCHURE",
      year: "2026",
      role: "Print & Layout",
      thumbnail: "images/projects/brochure.jpg",
      description: "Corporate tri-fold brochure design with modern typography hierarchy and editorial visual pacing.",
      gallery: [
        "images/projects/brochure.jpg"
      ]
    }
  ],

  skills: [
    "Logo Design", "Brand Identity", "Typography", "Layout Design", 
    "Social Media Design", "Poster Design", "Brochure Design", 
    "Editorial Design", "Packaging Design", "Print Design"
  ],

  tools: [
    { name: "Adobe Photoshop", icon: "image" },
    { name: "Adobe Illustrator", icon: "pen-tool" },
    { name: "Adobe InDesign", icon: "book-open" },
    { name: "Figma", icon: "layout" }
  ],

  socials: [
    { name: "Behance", url: "https://behance.net" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "LinkedIn", url: "https://linkedin.com" }
  ]
};

// ==========================================================================
// APPLICATION INITIALIZATION & RENDERING
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    // 1. Hide Loading Screen
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            document.body.classList.remove("loading");
        }
    }, 1200);

    // 2. Populate Data from Object
    populatePersonalData();
    populateServices();
    populateFilters();
    renderProjects("ALL");
    populateSkillsAndTools();
    
    // 3. Setup Interactions
    setupNavbar();
    setupCustomCursor();
    setupParallax();
    setupModal();
    
    // 4. Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }
}

/* Populate Personal Info */
function populatePersonalData() {
    const p = portfolioData.personal;
    
    // Hero
    document.getElementById("heroFirstName").textContent = p.firstName;
    document.getElementById("heroLastName").textContent = p.lastName;
    document.getElementById("heroTagline").textContent = p.tagline;
    document.getElementById("heroExp").textContent = p.experience;
    document.getElementById("heroLocation").textContent = p.location;
    document.getElementById("heroPortrait").src = p.profileImage;
    document.getElementById("navLogo").src = p.logoImage;

    // About
    document.getElementById("aboutPortrait").src = p.profileImage;
    document.getElementById("statExp").textContent = p.experience;
    document.getElementById("statLoc").textContent = p.location.toUpperCase();
    document.getElementById("downloadCvBtn").href = p.cvUrl;

    const bioContainer = document.getElementById("aboutBio");
    bioContainer.innerHTML = portfolioData.aboutBio.map(para => `<p>${para}</p>`).join("");

    // Profile Card
    document.getElementById("profileCardImg").src = p.profileImage;
    document.getElementById("profileName").textContent = `${p.firstName} ${p.lastName}`;
    document.getElementById("profileTitle").textContent = p.title;
    document.getElementById("profileExp").textContent = p.experience;
    document.getElementById("profileLoc").textContent = p.location;

    // Social Links Render
    const socialsContainer = document.getElementById("profileSocials");
    const contactSocialsContainer = document.getElementById("contactSocials");
    
    const socialHTML = portfolioData.socials.map(s => `
        <a href="${s.url}" target="_blank" rel="noopener" class="social-link-btn">${s.name}</a>
    `).join("");

    if (socialsContainer) socialsContainer.innerHTML = socialHTML;
    if (contactSocialsContainer) contactSocialsContainer.innerHTML = socialHTML;

    // Contact Email
    const contactEmail = document.getElementById("contactEmail");
    contactEmail.textContent = p.email;
    contactEmail.href = `mailto:${p.email}`;
}

/* Populate Services */
function populateServices() {
    const container = document.getElementById("servicesContainer");
    container.innerHTML = portfolioData.services.map(s => `
        <div class="service-card">
            <span class="service-num">${s.number}</span>
            <h3>${s.title}</h3>
            <p>${s.description}</p>
        </div>
    `).join("");
}

/* Populate Portfolio Category Filters */
function populateFilters() {
    const container = document.getElementById("portfolioFilters");
    container.innerHTML = portfolioData.categories.map((cat, idx) => `
        <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-category="${cat}">${cat}</button>
    `).join("");

    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-btn")) {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            renderProjects(e.target.dataset.category);
        }
    });
}

/* Render Projects Grid */
function renderProjects(category) {
    const grid = document.getElementById("projectsGrid");
    
    const filtered = category === "ALL" 
        ? portfolioData.projects 
        : portfolioData.projects.filter(p => p.category.toUpperCase() === category.toUpperCase());

    grid.innerHTML = filtered.map(p => `
        <div class="project-card" data-id="${p.id}">
            <div class="project-img-holder">
                <img src="${p.thumbnail}" alt="${p.title}" loading="lazy" onerror="this.src='images/logo.png'">
                <div class="project-overlay">
                    <span class="view-proj-text">VIEW PROJECT →</span>
                </div>
            </div>
            <div class="project-meta">
                <div>
                    <h3>${p.title}</h3>
                    <span class="project-cat">${p.category}</span>
                </div>
                <span class="project-year">${p.year}</span>
            </div>
        </div>
    `).join("");

    // Attach Click Events for Modal View
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", () => {
            const projId = card.dataset.id;
            openProjectModal(projId);
        });
    });
}

/* Populate Skills and Tools */
function populateSkillsAndTools() {
    const skillsContainer = document.getElementById("skillsContainer");
    skillsContainer.innerHTML = portfolioData.skills.map(s => `
        <span class="skill-chip">${s}</span>
    `).join("");

    const toolsContainer = document.getElementById("toolsContainer");
    toolsContainer.innerHTML = portfolioData.tools.map(t => `
        <div class="tool-card">
            <i data-lucide="${t.icon}"></i>
            <span>${t.name}</span>
        </div>
    `).join("");
}

/* Custom Cursor Tracker */
function setupCustomCursor() {
    const cursor = document.getElementById("cursor");
    const follower = document.getElementById("cursorFollower");

    if (window.innerWidth < 992) return; // Disable cursor effect on mobile

    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        follower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });
}

/* Interactive Parallax on Hero Frame */
function setupParallax() {
    const frame = document.getElementById("heroFrame");
    if (!frame) return;

    document.addEventListener("mousemove", (e) => {
        if (window.innerWidth < 992) return;
        const xAxis = (window.innerWidth / 2 - e.clientX) / 45;
        const yAxis = (window.innerHeight / 2 - e.clientY) / 45;
        frame.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
}

/* Navbar Behavior */
function setupNavbar() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Close menu when link clicked
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

/* Project Modal Handler */
let currentProjectIndex = 0;

function setupModal() {
    const modal = document.getElementById("projectModal");
    const closeBtn = document.getElementById("modalClose");
    const overlay = document.getElementById("modalOverlay");

    const closeModal = () => {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
    };

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
}

function openProjectModal(projectId) {
    const modal = document.getElementById("projectModal");
    const content = document.getElementById("modalContent");
    
    currentProjectIndex = portfolioData.projects.findIndex(p => p.id === projectId);
    const p = portfolioData.projects[currentProjectIndex];

    if (!p) return;

    content.innerHTML = `
        <div class="modal-header">
            <h2>${p.title}</h2>
            <div class="modal-meta">
                <span><strong>Category:</strong> ${p.category}</span>
                <span><strong>Year:</strong> ${p.year}</span>
                <span><strong>Role:</strong> ${p.role}</span>
            </div>
        </div>
        <p class="modal-description">${p.description}</p>
        <div class="modal-images">
            ${p.gallery.map(img => `<img src="${img}" alt="${p.title}" onerror="this.src='images/logo.png'">`).join("")}
        </div>
        <div class="modal-nav">
            <button class="modal-nav-btn" id="prevProjBtn">← PREVIOUS PROJECT</button>
            <button class="modal-nav-btn" id="nextProjBtn">NEXT PROJECT →</button>
        </div>
    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    // Modal navigation listeners
    document.getElementById("prevProjBtn").addEventListener("click", () => {
        currentProjectIndex = (currentProjectIndex - 1 + portfolioData.projects.length) % portfolioData.projects.length;
        openProjectModal(portfolioData.projects[currentProjectIndex].id);
    });

    document.getElementById("nextProjBtn").addEventListener("click", () => {
        currentProjectIndex = (currentProjectIndex + 1) % portfolioData.projects.length;
        openProjectModal(portfolioData.projects[currentProjectIndex].id);
    });
}