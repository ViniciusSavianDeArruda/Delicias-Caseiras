import { CONFIG } from './config.js';

// Funcionalidades de contato
export function initializeContact() {
    // Função global para abrir WhatsApp
    window.openWhatsApp = function() {
        const message = "Olá Maria! Vi seu site e tenho interesse nos seus produtos caseiros. Gostaria de fazer um pedido ou saber mais sobre suas delícias!";
        const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };
}