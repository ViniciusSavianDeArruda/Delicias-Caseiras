
// Mobile menu toggle

// Configuração
const WHATSAPP_NUMBER = "";

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle (use class .open so CSS controls presentation)
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const opened = mobileMenu.classList.toggle('open');
      // update ARIA attributes
      mobileMenu.setAttribute('aria-hidden', (!opened).toString());
      mobileMenuBtn.setAttribute('aria-expanded', opened.toString());
    });
  }

  // Smooth scrolling para links de navegação e botões
  document.querySelectorAll('a[href^="#"], button[onclick^="scrollToSection"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      if (anchor.tagName === "A") e.preventDefault();
      const targetId = anchor.getAttribute("href") ? anchor.getAttribute("href").replace("#", "") : anchor.getAttribute("onclick")?.match(/'([^']+)'/)?.[1];
      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
      // Fecha o menu mobile se estiver aberto
      if (mobileMenu && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileMenuBtn && mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Formulário de pedido via WhatsApp
  const orderForm = document.getElementById("order-form");
  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      // Validação de data
      if (data.date) {
        const selected = new Date(data.date);
        const today = new Date(); today.setHours(0,0,0,0);
        if (selected < today) {
          alert("Escolha uma data futura para a entrega.");
          return;
        }
      }
      const message = `Olá Maria! Gostaria de fazer um pedido:%0A%0ANome: ${data.name || '-'}%0AEmail: ${data.email || '-'}%0ATelefone: ${data.phone || '-'}%0AProduto: ${data.product || '-'}%0AQuantidade: ${data.quantity || '-'}%0AData necessária: ${data.date || '-'}%0ADetalhes adicionais: ${data.message || '-'}`;
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
      window.open(whatsappUrl, "_blank");
    });
  }

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

  // Expor função global para botões inline
  window.scrollToSection = function(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (mobileMenu && mobileMenu.classList && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      mobileMenuBtn && mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  };
  window.showCategory = showCategory;

  // Função WhatsApp global
  window.openWhatsApp = function() {
    const message = "Olá Maria! Tenho interesse nos seus produtos caseiros. Poderia me contar mais sobre suas ofertas atuais?";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Efeito hover nos cards
  const cards = document.querySelectorAll('.hover\\:shadow-xl');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});
