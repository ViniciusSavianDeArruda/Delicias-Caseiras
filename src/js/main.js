import { initializeNavigation } from './navigation.js';
import { initializeProducts } from './products.js';
import { initializeContact } from './contact.js';
import { initializeAnimations } from './animations.js';
import { loadComponents } from './components.js';

// Inicialização principal da aplicação
document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM carregado, iniciando aplicação...');
    
    // Inicializa as funcionalidades diretamente (componentes já estão no HTML)
    initializeNavigation();
    initializeProducts();
    initializeContact();
    initializeAnimations();
    console.log('Aplicação totalmente inicializada!');
});

// Fallback caso o DOMContentLoaded já tenha disparado
if (document.readyState === 'loading') {
    // DOM ainda carregando, aguarda o evento
} else {
    // DOM já carregado, executa imediatamente
    console.log('DOM já estava carregado, iniciando aplicação...');
    initializeNavigation();
    initializeProducts();
    initializeContact();
    initializeAnimations();
}