import { initializeNavigation } from './navigation.js';
import { initializeProducts } from './products.js';
import { initializeContact } from './contact.js';
import { initializeAnimations } from './animations.js';
import { loadComponents } from './components.js';

// Função principal de inicialização
function initializeApp() {
    console.log('Inicializando aplicação...');
    
    // Carrega componentes primeiro
    loadComponents();
    
    // Aguarda um pouco para garantir que os componentes foram inseridos no DOM
    setTimeout(() => {
        console.log('Inicializando funcionalidades...');
        initializeNavigation();
        initializeProducts();
        initializeContact();
        initializeAnimations();
        console.log('Aplicação totalmente inicializada!');
    }, 100);
}

// Inicialização quando DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM já carregado
    initializeApp();
}