import { initializeNavigation } from './navigation.js';
import { initializeProducts } from './products.js';
import { initializeContact } from './contact.js';
import { initializeAnimations } from './animations.js';
import { loadComponents } from './components.js';

// Inicialização principal da aplicação
document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM carregado, iniciando aplicação...');
    
    // Aguarda um pouco mais para garantir que o Tailwind foi processado
    setTimeout(() => {
        console.log('Iniciando carregamento de componentes...');
        
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
    }, 200);
});

// Fallback caso o DOMContentLoaded já tenha disparado
if (document.readyState === 'loading') {
    // DOM ainda carregando, aguarda o evento
} else {
    // DOM já carregado, executa imediatamente
    console.log('DOM já estava carregado, iniciando aplicação...');
    
    setTimeout(() => {
        loadComponents().then(() => {
            console.log('Componentes carregados (fallback), inicializando funcionalidades...');
            initializeNavigation();
            initializeProducts();
            initializeContact();
            initializeAnimations();
        }).catch(error => {
            console.error('Erro ao carregar componentes (fallback):', error);
            initializeNavigation();
            initializeProducts();
            initializeContact();
            initializeAnimations();
        });
    }, 200);
}

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