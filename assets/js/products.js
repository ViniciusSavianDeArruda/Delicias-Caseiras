// Funcionalidades dos produtos
function initializeProducts() {
    console.log('Inicializando sistema de produtos...');
    
    // Sistema de abas para categorias de produtos
    function showCategory(category) {
        console.log('Mostrando categoria:', category);
        
        // Esconde todas as categorias
        const categories = document.querySelectorAll('.product-category');
        categories.forEach(function(cat) {
            cat.classList.add('hidden');
        });
        
        // Mostra a categoria selecionada
        const selectedCategory = document.getElementById('category-' + category);
        if (selectedCategory) {
            selectedCategory.classList.remove('hidden');
            console.log('Categoria exibida:', category);
        } else {
            console.error('Categoria não encontrada:', 'category-' + category);
        }
        
        // Atualiza as abas
        const tabs = document.querySelectorAll('.product-tab');
        tabs.forEach(function(tab) {
            tab.classList.remove('active-tab');
        });
        
        const activeTab = document.getElementById('tab-' + category);
        if (activeTab) {
            activeTab.classList.add('active-tab');
            console.log('Tab ativada:', category);
        }
    }
    
    // Inicializa mostrando a categoria de bolos
    console.log('Inicializando com categoria bolos...');
    showCategory('bolos');

    // Expõe função global para uso nos botões
    window.showCategory = showCategory;
    
    console.log('Sistema de produtos inicializado com sucesso!');
}