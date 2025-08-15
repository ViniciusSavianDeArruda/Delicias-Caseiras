import { initializeNavigation } from './navigation.js';
import { initializeProducts } from './products.js';
import { initializeContact } from './contact.js';
import { initializeAnimations } from './animations.js';

// Função principal de inicialização
function initializeApp() {
    console.log('🚀 Inicializando aplicação Delícias da Maria...');
    
    // Inicializa as funcionalidades
    initializeNavigation();
    initializeProducts();
    initializeContact();
    initializeAnimations();
    
    console.log('✅ Aplicação totalmente inicializada!');
}

// Inicialização quando DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM já carregado
    initializeApp();
}