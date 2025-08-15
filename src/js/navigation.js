// Funcionalidades de navegação
export function initializeNavigation() {
    // Toggle do menu mobile (usa classe .open para controle via CSS)
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            const opened = mobileMenu.classList.toggle('open');
            // Atualiza atributos ARIA para acessibilidade
            mobileMenu.setAttribute('aria-hidden', (!opened).toString());
            mobileMenuBtn.setAttribute('aria-expanded', opened.toString());
        });
    }

    // Smooth scrolling para links de navegação e botões
    document.querySelectorAll('a[href^="#"], button[onclick^="scrollToSection"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (anchor.tagName === "A") e.preventDefault();
            const targetId = anchor.getAttribute("href") ? anchor.getAttribute("href").replace("#", "") : anchor.getAttribute("onclick")?.match(/'([^']+)'/)?.[1];
            if (targetId) {
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
            // Fecha o menu mobile se estiver aberto
            if (mobileMenu && mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                mobileMenu.setAttribute('aria-hidden', 'true');
                mobileMenuBtn && mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Expõe função global para botões inline
    window.scrollToSection = function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        // Fecha menu mobile se estiver aberto
        if (mobileMenu && mobileMenu.classList && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            mobileMenu.setAttribute('aria-hidden', 'true');
            mobileMenuBtn && mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    };
}