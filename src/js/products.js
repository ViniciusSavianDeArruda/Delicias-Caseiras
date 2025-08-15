// Funcionalidades dos produtos
export function initializeProducts() {
    // Sistema de abas para categorias de produtos
    function showCategory(category) {
        const categories = document.querySelectorAll('.product-category');
        categories.forEach(cat => cat.classList.add('hidden'));
        const selected = document.getElementById(`category-${category}`);
        if (selected) selected.classList.remove('hidden');
        const tabs = document.querySelectorAll('.product-tab');
        tabs.forEach(tab => tab.classList.remove('active-tab'));
        const activeTab = document.getElementById(`tab-${category}`);
        if (activeTab) activeTab.classList.add('active-tab');
    }
    
    // Inicializa mostrando a categoria de bolos
    showCategory('bolos');

    // Expõe função global para uso nos botões
    window.showCategory = showCategory;
}