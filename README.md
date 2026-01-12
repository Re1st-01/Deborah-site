# Deborah — Consultora Imobiliária

Site profissional de consultoria imobiliária desenvolvido com **React 18** + **Vite**, apresentando empreendimentos imobiliários com foco em experiência do usuário e conversão de leads.

## 🏠 Sobre o Projeto

O site de Deborah é uma plataforma moderna e responsiva que apresenta empreendimentos imobiliários de qualidade, permitindo potenciais clientes:

- ✨ Explorar destaques de empreendimentos
- 📱 Navegar pela lista completa de propriedades
- 📞 Entrar em contato direto via WhatsApp
- 🎯 Conhecer a consultora e sua trajetória

## 🚀 Stack Tecnológico

- **Frontend**: React 18.2.0
- **Build Tool**: Vite (dev, build, preview)
- **Routing**: React Router DOM v6
- **Styling**: CSS puro com variáveis CSS
- **Integração**: WhatsApp API (wa.me)

## 📋 Funcionalidades

### 🎨 Interface Visual
- **Hero Section**: Background image com overlay escuro e call-to-actions destacados
- **Seção Destaques**: Grid com paginação (3 cards por página, 6 propriedades)
- **Contato**: Section full-width com background image e formulário WhatsApp
- **Footer**: Design moderno com foto da consultora, logo de afiliação Direcional e Instagram

### 🔧 Funcionalidades Técnicas
- Navegação dinâmica com active states
- Paginação circular (carousel-style) na seção de destaques
- Animação suave (fadeInUp) ao carregar novos cards
- Full-width sections com breakout CSS (100vw)
- Links dinâmicos de WhatsApp com mensagens personalizadas
- Responsivo em desktop, tablet e mobile

### 📄 Páginas
1. **Home** (`/`)
   - Hero com imagem de background
   - Seção Destaques com 6 empreendimentos
   - Seção Contato full-width
   
2. **Empreendimentos** (`/empreendimentos`)
   - Galeria com até 10 propriedades
   - Cards com descrição, preço e info
   - Integração com WhatsApp

3. **Floating WhatsApp**: Botão flutuante global para contato rápido

## 🏗️ Estrutura do Projeto

```
site-debora/
├── public/                  # Assets estáticos
│   ├── interior.jpg
│   ├── interior-contact.jpg
│   ├── deborah-footer.jpeg
│   ├── logo-direcional.png
│   └── [imagens de empreendimentos]
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Nav com active states
│   │   ├── Footer.jsx       # Footer com foto e logo
│   │   ├── PropertyCard.jsx # Card de propriedade
│   │   ├── ContactCTA.jsx   # Seção de contato
│   │   ├── WhatsAppFloat.jsx # Botão flutuante
│   │   └── FeaturedCarousel.jsx # (componente legado)
│   ├── pages/
│   │   ├── Home.jsx         # Página inicial com paginação
│   │   ├── Properties.jsx   # Listagem de empreendimentos
│   │   ├── Contact.jsx      # (integrado em Home)
│   │   └── PropertyDetail.jsx
│   ├── data/
│   │   └── properties.js    # Database de empreendimentos
│   ├── styles/
│   │   └── index.css        # Estilos globais
│   ├── App.jsx              # Router principal
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Destaques dos Empreendimentos

1. **Total Ville Planaltina** - Terreno com infraestrutura completa
2. **Total Ville Ikeda** - Condomínio fechado com lazer de clube
3. **Total Ville Conviver** - Santa Maria, com comércios e serviços
4. **Recanto dos Pássaros** - Condomínios modernos e planejados
5. **Singulare Home Riva** - Casa com áreas de lazer de clube
6. **Total Ville Ipes** - Apartamento de 2 quartos em Valparaíso

## 💻 Como Rodar Localmente

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Re1st-01/Deborah-site.git
cd site-debora

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```
Acesse em `http://localhost:5173`

### Build para Produção

```bash
npm run build
npm run preview
```

## 🎨 Customização

### Alterar Empreendimentos
Edite `src/data/properties.js`:
```javascript
const properties = [
  { 
    id: 1, 
    title: 'Nome do Empreendimento',
    type: 'Apartamento',
    bedrooms: 2,
    area: 68,
    price: 350000,
    description: 'Descrição...',
    images: ['/image.jpg']
  },
  // ...
]
```

### Cores e Estilos
Altere as variáveis CSS em `src/styles/index.css`:
```css
:root {
  --bg: #f7f7f9;
  --accent: #0066cc;
  --text: #222;
}
```

### Número WhatsApp
Atualize em múltiplos locais:
- `src/pages/Home.jsx`
- `src/components/PropertyCard.jsx`
- `src/components/ContactCTA.jsx`
- `src/components/WhatsAppFloat.jsx`

## 📱 Responsividade

- **Desktop** (1100px+): Layout completo, cards 380px
- **Tablet** (900px-1099px): 2 colunas de cards
- **Mobile** (420px-899px): 1 coluna, fonte reduzida

## 🔐 Integração WhatsApp

Todos os CTAs utilizam a API `wa.me`:
```javascript
const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`
```

Número configurado: **+5561996810504**

## 🎯 Próximas Melhorias

- [ ] Página de detalhes de propriedade
- [ ] Filtros avançados por tipo/preço/área
- [ ] Formulário de contato com backend
- [ ] Analytics (Google Analytics)
- [ ] SEO otimizado (meta tags, sitemap)
- [ ] PWA (Progressive Web App)
- [ ] Dark mode
- [ ] Galeria lightbox para imagens

## 📄 Licença

Desenvolvido por **Re1st Tech** - www.re1st.site

## 👨‍💻 Desenvolvedor

**Re1st Tech**
- Site: https://www.re1st.site/
- GitHub: https://github.com/Re1st-01

---

**Status**: ✅ Production Ready | Última atualização: Janeiro 2026
