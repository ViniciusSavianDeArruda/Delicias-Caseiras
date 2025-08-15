// Funcionalidade de carregamento de componentes
export function loadComponents() {
    console.log('Iniciando carregamento de componentes...');
    
    const loadHeader = fetch('src/components/header.html')
        .then(response => {
            console.log('Header response status:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            console.log('Header HTML carregado com sucesso');
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = html;
                console.log('Header inserido no DOM');
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
            console.log('Usando fallback para header');
            // Fallback: cria header básico
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = `
                    <header class="bg-white shadow-sm fixed w-full top-0 z-50">
                        <div class="container mx-auto px-4">
                            <div class="flex justify-between items-center h-16">
                                <div class="flex items-center space-x-2">
                                    <span class="text-xl font-bold gradient-text">Delícias da Maria</span>
                                </div>
                                <button onclick="openWhatsApp()" class="gradient-button text-white px-4 py-2 rounded-lg">
                                    WhatsApp
                                </button>
                            </div>
                        </div>
                    </header>
                `;
            }
        });

    const loadHero = fetch('src/components/hero.html')
        .then(response => {
            console.log('Hero response status:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            console.log('Hero HTML carregado com sucesso');
            const heroContainer = document.getElementById('hero-container');
            if (heroContainer) {
                heroContainer.innerHTML = html;
                console.log('Hero inserido no DOM');
            }
        })
        .catch(error => {
            console.error('Error loading hero:', error);
            console.log('Usando fallback para hero');
            // Fallback: cria hero básico
            const heroContainer = document.getElementById('hero-container');
            if (heroContainer) {
                heroContainer.innerHTML = `
                    <section id="hero" class="pt-16 pb-20 gradient-bg min-h-screen flex items-center">
                        <div class="container mx-auto px-4 text-center">
                            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Delícias <span class="gradient-text">Caseiras</span> Feitas com Amor
                            </h1>
                            <p class="text-lg text-gray-600 mb-8">
                                Bolos artesanais, doces irresistíveis e salgados saborosos.
                            </p>
                            <button onclick="scrollToSection('products')" class="gradient-button text-white px-8 py-4 rounded-lg">
                                Ver Produtos
                            </button>
                        </div>
                    </section>
                `;
            }
        });

    const loadFooter = fetch('src/components/footer.html')
        .then(response => {
            console.log('Footer response status:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            console.log('Footer HTML carregado com sucesso');
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) {
                footerContainer.innerHTML = html;
                console.log('Footer inserido no DOM');
            }
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            console.log('Usando fallback para footer');
            // Fallback: cria footer básico
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) {
                footerContainer.innerHTML = `
                    <footer class="bg-gray-900 text-white py-12">
                        <div class="container mx-auto px-4 text-center">
                            <p>© 2024 Delícias da Maria. Todos os direitos reservados.</p>
                        </div>
                    </footer>
                `;
            }
        });

    // Retorna uma Promise que resolve quando todos os componentes são carregados
    return Promise.all([loadHeader, loadHero, loadFooter]);
}