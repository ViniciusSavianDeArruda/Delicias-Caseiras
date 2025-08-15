import { initializeNavigation } from './navigation.js';
import { initializeProducts } from './products.js';
import { initializeContact } from './contact.js';
import { initializeAnimations } from './animations.js';
import { loadComponents } from './components.js';

// Inicialização principal da aplicação
document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM carregado, iniciando aplicação...');
    
    // Carrega os componentes e inicializa as funcionalidades
    loadComponents().then(() => {
        console.log('Componentes carregados, inicializando funcionalidades...');
        initializeNavigation();
        initializeProducts();
        initializeContact();
        initializeAnimations();
        console.log('Aplicação totalmente inicializada!');
    }).catch(error => {
        console.error('Erro ao carregar componentes:', error);
        // Mesmo com erro, tenta inicializar as funcionalidades
        initializeNavigation();
        initializeProducts();
        initializeContact();
        initializeAnimations();
    });
});