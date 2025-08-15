// Sistema avançado de animações e efeitos UX/UI
export function initializeAnimations() {
    // 1. Efeitos hover aprimorados nos cards de produtos
    const cards = document.querySelectorAll('.hover\\:shadow-xl, .product-card');
    cards.forEach(card => {
        // Adiciona classe para efeitos CSS
        card.classList.add('product-card');
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });

    // 2. Indicador de progresso de scroll
    createScrollIndicator();

    // 3. Animações de entrada ao fazer scroll
    initializeScrollAnimations();

    // 4. Efeito parallax suave
    initializeParallaxEffect();

    // 5. Loading states para melhor UX
    initializeLoadingStates();
}

// Indicador de progresso de scroll
function createScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.body.appendChild(indicator);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        indicator.style.width = scrollPercent + '%';
    });
}

// Animações de entrada baseadas no scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Aplica animação baseada na posição do elemento
                if (element.classList.contains('animate-on-scroll')) {
                    element.classList.add('animate-fade-in-up');
                }
                
                // Remove o observer após a animação
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Adiciona elementos para observação
    const elementsToAnimate = document.querySelectorAll('h2, .bg-white, .gradient-button');
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        // Delay escalonado para efeito cascata
        setTimeout(() => {
            observer.observe(el);
        }, index * 100);
    });
}

// Efeito parallax suave
function initializeParallaxEffect() {
    const parallaxElements = document.querySelectorAll('img, .gradient-bg');
    
    parallaxElements.forEach(element => {
        element.classList.add('parallax-element');
    });

    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((element, index) => {
            const rate = scrolled * -0.5 * (index + 1) * 0.1;
            element.style.transform = `translateY(${rate}px)`;
        });
        
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// Estados de loading para melhor UX
function initializeLoadingStates() {
    // Simula loading de imagens
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Adiciona skeleton loader
        img.style.backgroundColor = '#f0f0f0';
        img.classList.add('loading-skeleton');
        
        img.addEventListener('load', function() {
            this.classList.remove('loading-skeleton');
            this.style.backgroundColor = '';
            
            // Animação de fade in
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                this.style.opacity = '1';
            }, 50);
        });
    });

    // Loading state para formulário
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
                
                // Restaura após 2 segundos (tempo para abrir WhatsApp)
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    });
}