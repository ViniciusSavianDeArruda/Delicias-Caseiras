import { initializeNavigation } from './navigation.js';
import { initializeProducts } from './products.js';
import { initializeContact } from './contact.js';
import { initializeAnimations } from './animations.js';

// Main application initialization
document.addEventListener("DOMContentLoaded", function () {
    initializeNavigation();
    initializeProducts();
    initializeContact();
    initializeAnimations();
});