document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#dark-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // 1. Fungsi Ganti Tema
    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        
        // Ganti Ikon & Simpan Status
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    };

    // 2. Load Tema Tersimpan
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    // 3. Event Listener Klik
    themeToggle.addEventListener('click', toggleTheme);

    // 4. Scroll Progress Bar
    window.addEventListener('scroll', () => {
        const winScroll = window.scrollY;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.querySelector(".scroll-line").style.width = scrolled + "%";
        
        // Show/Hide Scroll Top Button
        const scrollBtn = document.querySelector("#scrollTopBtn");
        if(scrollBtn) {
            scrollBtn.style.display = winScroll > 300 ? "flex" : "none";
        }
    });
});