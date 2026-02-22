// IntersectionObserver for fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Simple language toggle
const translations = {
  en: {
    pageTitle: 'Stefan Barth | Software Developer',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    heroTagline: 'Professional Software Developer\nBuilding scalable software & mobile apps',
    descParlito: 'Vocabulary trainer based on the most used words in English.',
    descLefty: 'Expense tracker to keep an eye on your monthly budget.',
    expYears: '20+ years professional experience',
  storeBadge: 'App Store',
    footer: '© 2026 Stefan Barth, M.Sc. — Software Developer'
    ,expAndroid: 'Native mobile development',
    expIOS: 'Swift & iOS ecosystem',
    expFlutter: 'Cross-platform apps'
  },
  de: {
    pageTitle: 'Stefan Barth | Softwareentwickler',
    experience: 'Erfahrung',
    projects: 'Projekte',
    contact: 'Kontakt',
    heroTagline: 'Professioneller Softwareentwickler\nSkalierbare Software & mobile Apps entwickeln',
    descParlito: 'Vokabeltrainer basierend auf den meistgenutzten Wörtern im Englischen.',
    descLefty: 'Ausgaben-Tracker, um dein Monatsbudget im Blick zu behalten.',
    expYears: '20+ Jahre Berufserfahrung',
  storeBadge: 'App Store',
    footer: '© 2026 Stefan Barth, M.Sc. — Softwareentwickler',
    expAndroid: 'Native Mobile-Entwicklung',
    expIOS: 'Swift & iOS-Ökosystem',
    expFlutter: 'Plattformübergreifende Apps'
  }
};

function setLanguage(lang) {
  const t = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  const hero = document.getElementById('hero-tagline');
  if (hero) hero.innerHTML = t.heroTagline.replace(/\\n/g, '<br />');

  const pPar = document.querySelector('[data-i18n-desc-parlito]');
  if (pPar) pPar.textContent = t.descParlito;

  const pLeft = document.querySelector('[data-i18n-desc-lefty]');
  if (pLeft) pLeft.textContent = t.descLefty;

  // toggle active class on buttons
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('lang-' + lang);
  if (btn) btn.classList.add('active');
}

// Attach handlers
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-de').addEventListener('click', () => setLanguage('de'));

// set initial language
setLanguage('en');
