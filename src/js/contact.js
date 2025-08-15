import { CONFIG } from './config.js';

// Funcionalidades de contato
export function initializeContact() {
    // Formulário de pedido via WhatsApp
    const orderForm = document.getElementById("order-form");
    if (orderForm) {
        orderForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            // Validação da data selecionada
            if (data.date) {
                const selected = new Date(data.date);
                const today = new Date(); today.setHours(0,0,0,0);
                if (selected < today) {
                    alert("Escolha uma data futura para a entrega.");
                    return;
                }
            }
            const message = `Olá Maria! Gostaria de fazer um pedido:%0A%0ANome: ${data.name || '-'}%0AEmail: ${data.email || '-'}%0ATelefone: ${data.phone || '-'}%0AProduto: ${data.product || '-'}%0AQuantidade: ${data.quantity || '-'}%0AData necessária: ${data.date || '-'}%0ADetalhes adicionais: ${data.message || '-'}`;
            const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${message}`;
            window.open(whatsappUrl, "_blank");
        });
    }

    // Função global para abrir WhatsApp
    window.openWhatsApp = function() {
        const message = "Olá Maria! Tenho interesse nos seus produtos caseiros. Poderia me contar mais sobre suas ofertas atuais?";
        const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };
}