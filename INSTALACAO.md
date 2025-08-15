# Como instalar o projeto Delícia Caseiras

## Passo a passo para VSCode:

### 1. Criar a estrutura de pastas
Crie uma pasta chamada `delicia-caseiras` e dentro dela crie:

```
delicia-caseiras/
├── index.html
├── package.json
├── README.md
├── INSTALACAO.md
└── src/
    ├── components/
    │   ├── header.html
    │   ├── hero.html
    │   └── footer.html
    ├── js/
    │   ├── main.js
    │   ├── components.js
    │   ├── navigation.js
    │   ├── products.js
    │   ├── contact.js
    │   ├── animations.js
    │   ├── config.js
    │   └── tailwind-config.js
    └── styles/
        └── main.css
```

### 2. Copiar os arquivos
Copie o conteúdo de cada arquivo do Bolt para os arquivos correspondentes no seu projeto.

### 3. Instalar dependências
Abra o terminal no VSCode na pasta do projeto e execute:

```bash
npm install
```

### 4. Executar o projeto
```bash
npm run dev
```

O projeto será aberto automaticamente no navegador em `http://localhost:3000`

### 5. Personalizar
- Edite o número do WhatsApp em `src/js/config.js`
- Personalize cores e estilos em `src/styles/main.css`
- Adicione seus próprios produtos e imagens

## Problemas comuns:

### Se o live-server não funcionar:
```bash
npm install -g live-server
```

### Se as imagens não carregarem:
- Substitua as URLs do Pexels por imagens locais
- Coloque as imagens em uma pasta `assets/images/`

### Se o Tailwind não carregar:
- Verifique sua conexão com a internet
- O projeto usa Tailwind via CDN

## Estrutura do projeto:
- `index.html` - Página principal
- `src/components/` - Componentes HTML reutilizáveis
- `src/js/` - Scripts JavaScript modulares
- `src/styles/` - Estilos CSS customizados
- `package.json` - Configurações e dependências

## Próximos passos:
1. Personalize o conteúdo para seu negócio
2. Adicione suas próprias imagens
3. Configure o número do WhatsApp
4. Teste em diferentes dispositivos
5. Publique online (Netlify, Vercel, etc.)