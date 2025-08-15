# Delícia Caseiras 🍰

**Delícia Caseiras** é um site profissional e moderno para produtos caseiros, desenvolvido para apresentar e facilitar a venda de **bolos, doces e salgados artesanais**. O projeto combina design responsivo com uma experiência de usuário intuitiva, oferecendo uma vitrine online completa e organizada.

## 🎯 Objetivos do Projeto

- **Apresentação Visual**: Catálogo de produtos organizado e visualmente atrativo
- **Facilitar Pedidos**: Sistema integrado com WhatsApp para comunicação direta
- **Experiência Mobile**: Design totalmente responsivo para todos os dispositivos
- **Performance**: Carregamento rápido e navegação fluida
- **Modularidade**: Código organizado em componentes reutilizáveis

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilos customizados e animações
- **JavaScript (ES6+)** - Funcionalidades interativas e carregamento dinâmico
- **Tailwind CSS** - Framework CSS para design responsivo
- **Componentes Modulares** - Arquitetura baseada em componentes

## 📁 Estrutura do Projeto

```
delicia-caseiras/
├── index.html                 # Página principal
├── package.json              # Configurações e dependências
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── header.html      # Cabeçalho com navegação
│   │   ├── hero.html        # Seção principal/banner
│   │   └── footer.html      # Rodapé com informações
│   ├── js/                  # Scripts JavaScript
│   │   ├── main.js         # Inicialização principal
│   │   ├── components.js   # Sistema de carregamento de componentes
│   │   ├── navigation.js   # Funcionalidades de navegação
│   │   ├── products.js     # Sistema de filtros de produtos
│   │   ├── contact.js      # Formulário e integração WhatsApp
│   │   ├── animations.js   # Efeitos visuais e animações
│   │   ├── config.js       # Configurações globais
│   │   └── tailwind-config.js # Configuração do Tailwind
│   └── styles/
│       └── main.css        # Estilos customizados
└── README.md               # Documentação do projeto
```

## 🧩 Componentes do Sistema

### 📋 Header (`src/components/header.html`)
- **Logo** com gradiente personalizado
- **Navegação desktop** com links suaves
- **Menu mobile** responsivo com animações
- **Botão WhatsApp** para contato direto
- **Design fixo** que acompanha o scroll

### 🎨 Hero (`src/components/hero.html`)
- **Banner principal** com call-to-action
- **Imagem destacada** dos produtos
- **Cards de features** (Feito com Amor, Sempre Fresquinho, Qualidade Garantida)
- **Botões de ação** para navegação e pedidos
- **Elementos decorativos** com gradientes

### 📞 Footer (`src/components/footer.html`)
- **Informações da empresa** e descrição
- **Links rápidos** para navegação
- **Dados de contato** completos
- **Botão WhatsApp** integrado
- **Design responsivo** em grid

## ⚙️ Funcionalidades JavaScript

### 🔧 Sistema de Componentes (`src/js/components.js`)
- **Carregamento dinâmico** de componentes HTML
- **Sistema de fallback** para garantir funcionamento
- **Tratamento de erros** robusto
- **Inicialização automática** dos componentes

### 🧭 Navegação (`src/js/navigation.js`)
- **Scroll suave** entre seções
- **Menu mobile** com toggle animado
- **Navegação por teclado** acessível
- **Fechamento automático** do menu mobile

### 🛍️ Produtos (`src/js/products.js`)
- **Sistema de abas** para categorias (Bolos, Doces, Salgados)
- **Filtros dinâmicos** de produtos
- **Transições suaves** entre categorias
- **Interface intuitiva** de navegação

### 📱 Contato (`src/js/contact.js`)
- **Formulário de pedidos** completo
- **Integração WhatsApp** automática
- **Validação de dados** em tempo real
- **Formatação de mensagens** para WhatsApp

### ✨ Animações (`src/js/animations.js`)
- **Efeitos hover** nos cards de produtos
- **Transições suaves** em elementos interativos
- **Animações de entrada** para melhor UX
- **Performance otimizada** das animações

## 🎨 Design e Estilo

### 🌈 Sistema de Cores
- **Gradientes personalizados** (laranja para rosa)
- **Paleta harmoniosa** com tons quentes
- **Contraste adequado** para acessibilidade
- **Consistência visual** em todo o site

### 📱 Responsividade
- **Mobile First** - Otimizado para dispositivos móveis
- **Breakpoints inteligentes** para diferentes telas
- **Grid flexível** que se adapta ao conteúdo
- **Navegação otimizada** para touch

### 🎯 UX/UI
- **Interface intuitiva** e fácil de usar
- **Carregamento rápido** de componentes
- **Feedback visual** em todas as interações
- **Acessibilidade** seguindo padrões web

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado
- Navegador moderno

### Instalação e Execução
```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev

# Ou usar o comando start
npm start
```

O projeto será executado em `http://localhost:3000`

## 📋 Funcionalidades Principais

### 🛒 Catálogo de Produtos
- **3 categorias principais**: Bolos, Doces & Sobremesas, Salgados
- **Filtros dinâmicos** por categoria
- **Cards visuais** com hover effects
- **Informações detalhadas** de cada produto

### 📞 Sistema de Pedidos
- **Formulário completo** de pedidos
- **Integração direta** com WhatsApp
- **Validação de campos** obrigatórios
- **Formatação automática** da mensagem

### 📱 Contato Integrado
- **WhatsApp direto** para contato rápido
- **Informações completas** da empresa
- **Múltiplos canais** de comunicação
- **Resposta rápida** garantida

## 🔧 Configuração

### WhatsApp Integration
Para configurar o número do WhatsApp, edite o arquivo `src/js/config.js`:

```javascript
export const CONFIG = {
    WHATSAPP_NUMBER: "5511999999999" // Seu número aqui
};
```

### Personalização de Cores
As cores podem ser ajustadas no arquivo `src/js/tailwind-config.js` e `src/styles/main.css`.

## 🎯 Próximas Melhorias

- [ ] Sistema de carrinho de compras
- [ ] Galeria de imagens dos produtos
- [ ] Sistema de avaliações
- [ ] Blog de receitas
- [ ] Painel administrativo
- [ ] Sistema de pagamento online

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `package.json` para mais detalhes.

## 👩‍💻 Desenvolvimento

Projeto desenvolvido com foco em:
- **Performance** e velocidade de carregamento
- **SEO** e otimização para buscadores  
- **Acessibilidade** e usabilidade
- **Manutenibilidade** do código
- **Escalabilidade** da arquitetura

---
