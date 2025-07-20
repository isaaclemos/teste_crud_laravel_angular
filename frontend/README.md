# 🖥️ Frontend - Angular

Este diretório contém o projeto frontend da aplicação, desenvolvido com [Angular](https://angular.io/). A interface permite o gerenciamento de produtos por meio de uma API REST construída em Laravel (localizada na pasta `api_project`).

---

## 🔧 Funcionalidades

- ✅ Listagem paginada de produtos
- ➕ Criação de novos produtos
- ✏️ Edição de produtos existentes
- ❌ Exclusão com confirmação
- 🔁 Integração com a API Laravel via HTTP
- 🧩 Interface com Angular + Bootstrap

---

## 📦 Requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- Angular CLI v15 ou superior

---

## ▶️ Como executar

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor Angular
ng serve

# 3. Acesse no navegador
http://localhost:4200

📁 Estrutura de Pastas

front/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes principais
│   │   ├── interfaces/          # Tipagens (Product, etc.)
│   │   ├── services/            # Serviços de comunicação com a API
│   │   ├── resources/           # Dados auxiliares e mocks
│   │   └── app.component.ts     # Componente principal
├── angular.json                # Configuração do Angular
├── package.json                # Dependências do projeto
└── tsconfig.json               # Configuração do TypeScript


