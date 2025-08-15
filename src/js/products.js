// Funcionalidades dos produtos
export function initializeProducts() {
    console.log('Inicializando sistema de produtos...');
    
    // Sistema de abas para categorias de produtos
    function showCategory(category) {
        console.log('Mostrando categoria:', category);
        const categories = document.querySelectorAll('.product-category');
        console.log('Categorias encontradas:', categories.length);
        categories.forEach(cat => cat.classList.add('hidden'));
        const selected = document.getElementById(`category-${category}`);
        if (selected) {
            selected.classList.remove('hidden');
            console.log('Categoria selecionada:', category);
        } else {
            console.error('Categoria não encontrada:', `category-${category}`);
        }
        const tabs = document.querySelectorAll('.product-tab');
        tabs.forEach(tab => tab.classList.remove('active-tab'));
        const activeTab = document.getElementById(`tab-${category}`);
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
    console.log('Sistema de produtos inicializado!');
}