import { initializeNavigation } from './navigation.js';
import { initializeProducts } from './products.js';
import { initializeContact } from './contact.js';
import { initializeAnimations } from './animations.js';
import { loadComponents } from './components.js';

// Inicialização principal da aplicação
document.addEventListener("DOMContentLoaded", function () {
    // Carrega os componentes primeiro
    loadComponents();
    
    // Aguarda os componentes carregarem, depois inicializa as funcionalidades
    setTimeout(() => {
        initializeNavigation();
        initializeProducts();
        initializeContact();
        initializeAnimations();
    }, 500); // Timeout aumentado para garantir que os componentes carreguem
});