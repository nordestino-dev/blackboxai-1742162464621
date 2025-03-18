// Translations object
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
const translations = {
    en: {
        home: "Home",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
        welcome: "Transforming Ideas Into Digital Reality",
        partner: "We craft exceptional digital experiences through innovative web development and full-stack solutions.",
        startProject: "Start Your Project",
        webDev: "Web Development",
        webDevDesc: "Custom websites and web applications",
        responsiveDesign: "Responsive Design",
        responsiveDesc: "Mobile-first approach",
        backendSolutions: "Backend Solutions",
        backendDesc: "Robust server-side development",
        performance: "Performance",
        performanceDesc: "Speed and optimization",
        copyright: "© 2023 Nexus Digital_. All rights reserved.",
        portfolioTitle: "Our Portfolio",
        portfolioDesc: "Explore our latest projects showcasing our expertise in web development and digital solutions.",
        ecommerce: "E-commerce Platform",
        ecommerceDesc: "A full-featured online store with payment integration and inventory management.",
        photoPortfolio: "Portfolio Website",
        photoPortfolioDesc: "A responsive portfolio website for a professional photographer.",
        taskManager: "Task Management App",
        taskManagerDesc: "A collaborative task management application with real-time updates.",
        repository: "Repository",
        liveDemo: "Live Demo",
        contactTitle: "Get in Touch",
        contactDesc: "Ready to start your project? We'd love to hear from you!",
        name: "Name",
        email: "Email",
        subject: "Subject",
        selectSubject: "Select a subject",
        newProject: "New Project",
        requestQuote: "Request Quote",
        partnership: "Partnership",
        other: "Other",
        message: "Message",
        send: "Send Message",
        address: "123 Digital Street",
        city: "Tech Valley, CA 94043",
        phone: "+1 (555) 123-4567",
        emailAddress: "contact@nexusdigital.com",
        businessHours: "Business Hours",
        weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
        saturday: "Saturday: 10:00 AM - 4:00 PM",
        sunday: "Sunday: Closed",
        connectWithUs: "Connect With Us",
        aboutTitle: "About Us",
        aboutDesc: "At Nexus Digital_, we're passionate about creating exceptional digital experiences that drive business growth. With years of experience in web development and digital solutions, we've helped numerous businesses establish their online presence and achieve their digital goals.",
        teamDesc: "Our team combines creativity with technical expertise to deliver solutions that not only look great but also perform exceptionally well.",
        techStack: "Our Tech Stack",
        htmlDesc: "Modern semantic markup",
        cssDesc: "Advanced styling",
        jsDesc: "Dynamic functionality",
        pythonDesc: "Backend development",
        sqlDesc: "Database management",
        phpDesc: "Server-side scripting",
        nodeDesc: "Runtime environment",
        cDesc: "System Programming",
        djangoDesc: "Web Framework",
        gitDesc: "Version control",
        privacyTitle: "Privacy Policy & Cookie Usage",
        cookiePolicy: "Cookie Policy",
        cookieUsage: "Our website uses cookies to enhance your browsing experience and provide personalized services. This policy explains how we use cookies and similar technologies on our website.",
        whatAreCookies: "What are Cookies?",
        cookiesDefinition: "Cookies are small text files that are placed on your device when you visit our website. They help us recognize your device and remember certain information about your preferences or actions.",
        typesOfCookies: "Types of Cookies We Use",
        essentialCookies: "Essential Cookies: Required for the website to function properly. These cannot be disabled.",
        preferenceCookies: "Preference Cookies: Remember your settings and preferences (e.g., language, theme).",
        analyticsCookies: "Analytics Cookies: Help us understand how visitors interact with our website.",
        managingCookies: "Managing Cookies",
        managingCookiesDescription: "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our website.",
        yourChoices: "Your Choices",
        cookieConsent: "When you first visit our website, you'll be presented with a cookie consent banner. You can choose to:",
        acceptAllCookies: "Accept All Cookies: Allow all types of cookies.",
        declineCookies: "Decline: Only use essential cookies required for the website to function.",
        updatesToPolicy: "Updates to This Policy",
        updatesDescription: "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date."
    },
    pt: {
        home: "Início",
        portfolio: "Portfólio",
        about: "Sobre",
        contact: "Contato",
        welcome: "Transformando Ideias em Realidade Digital",
        partner: "Criamos experiências digitais excepcionais por meio de desenvolvimento web inovador e soluções de pilha completa.",
        startProject: "Inicie Seu Projeto",
        webDev: "Desenvolvimento Web",
        webDevDesc: "Sites e aplicativos web personalizados",
        responsiveDesign: "Design Responsivo",
        responsiveDesc: "Abordagem mobile-first",
        backendSolutions: "Soluções de Backend",
        backendDesc: "Desenvolvimento robusto do lado do servidor",
        performance: "Desempenho",
        performanceDesc: "Velocidade e otimização",
        copyright: "© 2023 Nexus Digital_. Todos os direitos reservados.",
        portfolioTitle: "Nosso Portfólio",
        portfolioDesc: "Explore nossos últimos projetos que mostram nossa experiência em desenvolvimento web e soluções digitais.",
        ecommerce: "Plataforma de E-commerce",
        ecommerceDesc: "Uma loja online completa com integração de pagamento e gerenciamento de inventário.",
        photoPortfolio: "Site de Portfólio",
        photoPortfolioDesc: "Um site de portfólio responsivo para um fotógrafo profissional.",
        taskManager: "Aplicativo de Gerenciamento de Tarefas",
        taskManagerDesc: "Um aplicativo de gerenciamento de tarefas colaborativo com atualizações em tempo real.",
        repository: "Repositório",
        liveDemo: "Demonstração ao Vivo",
        contactTitle: "Entre em Contato",
        contactDesc: "Pronto para iniciar seu projeto? Adoraríamos ouvir de você!",
        name: "Nome",
        email: "Email",
        subject: "Assunto",
        selectSubject: "Selecione um assunto",
        newProject: "Novo Projeto",
        requestQuote: "Solicitar Orçamento",
        partnership: "Parceria",
        other: "Outro",
        message: "Mensagem",
        send: "Enviar Mensagem",
        address: "123 Rua Digital",
        city: "Tech Valley, CA 94043",
        phone: "+1 (555) 123-4567",
        emailAddress: "contato@nexusdigital.com",
        businessHours: "Horário de Funcionamento",
        weekdays: "Segunda - Sexta: 9:00 AM - 6:00 PM",
        saturday: "Sábado: 10:00 AM - 4:00 PM",
        sunday: "Domingo: Fechado",
        connectWithUs: "Conecte-se Conosco",
        aboutTitle: "Sobre Nós",
        aboutDesc: "Na Nexus Digital_, somos apaixonados por criar experiências digitais excepcionais que impulsionam o crescimento dos negócios. Com anos de experiência em desenvolvimento web e soluções digitais, ajudamos inúmeras empresas a estabelecer sua presença online e alcançar seus objetivos digitais.",
        teamDesc: "Nossa equipe combina criatividade com expertise técnica para oferecer soluções que não apenas têm uma ótima aparência, mas também funcionam excepcionalmente bem.",
        techStack: "Nossa Pilha de Tecnologias",
        htmlDesc: "Marcação semântica moderna",
        cssDesc: "Estilização avançada",
        jsDesc: "Funcionalidade dinâmica",
        pythonDesc: "Desenvolvimento de backend",
        sqlDesc: "Gerenciamento de banco de dados",
        phpDesc: "Scripting do lado do servidor",
        nodeDesc: "Ambiente de execução",
        cDesc: "Programação de Sistemas",
        djangoDesc: "Framework Web",
        gitDesc: "Controle de versão",
        privacyTitle: "Política de Privacidade e Uso de Cookies",
        cookiePolicy: "Política de Cookies",
        cookieUsage: "Nosso site usa cookies para melhorar sua experiência de navegação e fornecer serviços personalizados. Esta política explica como usamos cookies e tecnologias semelhantes em nosso site.",
        whatAreCookies: "O que são Cookies?",
        cookiesDefinition: "Cookies são pequenos arquivos de texto que são colocados em seu dispositivo quando você visita nosso site. Eles nos ajudam a reconhecer seu dispositivo e lembrar certas informações sobre suas preferências ou ações.",
        typesOfCookies: "Tipos de Cookies que Usamos",
        essentialCookies: "Cookies Essenciais: Necessários para o funcionamento adequado do site. Estes não podem ser desativados.",
        preferenceCookies: "Cookies de Preferência: Lembram suas configurações e preferências (por exemplo, idioma, tema).",
        analyticsCookies: "Cookies de Análise: Ajudam-nos a entender como os visitantes interagem com nosso site.",
        managingCookies: "Gerenciando Cookies",
        managingCookiesDescription: "Você pode controlar e/ou excluir cookies como desejar. Você pode excluir todos os cookies que já estão em seu dispositivo e pode configurar a maioria dos navegadores para impedir que sejam colocados. No entanto, se você fizer isso, pode ter que ajustar manualmente algumas preferências toda vez que visitar nosso site.",
        yourChoices: "Suas Escolhas",
        cookieConsent: "Quando você visita nosso site pela primeira vez, você verá um banner de consentimento de cookies. Você pode escolher:",
        acceptAllCookies: "Aceitar Todos os Cookies: Permitir todos os tipos de cookies.",
        declineCookies: "Recusar: Usar apenas cookies essenciais necessários para o funcionamento do site.",
        updatesToPolicy: "Atualizações a Esta Política",
        updatesDescription: "Podemos atualizar esta Política de Cookies de tempos em tempos. Quaisquer alterações serão publicadas nesta página com uma data de revisão atualizada."
    }
};

// Function to switch languages
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });
}

// Function to toggle theme
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Event listener for the language toggle button
document.getElementById('language-toggle').addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'pt' : 'en';
    document.documentElement.lang = newLang;
    switchLanguage(newLang);
    
    // Update button text
    document.getElementById('language-toggle').textContent = newLang === 'en' ? 'PT' : 'EN';
});

// Event listener for the theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Set initial language and theme
document.documentElement.lang = localStorage.getItem('lang') || 'en';
switchLanguage(document.documentElement.lang);
toggleTheme();
