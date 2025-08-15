import { CONFIG } from './config.js';

// Funcionalidades de contato
export function initializeContact() {
    // Função global para abrir WhatsApp
    window.openWhatsApp = function() {
        const message = "Olá Maria! Tenho interesse nos seus produtos caseiros. Poderia me contar mais sobre suas ofertas atuais?";
        const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };
}