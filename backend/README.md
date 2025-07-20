# 🛠️ API Backend - Laravel

Este diretório contém a API REST da aplicação, desenvolvida com [Laravel](https://laravel.com/). Ela fornece os endpoints necessários para a manipulação de produtos e serve de backend para o frontend Angular localizado na pasta `frontend`.

---

## 🔧 Funcionalidades

- 📦 CRUD completo de produtos
- 🌐 API RESTful com JSON
- 🔐 Middleware para segurança básica
- 📁 Arquitetura MVC organizada
- 📂 Banco de dados em arquivo SQLite

---

## 📦 Requisitos

- PHP >= 8.1
- Composer
- SQLite 3
- Laravel 10+

---

## ▶️ Como executar

```bash
# 1. Instale as dependências do projeto
composer install

# 2. Gere a chave da aplicação
php artisan key:generate

# 3. Rode as migrations (e opcionalmente os seeders)
php artisan migrate --seed

# 4. Inicie o servidor local
php artisan serve



🗃️ Estrutura de Pastas

api_project/
├── app/                 # Código-fonte da aplicação (Models, Controllers)
├── routes/api.php       # Rotas da API
├── database/            # Migrations, seeds e factories
├── public/              # Document root para produção
├── config/              # Configurações da aplicação
└── .env                 # Variáveis de ambiente

