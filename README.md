# DSCommerce
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Caelest1s/DSCommerce-frontend-vite/blob/main/LICENSE) 

# Sobre o projeto

https://evirtualstore.netlify.app/

DSCommerce é uma aplicação web full stack (Java + Spring e React) construída durante o curso do **DevSuperior**, evento organizado pela [DevSuperior](https://devsuperior.com.br "Site da DevSuperior").

A aplicação consiste em um e-commerce onde pode pesquisar e selecionar produtos de diversas categorias (eletrônicos, livros, computadores), onde os dados são inseridos na aplicação por um admin e depois são listados no app web, que também apresenta um *dashboard*. O sistema conta com Login e Autenticação, onde é selecionado o perfil de *'usuário'* ou *'admin'*. 

### Perfil de usuário
* Admin
* Usuário
* Comum

Futuramente disponibilizarei o projeto numa *cloud platform* para melhor visualização. Para isto estou em busca de uma plataforma gratuita.

## Layout Web User
![User 1](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/user/login.JPG) 
![User 2](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/user/list.JPG)
![User 3](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/user/description.JPG) 
![User 4](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/user/cart.JPG)
![User 5](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/user/buy.JPG) 

## Layout Web Admin
![Admin 1](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/admin/list.JPG)
![Admin 2](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/admin/admin%20home.JPG)
![Admin 3](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/admin/edit-list.JPG)
![Admin 4](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/admin/validation.JPG)
![Admin 5](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/admin/new-product.JPG)
![Admin 6](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/admin/search.JPG)

## Modelo conceitual
![Modelo Conceitual](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/modelo-conceitual/ORM.JPG)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / JPQL / Hibernate
- JWT
- OAuth2
- Maven
## Front end
- HTML / CSS / JS
- ReactJS / TypeScript
- Axios

# Competências
## Backend
- REST
- Postman
- JWT
- OAuth2
## Frontend
- Hook
- UseState/UseEffect
- LocalStorage
- Global variable
- Axios

# Features
- Login (user/admin)
- Product List (all)
- Product Cart (all)
- Product Detail (all)
- Update Product (admin)
- New Product  (admin)
- Delete Product (admin)
- Buy Product (user/admin)

## Implantação em produção
- Back end: ***
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 17

```bash
# clonar repositório
git clone https://github.com/Caelest1s/DSCommerce-final

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/Caelest1s/DSCommerce-frontend-vite

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Jefferson Nascimento de Jesus Celestino

https://www.linkedin.com/in/caelestis/
