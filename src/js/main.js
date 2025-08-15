import { initializeNavigation } from './navigation.js';
import { initializeProducts } from './products.js';
import { initializeContact } from './contact.js';
import { initializeAnimations } from './animations.js';
import { loadComponents } from './components.js';

// Inicialização principal da aplicação
document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM carregado, iniciando aplicação...');
    
    // Carrega os componentes primeiro, depois inicializa as funcionalidades
    loadComponents().then(() => {
        console.log('Componentes carregados, inicializando funcionalidades...');
        initializeNavigation();
        initializeProducts();
        initializeContact();
        initializeAnimations();
        console.log('Aplicação totalmente inicializada!');
    }).catch(error => {
        console.error('Erro ao carregar componentes:', error);
        // Mesmo com erro, inicializa as funcionalidades (fallbacks já foram aplicados)
        initializeNavigation();
        initializeProducts();
        initializeContact();
        initializeAnimations();
        console.log('Aplicação inicializada com fallbacks!');
    });
});

// Fallback caso o DOMContentLoaded já tenha disparado
if (document.readyState === 'loading') {
    // DOM ainda carregando, aguarda o evento
} else {
    // DOM já carregado, executa imediatamente
    console.log('DOM já estava carregado, iniciando aplicação...');
    loadComponents().then(() => {
        initializeNavigation();
        initializeProducts();
        initializeContact();
        initializeAnimations();
    }).catch(error => {
        console.error('Erro ao carregar componentes:', error);
        initializeNavigation();
        initializeProducts();
        initializeContact();
        initializeAnimations();
    });
}