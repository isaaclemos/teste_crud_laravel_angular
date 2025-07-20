# 🛠️ API Backend - Laravel

Este diretório contém a API REST da aplicação, desenvolvida com [Laravel](https://laravel.com/). Ela fornece os endpoints necessários para a manipulação de produtos e serve de backend para o frontend Angular localizado na pasta `front`.

---

## 🔧 Funcionalidades

- 📦 CRUD completo de produtos
- 🌐 API RESTful com JSON
- 🔐 Middleware para segurança básica
- 📁 Arquitetura MVC organizada
- 🌱 Seeds e migrations para banco de dados

---

## 📦 Requisitos

- PHP >= 8.1
- Composer
- MySQL ou PostgreSQL
- Laravel 10+
- Node.js (para assets com Vite, opcional)

---

## ▶️ Como executar

```bash
# 1. Instale as dependências do PHP
composer install

# 2. Gere a chave da aplicação
php artisan key:generate

# 3. Configure o banco de dados no arquivo .env

# 4. Execute as migrations (e opcionalmente os seeds)
php artisan migrate --seed

# 5. Inicie o servidor local
php artisan serve


🗃️ Estrutura de Pastas

api_project/
├── app/                 # Código-fonte da aplicação (Models, Controllers)
├── routes/api.php       # Rotas da API
├── database/            # Migrations, seeds e factories
├── public/              # Document root para produção
├── config/              # Configurações da aplicação
└── .env                 # Variáveis de ambiente

