// Funcionalidades de navegação
function initializeNavigation() {
    console.log('Inicializando navegação...');
    
    // Toggle do menu mobile
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", function() {
            const isOpen = mobileMenu.classList.toggle('open');
            // Atualiza atributos ARIA para acessibilidade
            mobileMenu.setAttribute('aria-hidden', (!isOpen).toString());
            mobileMenuBtn.setAttribute('aria-expanded', isOpen.toString());
            console.log('Menu mobile toggled:', isOpen);
        });
    }

    // Smooth scrolling para links de navegação
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(function(anchor) {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").replace("#", "");
            const target = document.getElementById(targetId);
            
            if (target) {
                target.scrollIntoView({ 
                    behavior: "smooth",
                    block: "start"
                });
                console.log('Navegando para:', targetId);
            }
            
            // Fecha o menu mobile se estiver aberto
            if (mobileMenu && mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                mobileMenu.setAttribute('aria-hidden', 'true');
                if (mobileMenuBtn) {
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // Expõe função global para botões inline
    window.scrollToSection = function(sectionId) {
        console.log('ScrollToSection chamado para:', sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: "smooth",
                block: "start"
            });
            
            // Fecha menu mobile se estiver aberto
            if (mobileMenu && mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                mobileMenu.setAttribute('aria-hidden', 'true');
                if (mobileMenuBtn) {
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                }
            }
        }
    };

    console.log('Navegação inicializada com sucesso!');
}