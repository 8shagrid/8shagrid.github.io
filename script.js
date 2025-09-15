document.addEventListener('DOMContentLoaded', () => {

    // === 1. LOGIKA TAHUN OTOMATIS UNTUK FOOTER ===
    // (Kita hapus blok 'lucide' dan 'try-catch', langsung ke logika tahun)
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }


    // === 2. LOGIKA TOGGLE MODE GELAP (DARK MODE) ===
    const themeToggleBtns = [
        document.getElementById('theme-toggle'), 
        document.getElementById('theme-toggle-mobile')
    ];
    const themeIconsLight = [
        document.getElementById('theme-icon-light'), 
        document.getElementById('theme-icon-light-mobile')
    ];
    const themeIconsDark = [
        document.getElementById('theme-icon-dark'), 
        document.getElementById('theme-icon-dark-mobile')
    ];
    const htmlElement = document.documentElement; 

    function enableDarkMode() {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark'); 
        themeIconsLight.forEach(icon => icon && icon.classList.add('hidden'));
        themeIconsDark.forEach(icon => icon && icon.classList.remove('hidden'));
    }

    function disableDarkMode() {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeIconsLight.forEach(icon => icon && icon.classList.remove('hidden'));
        themeIconsDark.forEach(icon => icon && icon.classList.add('hidden'));
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode(); 
    }

    themeToggleBtns.forEach(btn => {
        if(btn) { 
            btn.addEventListener('click', () => { 
                if (htmlElement.classList.contains('dark')) {
                    disableDarkMode();
                } else {
                    enableDarkMode();
                }
            });
        }
    });


    // === 3. LOGIKA TOGGLE MENU MOBILE ===
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuPanel = document.getElementById('mobile-menu-panel');

    if (menuToggle && menuPanel) {
        menuToggle.addEventListener('click', () => {
            menuPanel.classList.toggle('hidden');
        });

        const mobileMenuLinks = menuPanel.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuPanel.classList.add('hidden'); 
            });
        });
    }


    // === 4. LOGIKA ANIMASI SCROLL (INTERSECTION OBSERVER) ===
    const sectionsToFade = document.querySelectorAll('.fade-in-section');
    const observerOptions = {
        root: null, 
        threshold: 0.1, 
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0');
                entry.target.classList.remove('translate-y-4');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sectionsToFade.forEach(section => {
        observer.observe(section);
    });

});