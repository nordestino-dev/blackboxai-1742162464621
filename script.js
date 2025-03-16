// Theme Toggle Functionality
const themeToggleButton = document.getElementById('theme-toggle');
const mobileThemeToggleButton = document.getElementById('mobile-theme-toggle');
const languageToggleButton = document.getElementById('language-toggle');
const mobileLanguageToggleButton = document.getElementById('mobile-language-toggle');
const hamburgerButton = document.getElementById('hamburger');
const closeMenuButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('nav-menu');

// Theme toggle function
function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

// Language toggle function
function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang === 'en' ? 'pt' : 'en';
    localStorage.setItem('language', newLang);
    updateLanguage(newLang);
}

// Add event listeners for theme toggle
themeToggleButton?.addEventListener('click', toggleTheme);
mobileThemeToggleButton?.addEventListener('click', toggleTheme);

// Add event listeners for language toggle
languageToggleButton?.addEventListener('click', toggleLanguage);
mobileLanguageToggleButton?.addEventListener('click', toggleLanguage);

// Mobile menu functionality
hamburgerButton?.addEventListener('click', () => {
    mobileMenu?.classList.remove('hidden');
});

closeMenuButton?.addEventListener('click', () => {
    mobileMenu?.classList.add('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && !hamburgerButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Language translations
const translations = {
    en: {
        home: 'Home',
        portfolio: 'Portfolio',
        about: 'About',
        contact: 'Contact',
        aboutTitle: 'About Us',
        aboutDesc: 'At Nexus Digital_, we\'re passionate about creating exceptional digital experiences that drive business growth. With years of experience in web development and digital solutions, we\'ve helped numerous businesses establish their online presence and achieve their digital goals.',
        teamDesc: 'Our team combines creativity with technical expertise to deliver solutions that not only look great but also perform exceptionally well.',
        techStack: 'Our Tech Stack',
        htmlDesc: 'Modern semantic markup',
        cssDesc: 'Advanced styling',
        jsDesc: 'Dynamic functionality',
        pythonDesc: 'Backend development',
        sqlDesc: 'Database management',
        phpDesc: 'Server-side scripting',
        nodeDesc: 'Runtime environment',
        cDesc: 'System Programming',
        djangoDesc: 'Web Framework',
        gitDesc: 'Version control',
        copyright: '© 2023 Nexus Digital_. All rights reserved.'
    },
    pt: {
        home: 'Início',
        portfolio: 'Portfólio',
        about: 'Sobre',
        contact: 'Contato',
        aboutTitle: 'Sobre Nós',
        aboutDesc: 'Na Nexus Digital_, somos apaixonados por criar experiências digitais excepcionais que impulsionam o crescimento dos negócios. Com anos de experiência em desenvolvimento web e soluções digitais, ajudamos inúmeras empresas a estabelecer sua presença online e alcançar seus objetivos digitais.',
        teamDesc: 'Nossa equipe combina criatividade com expertise técnica para entregar soluções que não apenas parecem ótimas, mas também funcionam excepcionalmente bem.',
        techStack: 'Nossa Stack Tecnológica',
        htmlDesc: 'Marcação semântica moderna',
        cssDesc: 'Estilização avançada',
        jsDesc: 'Funcionalidade dinâmica',
        pythonDesc: 'Desenvolvimento backend',
        sqlDesc: 'Gerenciamento de banco de dados',
        phpDesc: 'Programação server-side',
        nodeDesc: 'Ambiente de execução',
        cDesc: 'Programação de Sistema',
        djangoDesc: 'Framework Web',
        gitDesc: 'Controle de versão',
        copyright: '© 2023 Nexus Digital_. Todos os direitos reservados.'
    }
};

// Function to update text content based on selected language
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('language') || 'en';
    updateLanguage(currentLang);
});
