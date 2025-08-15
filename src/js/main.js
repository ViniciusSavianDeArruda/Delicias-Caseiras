import { initializeNavigation } from './navigation.js';
import { initializeProducts } from './products.js';
import { initializeContact } from './contact.js';
import { initializeAnimations } from './animations.js';
import { loadComponents } from './components.js';

// Função principal de inicialização
function initializeApp() {
    console.log('🚀 Inicializando aplicação Delícias da Maria...');
    
    // Carrega componentes primeiro
    console.log('📦 Carregando componentes...');
    loadComponents();
    
    // Aguarda um pouco para garantir que os componentes foram inseridos no DOM
    setTimeout(() => {
        console.log('⚙️ Inicializando funcionalidades...');
        
        // Verifica se os elementos foram carregados
        const header = document.querySelector('header');
        const hero = document.querySelector('#hero');
        const footer = document.querySelector('footer');
        
        console.log('🔍 Verificando componentes:');
        console.log('- Header:', header ? '✅ Encontrado' : '❌ Não encontrado');
        console.log('- Hero:', hero ? '✅ Encontrado' : '❌ Não encontrado');
        console.log('- Footer:', footer ? '✅ Encontrado' : '❌ Não encontrado');
        
        // Inicializa as funcionalidades
        initializeNavigation();
        initializeProducts();
        initializeContact();
        initializeAnimations();
        
        console.log('🎉 Aplicação totalmente inicializada!');
        console.log('📋 Você deve ver:');
        console.log('  ✅ Header com logo "Delícias da Maria"');
        console.log('  ✅ Hero com foto e 3 cards');
        console.log('  ✅ Seção "Meus Produtos Deliciosos"');
        console.log('  ✅ Formulário de contato');
        console.log('  ✅ Footer completo');
    }, 200);
}

// Inicialização quando DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM já carregado
    initializeApp();
}