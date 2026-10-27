# L'Essence Royale — Plataforma E-commerce de Fragrâncias Importadas

Projeto web desenvolvido durante o curso de **Análise e Desenvolvimento de Sistemas** na **Universidade Mogi das Cruzes (UMC)**. Trata-se de uma aplicação Front-End responsiva voltada à curadoria e comercialização de perfumaria fina (designers internacionais e fragrâncias de nicho árabes), priorizando arquitetura semântica, usabilidade (UI/UX) e manipulação dinâmica de estado no navegador.

---

## Demonstração da Aplicação

A plataforma foi estruturada em 5 interfaces interligadas:
* **Página Inicial (`index.html`):** Hero section com gradiente em camadas, logotipo autoral em SVG vetorial e vitrine dos produtos mais vendidos em CSS Grid.
* **Catálogo Dinâmico (`catalogo.html`):** Detalhamento de notas olfativas em listas estruturadas, âncoras internas e motor de filtragem por categoria sem recarregamento.
* **Editorial Técnico (`noticias.html`):** Artigos sobre a evolução da perfumaria, especificação técnica da pirâmide olfativa e consultor interativo guiado por contexto de uso.
* **Atendimento Institucional (`contato.html`):** Apresentação corporativa (missão, visão e valores) e formulário assíncrono com validação client-side.
* **Portfólio dos Desenvolvedores (`portfolio.html`):** Apresentação técnica da equipe, divisão de papéis e competências aplicadas no projeto.

---

## Arquitetura Técnica & Implementação

### 1. Manipulação do DOM e Estado Client-Side (JavaScript ES6+)
* **Persistência de Sessão no Carrinho:** Armazenamento em memória volátil via `sessionStorage`, mantendo os itens preservados e calculando somas dinamicamente durante a navegação entre páginas.
* **Filtragem Declarativa por Categoria:** Alternância de exibição no catálogo manipulando atributos customizados (`data-categoria`) e classes ativas no DOM.
* **Sistema de Recomendação Contextual:** Lógica condicional orientada a regras de ocasião (dia/calor, noite/frio, eventos formais) com injeção dinâmica de conteúdo HTML.
* **Interceptação de Eventos de Formulário:** Tratamento de envio com `event.preventDefault()`, higienização dos campos e renderização de feedback imediato de envio.

### 2. Estilização Modular e Layout Responsivo (CSS3)
* **Custom Properties (Variáveis CSS):** Centralização de paleta (*Dark & Gold*), espaçamentos e sombras na pseudo-classe `:root`.
* **Grids e Flexbox:** Combinação de `display: grid` com `repeat(auto-fit, minmax(...))` para quebras fluidas em cards de produto, além de Flexbox para alinhamento de cabeçalhos e menus.
* **Microinterações:** Sombreamentos dinâmicos (`box-shadow`, `text-shadow`) e elevação de cards no estado `:hover` (`transform: translateY(-6px)`).
* **Media Queries:** Adaptação completa de navegação, tamanhos de fonte e densidade de informação para dispositivos móveis (smartphones e tablets).

### 3. Semântica e Acessibilidade (HTML5)
* Utilização estrita de tags estruturais (`header`, `nav`, `main`, `section`, `article`, `footer`).
* Logotipo proprietário renderizado inline através de elementos gráficos SVG (`<rect>`, `<path>`, `<circle>`).

---

## Estrutura de Pastas do Repositório

```bash
├── img/                       # Ativos de mídia e fotografias dos produtos
├── index.html                 # Página inicial (vitrine e diferenciais)
├── catalogo.html              # Catálogo com filtros de categorias
├── noticias.html              # Pirâmide olfativa e consultor olfativo
├── contato.html               # Institucional e formulário de contato
├── portfolio.html             # Apresentação do time de desenvolvimento
├── style.css                  # Folha de estilos unificada e variáveis CSS
├── script.js                  # Lógica de negócio, carrinho e manipulação de DOM
└── README.md                  # Documentação técnica do projeto
