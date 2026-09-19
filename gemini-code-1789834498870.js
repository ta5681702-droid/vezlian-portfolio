// ==========================================================================
// EDIT YOUR INFORMATION HERE (portfolioData)
// All dynamic content is driven by this single object.
// ==========================================================================

const portfolioData = {
    personal: {
        name: "MD Tanim Chowdhury",
        title: "Graphic Designer",
        subtitle: "GRAPHIC DESIGNER<br>& VISUAL CREATIVE",
        label: "CREATIVE GRAPHIC DESIGNER",
        tagline: "CRAFTED FROM VISION",
        experience: "2+ Years",
        location: "Bangladesh",
        email: "hello@example.com",
        freelanceStatus: "Available",
        
        // Ensure these match the files in your directory
        profileImage: "1000056844.jpg", 
        logoImage: "1000063612.jpg",

        heroDescription: "I create clean, meaningful and visually powerful designs that help brands communicate with confidence.",
        aboutText: [
            "I'm MD Tanim Chowdhury, a professional Graphic Designer focused on creating modern, meaningful and visually engaging design experiences.",
            "With 2+ years of experience, I work across branding, social media, print design, editorial design and other visual communication projects.",
            "I believe good design is not only about appearance — it is about communication, clarity and creating a memorable visual experience."
        ]
    },

    socials: [
        { name: "Behance", url: "#", icon: "Be" },
        { name: "Instagram", url: "#", icon: "In" },
        { name: "Facebook", url: "#", icon: "Fb" },
        { name: "LinkedIn", url: "#", icon: "Li" }
    ],

    marqueeTags: [
        "GRAPHIC DESIGN", "BRAND IDENTITY", "LOGO DESIGN", "SOCIAL MEDIA", "PRINT DESIGN", "CREATIVE DIRECTION"
    ],

    services: [
        { id: "01", title: "BRAND IDENTITY", desc: "Logo design, visual identity and complete brand systems." },
        { id: "02", title: "SOCIAL MEDIA DESIGN", desc: "Creative and engaging social media visuals for modern brands." },
        { id: "03", title: "PRINT DESIGN", desc: "Flyers, brochures, posters, business cards and marketing materials." },
        { id: "04", title: "PACKAGING DESIGN", desc: "Modern and eye-catching packaging and product visuals." },
        { id: "05", title: "EDITORIAL DESIGN", desc: "Magazines, catalogues, brochures and publication layouts." },
        { id: "06", title: "CREATIVE DESIGN", desc: "Custom visual solutions designed around specific project needs." }
    ],

    skills: [
        "Logo Design", "Brand Identity", "Typography", "Layout Design", 
        "Social Media Design", "Poster Design", "Brochure Design", 
        "Editorial Design", "Packaging Design", "Print Design"
    ],

    tools: [
        "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma"
    ],

    process: [
        { id: "01", title: "DISCOVER", desc: "Understand the idea, audience and goals." },
        { id: "02", title: "DEFINE", desc: "Build the visual direction and creative strategy." },
        { id: "03", title: "DESIGN", desc: "Develop the visual concept and refine the details." },
        { id: "04", title: "DELIVER", desc: "Prepare polished final assets for real-world use." }
    ],

    // Add, edit or remove projects here
    projects: [
        {
            id: 1,
            title: "Richman",
            category: "Branding",
            year: "2026",
            thumbnail: "1000056844.jpg", // Using placeholder image from upload
            description: "A complete brand identity design focusing on luxury and modern minimalism.",
            images: ["1000056844.jpg", "1000056844.jpg"]
        },
        {
            id: 2,
            title: "Urban Cafe",
            category: "Social Media",
            year: "2025",
            thumbnail: "1000056844.jpg",
            description: "Engaging social media campaigns and digital menu designs.",
            images: ["1000056844.jpg"]
        },
        {
            id: 3,
            title: "Echo Magazine",
            category: "Editorial",
            year: "2026",
            thumbnail: "1000056844.jpg",
            description: "Layout design and typography for a modern lifestyle magazine.",
            images: ["1000056844.jpg"]
        },
        {
            id: 4,
            title: "Aura Skincare",
            category: "Packaging",
            year: "2025",
            thumbnail: "1000056844.jpg",
            description: "Minimalist packaging design for a premium organic skincare line.",
            images: ["1000056844.jpg"]
        }
    ],

    // Filter categories generated based on the projects above + "All"
    projectCategories: ["ALL", "BRANDING", "SOCIAL MEDIA", "EDITORIAL", "PACKAGING"]
};

