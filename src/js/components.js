// Funcionalidade de carregamento de componentes
export function loadComponents() {
    console.log('Iniciando carregamento de componentes...');
    
    // Detecta se está rodando localmente (protocolo file:// ou localhost)
    const isLocal = window.location.protocol === 'file:' || 
                   window.location.hostname === 'localhost' || 
                   window.location.hostname === '127.0.0.1';
    
    if (isLocal) {
        console.log('Ambiente local detectado, usando fallbacks diretos...');
        // Em ambiente local, usa fallbacks diretos sem tentar fetch
        loadHeaderFallback();
        loadHeroFallback();
        loadFooterFallback();
        return Promise.resolve();
    }
    
    // Em ambiente de produção (Bolt), tenta carregar via fetch
    const loadHeader = fetch('./src/components/header.html')
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
            loadHeaderFallback();
        });

    const loadHero = fetch('./src/components/hero.html')
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
            loadHeroFallback();
        });

    const loadFooter = fetch('./src/components/footer.html')
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
            loadFooterFallback();
        });

    return Promise.all([loadHeader, loadHero, loadFooter]);
}

// Fallback functions para carregar componentes diretamente
function loadHeaderFallback() {
    console.log('Carregando header via fallback...');
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header class="bg-white shadow-sm fixed w-full top-0 z-50">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center h-16">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 gradient-button rounded-full flex items-center justify-center">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zM3 9a2 2 0 012-2h14a2 2 0 012 2v1H3V9z"/>
                                </svg>
                            </div>
                            <span class="text-xl font-bold gradient-text">Delícias da Maria</span>
                        </div>
                        <nav class="nav-desktop">
                            <a href="#hero" class="text-gray-700 hover:text-primary-600 transition-colors">Início</a>
                            <a href="#products" class="text-gray-700 hover:text-primary-600 transition-colors">Produtos</a>
                            <a href="#contact" class="text-gray-700 hover:text-primary-600 transition-colors">Contato</a>
                            <button onclick="openWhatsApp()" class="gradient-button text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                                WhatsApp
                            </button>
                        </nav>
                        <button id="mobile-menu-btn" class="mobile-menu-btn rounded-lg hover:bg-gray-100 transition-colors" aria-expanded="false" aria-controls="mobile-menu">
                            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                    <div id="mobile-menu" class="mobile-menu bg-white border border-gray-200" aria-hidden="true">
                        <a href="#hero">Início</a>
                        <a href="#products">Produtos</a>
                        <a href="#contact">Contato</a>
                        <button onclick="openWhatsApp()" class="gradient-button text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all w-full">
                            WhatsApp
                        </button>
                    </div>
                </div>
            </header>
        `;
    }
}

function loadHeroFallback() {
    console.log('Carregando hero via fallback...');
    const heroContainer = document.getElementById('hero-container');
    if (heroContainer) {
        heroContainer.innerHTML = `
            <section id="hero" class="pt-16 pb-20 gradient-bg min-h-screen flex items-center">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div class="text-center lg:text-left">
                            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Delícias <span class="gradient-text">Caseiras</span> Feitas com Amor
                            </h1>
                            <p class="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl">
                                Bolos artesanais, doces irresistíveis e salgados saborosos. Cada receita é preparada com ingredientes selecionados e muito carinho, trazendo o verdadeiro sabor caseiro para sua mesa.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button onclick="scrollToSection('products')" class="gradient-button text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1">
                                    Ver Produtos
                                </button>
                                <button onclick="openWhatsApp()" class="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all">
                                    Fazer Pedido
                                </button>
                            </div>
                        </div>
                        <div class="relative">
                            <div class="relative z-10">
                                <img src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Deliciosos bolos caseiros" class="rounded-2xl shadow-2xl w-full h-96 object-cover"/>
                            </div>
                            <div class="absolute -top-4 -right-4 w-72 h-72 bg-primary-100 rounded-full opacity-20 -z-10"></div>
                            <div class="absolute -bottom-4 -left-4 w-48 h-48 bg-pink-100 rounded-full opacity-30 -z-10"></div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        <div class="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <div class="w-12 h-12 gradient-button rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Feito com Amor</h3>
                            <p class="text-gray-600">Cada produto é preparado artesanalmente com ingredientes frescos e muito carinho.</p>
                        </div>
                        <div class="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <div class="w-12 h-12 gradient-button rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Sempre Fresquinho</h3>
                            <p class="text-gray-600">Produtos feitos sob encomenda para garantir máxima qualidade e frescor.</p>
                        </div>
                        <div class="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <div class="w-12 h-12 gradient-button rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Qualidade Garantida</h3>
                            <p class="text-gray-600">Ingredientes selecionados e receitas testadas para sua total satisfação.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

function loadFooterFallback() {
    console.log('Carregando footer via fallback...');
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="bg-gray-50 py-12 border-t border-gray-200">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div class="flex items-center space-x-3 mb-4">
                                <div class="w-8 h-8 gradient-button rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zM3 9a2 2 0 012-2h14a2 2 0 012 2v1H3V9z"/>
                                    </svg>
                                </div>
                                <span class="text-xl font-bold gradient-text">Delícias da Maria</span>
                            </div>
                            <p class="text-gray-600 mb-4">
                                Produtos caseiros feitos com amor e ingredientes selecionados.
                            </p>
                            <button onclick="openWhatsApp()" class="gradient-button text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                                WhatsApp
                            </button>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-4 text-gray-900">Links Rápidos</h4>
                            <ul class="space-y-2">
                                <li><a href="#hero" class="text-gray-600 hover:text-primary-600 transition-colors">Início</a></li>
                                <li><a href="#products" class="text-gray-600 hover:text-primary-600 transition-colors">Produtos</a></li>
                                <li><a href="#contact" class="text-gray-600 hover:text-primary-600 transition-colors">Contato</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-4 text-gray-900">Contato</h4>
                            <ul class="space-y-3">
                                <li class="flex items-center space-x-3 text-gray-600">
                                    <svg class="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    <span>(11) 99999-9999</span>
                                </li>
                                <li class="flex items-center space-x-3 text-gray-600">
                                    <svg class="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <span>maria@delicias.com</span>
                                </li>
                                <li class="flex items-center space-x-3 text-gray-600">
                                    <svg class="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <span>São Paulo, SP</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-gray-200 pt-6 text-center">
                        <p class="text-gray-500">
                            © 2024 Delícias da Maria. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        `;
    }
}