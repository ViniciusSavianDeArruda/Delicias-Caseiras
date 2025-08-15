// Sistema básico de animações
export function initializeAnimations() {
    // Apenas efeitos hover básicos nos cards
    const cards = document.querySelectorAll('.hover\\:shadow-xl');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}