// Arquivo principal de inicialização
(function() {
    'use strict';
    
    console.log('🚀 Inicializando aplicação Delícias da Maria...');
    
    // Função principal de inicialização
    function initializeApp() {
        try {
            // Inicializa todos os módulos
            initializeNavigation();
            initializeProducts();
            initializeContact();
            initializeAnimations();
            
            console.log('✅ Aplicação totalmente inicializada!');
        } catch (error) {
            console.error('❌ Erro na inicialização:', error);
        }
    }
    
    // Inicialização quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        // DOM já carregado
        initializeApp();
    }
    
    // Adiciona listener para redimensionamento da janela
    window.addEventListener('resize', function() {
        // Fecha menu mobile se a tela ficar grande
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        
        if (window.innerWidth >= 768 && mobileMenu && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            mobileMenu.setAttribute('aria-hidden', 'true');
            if (mobileMenuBtn) {
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });
    
    // Adiciona listener para scroll (opcional - para efeitos futuros)
    let ticking = false;
    
    function updateOnScroll() {
        // Aqui podem ser adicionados efeitos de scroll no futuro
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
    
})();