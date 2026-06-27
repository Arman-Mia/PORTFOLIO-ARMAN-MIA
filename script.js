/* ===========================
   Arman Mia Portfolio - JS
   =========================== */

// -------- Data --------
const techStack = [
  { name: 'React.js', icon: 'atom', color: 'text-cyan-400' },
  { name: 'JavaScript', icon: 'file-code-2', color: 'text-yellow-400' },
  { name: 'Tailwind CSS', icon: 'palette', color: 'text-sky-400' },
  { name: 'HTML5/CSS3', icon: 'code-2', color: 'text-orange-400' },
  { name: 'MySQL', icon: 'database', color: 'text-blue-400' },
  { name: 'Git & GitHub', icon: 'git-branch', color: 'text-red-400' },
  { name: 'Python', icon: 'code-2', color: 'text-blue-300' },
  { name: 'REST APIs', icon: 'network', color: 'text-green-400' },
  { name: 'Firebase', icon: 'flame', color: 'text-amber-400' },
  { name: 'Bootstrap', icon: 'cloud', color: 'text-violet-400' }
];

const projects = [
  {
    title: 'Smart Waste Segregation',
    tag: 'AI + IoT',
    tagClass: 'from-emerald-500/30 to-teal-500/30 text-emerald-300 border-emerald-500/30',
    desc: 'AI-powered waste classification using TensorFlow, OpenCV, and Arduino integration for automated sorting.',
    meta: 'Final Year Project', year: '2025-26',
    icon: 'recycle', gradient: 'from-emerald-700 to-teal-900', link: '#'
  },
  {
    title: 'FinanceTrack Dashboard',
    tag: 'React Tool',
    tagClass: 'from-purple-500/30 to-fuchsia-500/30 text-purple-300 border-purple-500/30',
    desc: 'A sleek interactive dashboard to track expenses, investments, and SIP returns with an intuitive UI.',
    meta: 'Personal Finance', year: '2026',
    icon: 'bar-chart-3', gradient: 'from-purple-700 to-violet-900',
    link: 'https://arman-mia.github.io/FinTrack-Dashboard/'
  },
  {
    title: 'Green House Cafe',
    tag: 'Client Project',
    tagClass: 'from-orange-500/30 to-amber-500/30 text-orange-300 border-orange-500/30',
    desc: 'Complete responsive restaurant website featuring strong SEO, WhatsApp ordering integration, and modern aesthetics.',
    meta: 'Freelance', year: '2025',
    icon: 'coffee', gradient: 'from-orange-700 to-amber-900',
    link: 'https://greenhousecafe.in/'
  },
  {
    title: 'Make Dream Agency',
    tag: 'Portfolio UI',
    tagClass: 'from-rose-500/30 to-pink-500/30 text-rose-300 border-rose-500/30',
    desc: 'A modern, highly animated creative agency website showcasing services and portfolio projects.',
    meta: 'Agency Template', year: '2025',
    icon: 'sparkles', gradient: 'from-rose-700 to-pink-900',
    link: 'https://arman-mia.github.io/Make-Dream-Agency/'
  },
  {
    title: 'World Food Encyclopedia',
    tag: 'Full-Stack Platform',
    tagClass: 'from-blue-500/30 to-indigo-500/30 text-blue-300 border-blue-500/30',
    desc: 'A comprehensive database application featuring 1000+ food items with detailed nutritional info and strong SEO implementation.',
    meta: 'Data Platform', year: '2025',
    icon: 'apple', gradient: 'from-blue-700 to-indigo-900',
    link: 'http://www.worldfoodencyclopedia.in/'
  }
];

const education = [
  {
    period: '2022 — 2026', score: 'CGPA: 6.9',
    title: 'B.Tech Computer Science & Eng.',
    institute: 'Cooch Behar Government Engineering College (MAKAUT)',
    desc: 'Focusing on full-stack web development, data structures, algorithm design, and modern software engineering practices.',
    icon: 'graduation-cap', color: 'from-cyan-500 to-blue-500'
  },
  {
    period: '2020 — 2022', score: '80%',
    title: 'Higher Secondary Education',
    institute: 'Barala Ram Das Sen High School (WBCHSE)',
    desc: 'Developed a strong analytical foundation in Mathematics, Physics, and foundational Computer Science concepts.',
    icon: 'school', color: 'from-purple-500 to-fuchsia-500'
  }
];

// -------- Render Tech Stack --------
function renderTechStack() {
  const wrap = document.getElementById('tech-stack');
  wrap.innerHTML = techStack.map(t => `
    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-200 text-sm hover:bg-white/[0.08] hover:border-white/20 transition-colors">
      <i data-lucide="${t.icon}" class="w-4 h-4 ${t.color}"></i> ${t.name}
    </div>
  `).join('');
}

