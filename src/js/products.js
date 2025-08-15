// Product functionality
export function initializeProducts() {
    // Tabs de categoria de produtos
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
    
    // Inicializa com bolos
    showCategory('bolos');

    // Expor função global
    window.showCategory = showCategory;
}