// ==========================================================================
// CORE FUNCTIONALITY (Do not edit below unless changing functionality)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. Populate Content from Data Object
    populateData();

    // 2. Loading Screen Logic
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 800);
    }, 1500);

    // 3. Custom Cursor Logic (Desktop only)
    if (window.innerWidth > 768) {
        initCustomCursor();
    }

    // 4. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 5. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.remove('active'));
    });

    // 6. Project Filtering & Modal Logic
    initProjects();

    // 7. Magnetic Button Effect
    initMagneticButtons();
});

function populateData() {
    const p = portfolioData.personal;

    // Header / General Data
    document.title = `${p.name} | ${p.title}`;
    document.getElementById('nav-logo-img').src = p.logoImage;
    document.getElementById('footer-logo-img').src = p.logoImage;
    
    document.getElementById('hero-label').innerText = p.label;
    document.getElementById('hero-name').innerHTML = p.name.replace(' ', '<br>');
    document.getElementById('hero-title').innerHTML = p.subtitle;
    document.getElementById('hero-desc').innerText = p.heroDescription;
    document.getElementById('hero-image').src = p.profileImage;
    document.getElementById('about-image').src = p.profileImage;
    
    // About Text
    const aboutContainer = document.getElementById('about-text-container');
    p.aboutText.forEach(text => {
        const pt = document.createElement('p');
        pt.innerText = text;
        aboutContainer.appendChild(pt);
    });

    // Info Cards
    const infoContainer = document.getElementById('info-cards-container');
    const infos = [
        { val: p.experience, label: "Experience" },
        { val: p.title.split(' ')[0], label: p.title.split(' ')[1] },
        { val: p.location, label: "Based" }
    ];
    infos.forEach(info => {
        infoContainer.innerHTML += `
            <div class="info-card">
                <div class="info-val">${info.val}</div>
                <div class="info-label">${info.label}</div>
            </div>`;
    });

    // Marquee
    const marqueeContainer = document.getElementById('marquee-container');
    let marqueeHTML = '';
    // duplicate items to make continuous scroll
    for(let i = 0; i < 4; i++) {
        portfolioData.marqueeTags.forEach(tag => {
            marqueeHTML += `<span class="marquee-item">${tag} <span class="marquee-dot">•</span></span>`;
        });
    }
    marqueeContainer.innerHTML = marqueeHTML;

    // Services
    const servicesGrid = document.getElementById('services-grid');
    portfolioData.services.forEach(srv => {
        servicesGrid.innerHTML += `
            <div class="service-card">
                <div class="service-num">${srv.id}</div>
                <h3>${srv.title}</h3>
                <p>${srv.desc}</p>
            </div>`;
    });

    // Skills & Tools & Process
    const skillsChips = document.getElementById('skills-chips');
    portfolioData.skills.forEach(skill => {
        skillsChips.innerHTML += `<div class="skill-chip">${skill}</div>`;
    });

    const toolsGrid = document.getElementById('tools-grid');
    portfolioData.tools.forEach(tool => {
        toolsGrid.innerHTML += `<div class="tool-item">${tool}</div>`;
    });

    const processTimeline = document.getElementById('process-timeline');
    portfolioData.process.forEach(step => {
        processTimeline.innerHTML += `
            <div class="process-step">
                <div class="step-num">${step.id}</div>
                <h3 class="step-title">${step.title}</h3>
                <p class="step-desc">${step.desc}</p>
            </div>`;
    });

    // Profile Details
    document.getElementById('contact-profile-img').src = p.profileImage;
    document.getElementById('contact-name').innerText = p.name;
    document.getElementById('contact-role').innerText = p.title;

    const detailList = document.getElementById('profile-details-list');
    const detailsData = [
        { l: "Experience", v: p.experience },
        { l: "Specialized In", v: "Branding, Print, Social" },
        { l: "Location", v: p.location },
        { l: "Available For", v: "Freelance Projects" }
    ];
    detailsData.forEach(d => {
        detailList.innerHTML += `
            <div class="profile-detail-item">
                <span class="detail-label">${d.l}</span>
                <span class="detail-value">${d.v}</span>
            </div>`;
    });

    const socialsContainer = document.getElementById('social-links-container');
    portfolioData.socials.forEach(s => {
        socialsContainer.innerHTML += `<a href="${s.url}" class="social-link">${s.icon}</a>`;
    });

    // Footer
    document.getElementById('footer-name').innerText = p.name;
    document.getElementById('footer-role').innerText = p.title;
    document.getElementById('footer-copy-name').innerText = p.name;
    document.getElementById('current-year').innerText = new Date().getFullYear();
}