// -------- Render Projects --------
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = projects.map(p => `
    <a href="${p.link}" target="${p.link !== '#' ? '_blank' : '_self'}" rel="noopener" class="project-card group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden block">
      <div class="relative h-40 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,_white_0%,_transparent_50%)]"></div>
        <i data-lucide="${p.icon}" class="w-14 h-14 text-white/90 relative z-10 drop-shadow-lg"></i>
      </div>
      <div class="p-5">
        <div class="flex items-start justify-between gap-3 mb-3">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium border bg-gradient-to-r ${p.tagClass}">${p.tag}</span>
          <i data-lucide="external-link" class="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-colors"></i>
        </div>
        <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">${p.title}</h3>
        <p class="text-slate-400 text-sm leading-relaxed line-clamp-3">${p.desc}</p>
        <div class="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-500 font-mono">
          <span>${p.meta}</span><span class="text-slate-700">•</span><span>${p.year}</span>
        </div>
      </div>
    </a>
  `).join('');
}

// -------- Render Education --------
function renderEducation() {
  const list = document.getElementById('education-list');
  list.innerHTML = education.map((e, i) => {
    const leftSide = i % 2 === 0;
    return `
      <div class="relative">
        <div class="absolute left-5 md:left-1/2 top-4 md:top-6 md:-translate-x-1/2 -translate-x-1/2 z-10">
          <div class="w-12 h-12 rounded-full bg-gradient-to-br ${e.color} flex items-center justify-center shadow-lg ring-4 ring-[#06060f]">
            <i data-lucide="${e.icon}" class="w-5 h-5 text-white"></i>
          </div>
        </div>
        <div class="pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
          <div class="${leftSide ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}">
            <div class="rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:border-cyan-500/30 transition-colors">
              <div class="flex items-center justify-between gap-3 mb-3 ${leftSide ? 'md:flex-row-reverse' : ''}">
                <span class="text-xs font-mono text-cyan-300 tracking-wide">${e.period}</span>
                <span class="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">${e.score}</span>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white">${e.title}</h3>
              <p class="text-slate-300 text-sm mt-1">${e.institute}</p>
              <p class="text-slate-400 text-sm mt-3 leading-relaxed">${e.desc}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// -------- Toast --------
let toastTimer;
function showToast(title, desc) {
  const t = document.getElementById('toast');
  document.getElementById('toast-title').textContent = title;
  document.getElementById('toast-desc').textContent = desc || '';
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// -------- CV Download --------
function downloadCV() {
  // Create an invisible link element to trigger the file download
  const link = document.createElement('a');
  link.href = 'ARMAN_MIA_NEW_RESUME (1).pdf'; // This path expects the PDF to be in the same folder
  link.download = 'ARMAN_MIA_NEW_RESUME (1).pdf';
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast('CV Download Started', 'Your download has begun. Thank you!');
}

// -------- Contact Form --------
async function submitForm(e) {
  e.preventDefault();
  
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg = document.getElementById('f-message').value.trim();
  
  // Basic front-end check
  if (!name || !email || !msg) {
    showToast('Missing fields', 'Please fill in all fields.');
    return;
  }

  try {
    // Show a quick status message while sending
    showToast('Sending...', 'Sending your message to Arman...');

    // Sending the form data to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: "d192a6a1-b69e-43bf-9de2-e6073e1e504d", // Your exact key from the screenshot
        name: name,
        email: email,
        message: msg
      })
    });

    const result = await response.json();

    if (response.status === 200) {
      // Nice animated toast response
      showToast('Message sent!', 'Thanks for reaching out. I will get back to you shortly.');
      e.target.reset(); // Clears the form fields automatically
    } else {
      showToast('Error', result.message || 'Something went wrong.');
    }
  } catch (error) {
    showToast('Error', 'Failed to send message. Please check your connection.');
  }
}

// -------- Navbar scroll + active section --------
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('[data-section]');
  const sections = ['about','skills','projects','education','contact'];

  const onScroll = () => {
    if (window.scrollY > 24) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    let active = '';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) { active = id; break; }
      }
    }
    links.forEach(l => {
      if (l.dataset.section === active) l.classList.add('active');
      else l.classList.remove('active');
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// -------- Mobile menu --------
function setupMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const icon = document.getElementById('menu-icon');
  toggle.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    icon.setAttribute('data-lucide', open ? 'x' : 'menu');
    lucide.createIcons();
  });
  document.querySelectorAll('.mobile-link').forEach(a => {
    a.addEventListener('click', () => {
      drawer.classList.remove('open');
      icon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });
}

// -------- Init --------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  renderTechStack();
  renderProjects();
  renderEducation();
  setupNavbar();
  setupMobileMenu();
  lucide.createIcons();
});