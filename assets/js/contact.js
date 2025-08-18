// Funcionalidades de contato
function initializeContact() {
    console.log('Inicializando sistema de contato...');
    
    // Função para abrir WhatsApp
    function openWhatsApp() {
        console.log('Abrindo WhatsApp...');
        const message = "Olá Maria! Vi seu site e tenho interesse nos seus produtos caseiros. Gostaria de fazer um pedido ou saber mais sobre suas delícias!";
        const whatsappUrl = "https://wa.me/" + window.CONFIG.WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
        
        console.log('URL do WhatsApp:', whatsappUrl);
        window.open(whatsappUrl, "_blank");
    }
    
    // Expõe função global para uso nos botões
    window.openWhatsApp = openWhatsApp;
    
    console.log('Sistema de contato inicializado com sucesso!');
}