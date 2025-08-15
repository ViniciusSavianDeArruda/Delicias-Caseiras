import { initializeNavigation } from './navigation.js';
import { initializeProducts } from './products.js';
import { initializeContact } from './contact.js';
import { initializeAnimations } from './animations.js';
import { loadComponents } from './components.js';

// Main application initialization
document.addEventListener("DOMContentLoaded", function () {
    // Load components first
    loadComponents();
    
    // Wait for components to load, then initialize functionality
    setTimeout(() => {
        initializeNavigation();
        initializeProducts();
        initializeContact();
        initializeAnimations();
    }, 500); // Increased timeout to ensure components load
});