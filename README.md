# DSCommerce
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Caelest1s/DSCommerce-frontend-vite/blob/main/LICENSE) 

# Sobre o projeto

DSCommerce é uma aplicação web full stack e foi projetada para um e-commerce onde poderá pesquisar, selecionar e comprar produtos. 

Para isto o usuário deverá acessar sua conta através de um login. Uma vez logado o cliente poderá adicionar produtos a sua lista de carrinho. Assim, tendo concluído seu carrinho com todos os produtos desejados o cliente estará pronto para concluir a compra clicando em finalizar pedido.
Após finalizar pedido o sistema registrará a ordem de compra e emitirá uma nota de "compra realizada com sucesso!".
Uma vez concluída a compra a lista de carrinho voltará a estar vazia, pronta para realizar uma nova compra.

A aplicação web abrange itens das mais diversas categorias como: eletrônicos, livros, computadores.
Os produtos são inseridos na aplicação por um admin. Depois são listados no catálogo o qual é apresentado em um *dashboard*. 
O sistema conta com Login e Autenticação, onde é selecionado o perfil de *'cliente'* ou *'admin'* através do tipo de acesso da conta.

### Tipo de Perfil
* Cliente
* Admin
* Usuário (sem login)

## Layout Web 'Cliente'
![User 1](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/user/login.JPG) 
![User 2](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/user/list.JPG)
![User 3](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/user/description.JPG) 
![User 4](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/user/cart.JPG)
![User 5](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/user/buy.JPG) 

## Layout Web 'Admin'
![Admin 1](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/admin/list.JPG)
![Admin 2](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/admin/admin%20home.JPG)
![Admin 3](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/admin/edit-list.JPG)
![Admin 4](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/admin/validation.JPG)
![Admin 5](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/admin/new-product.JPG)
![Admin 6](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/admin/search.JPG)

## Modelo conceitual
![Modelo Conceitual](https://github.com/Caelest1s/datafiles/blob/main/assets/readme/DSCommerce/modelo-conceitual/ORM.JPG)

## Características do projeto e permissões
- Login -> cliente/admin
- Catálogo de produtos -> usuário
- Carrinho de produtos -> usuário
- Detalhes do Produto -> usuário
- Comprar Produto -> cliente/admin
- Editar Produto -> admin 
- Inserir Novo Produto -> admin
- Excluir Produto -> admin

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- SQL
- Postgres
- Maven
## Front end
- ReactJS / TypeScript
- HTML / CSS / JS
## Hospedagem
- Netlify (frontend)

## Competências Backend 
- REST
- JWT
- OAuth2
- Postman
## Competências Frontend
- Hook
- UseState/UseEffect
- Local Storage
- Global Variable
- Axios

## Implantação em produção
- Backend: ***
- Frontend web: Netlify

Futuramente disponibilizarei o projeto numa *cloud platform* para melhor visualização. Somente o frontend se encontra hospedado.
Para ter acesso ao projeto 100% basta executar os passos descritos abaixo:

# Como executar o projeto
## Backend
pré-requisito:
- Java 17 (mínimo)
- Spring Boot 2.7.3 (mínimo)


```bash
# clonar repositório
git clone https://github.com/Caelest1s/DSCommerce-backend

# entrar na pasta do projeto backend
cd DSCommerce-backend

# executar o projeto
mvnw spring-boot:run
```

após executar o DSCommerce-backend em sua máquina local basta acessar o link abaixo para conectar com a aplicação
* https://evirtualstore.netlify.app/

<!-- 
## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/Caelest1s/DSCommerce-frontend-vite

# entrar na pasta do projeto frontend web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```
-->

# Autor

Jefferson Nascimento de Jesus Celestino

https://www.linkedin.com/in/caelestis/
