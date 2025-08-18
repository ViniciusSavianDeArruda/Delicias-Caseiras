// Sistema de animações
function initializeAnimations() {
    console.log('Inicializando animações...');
    
    // Animações de hover para cards
    const cards = document.querySelectorAll('.card, .product-card, .feature-card');
    
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Animação de scroll suave já está implementada no CSS
    // Adiciona classe para elementos que entram na viewport (opcional)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa elementos que devem ter animação de entrada
    const animatedElements = document.querySelectorAll('.feature-card, .product-card');
    animatedElements.forEach(function(el) {
        // Define estado inicial
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(el);
    });
    
    console.log('Animações inicializadas com sucesso!');
}