function initProjects() {
    const filterContainer = document.getElementById('project-filters');
    const gridContainer = document.getElementById('projects-grid');
    
    // Create Filters
    portfolioData.projectCategories.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${index === 0 ? 'active' : ''}`;
        btn.innerText = cat;
        btn.dataset.filter = cat.toUpperCase();
        filterContainer.appendChild(btn);
        
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderProjects(e.target.dataset.filter);
        });
    });

    function renderProjects(filter = 'ALL') {
        gridContainer.innerHTML = '';
        const filtered = filter === 'ALL' 
            ? portfolioData.projects 
            : portfolioData.projects.filter(p => p.category.toUpperCase() === filter);

        filtered.forEach(proj => {
            const el = document.createElement('a');
            el.href = "#";
            el.className = "project-card";
            el.innerHTML = `
                <img src="${proj.thumbnail}" alt="${proj.title}" class="project-img">
                <div class="project-overlay">
                    <div class="project-info">
                        <div class="project-category">${proj.category}</div>
                        <h3 class="project-title">${proj.title}</h3>
                        <div class="project-year">${proj.year}</div>
                        <div class="project-view">VIEW PROJECT &rarr;</div>
                    </div>
                </div>
            `;
            el.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(proj.id);
            });
            gridContainer.appendChild(el);
        });
    }

    renderProjects(); // Initial load

    // Modal Logic
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-modal');
    let currentProjectId = null;

    function openModal(id) {
        currentProjectId = id;
        const proj = portfolioData.projects.find(p => p.id === id);
        if(!proj) return;

        document.getElementById('modal-category').innerText = proj.category;
        document.getElementById('modal-title').innerText = proj.title;
        document.getElementById('modal-year').innerText = proj.year;
        document.getElementById('modal-desc').innerText = proj.description;
        
        const imgContainer = document.getElementById('modal-images');
        imgContainer.innerHTML = '';
        proj.images.forEach(imgSrc => {
            imgContainer.innerHTML += `<img src="${imgSrc}" class="modal-image" alt="Project Image">`;
        });

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop background scroll
    }

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    document.getElementById('prev-project').addEventListener('click', () => {
        const index = portfolioData.projects.findIndex(p => p.id === currentProjectId);
        const prevIndex = index > 0 ? index - 1 : portfolioData.projects.length - 1;
        openModal(portfolioData.projects[prevIndex].id);
    });

    document.getElementById('next-project').addEventListener('click', () => {
        const index = portfolioData.projects.findIndex(p => p.id === currentProjectId);
        const nextIndex = index < portfolioData.projects.length - 1 ? index + 1 : 0;
        openModal(portfolioData.projects[nextIndex].id);
    });
}

function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const cursorGlow = document.querySelector('.cursor-glow');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Slight delay on outline and glow
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 100, fill: "forwards" });

        cursorGlow.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });

        // Subtle parallax for hero image
        const heroImg = document.querySelector('.parallax-img');
        if (heroImg) {
            const x = (window.innerWidth / 2 - posX) / 50;
            const y = (window.innerHeight / 2 - posY) / 50;
            heroImg.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    // Hover effects on clickable elements
    document.querySelectorAll('a, button, .project-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(0, 217, 232, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });
}

function initMagneticButtons() {
    const magnetics = document.querySelectorAll('.magnetic');
    
    magnetics.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
            
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        btn.addEventListener('mouseleave', function() {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
}