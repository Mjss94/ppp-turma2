# API Cronograma Capilar

Esta API permite o acompanhamento do cronograma capilar, incluindo registro de tipo de cabelo, cremes, tratamentos, lavagens e progresso. A autenticação é feita via JWT.

## Funcionalidades
- Registro e login de usuário
- Registro e consulta de tipo de cabelo (3b, 3c, 4a, 4b, 4c, 4d)
- Cadastro e busca de cremes
- Registro de lavagens e resultado do tratamento
- Consulta de progresso do tratamento
- Documentação Swagger disponível em `/api-docs`

## Estrutura do Projeto
- `routes/` - Rotas da API
- `controllers/` - Controladores das rotas
- `service/` - Lógica de negócio
- `model/` - Banco de dados em memória
- `resources/` - Documentação Swagger
- `middleware/` - Autenticação JWT

## Autenticação
- Registre-se via `/user/register`
- Faça login via `/user/login` para obter o token JWT
- Envie o token no header `Authorization: Bearer <token>` para acessar endpoints protegidos

## Endpoints Principais
Consulte a documentação Swagger para detalhes dos endpoints, modelos de resposta e códigos de erro.

## Como rodar
1. Instale as dependências:
   ```bash
   npm install express body-parser cors swagger-ui-express jsonwebtoken bcryptjs
   ```
2. Inicie o servidor:
   ```bash
   node app.js
   ```
3. Acesse a documentação em [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Observações
- Os dados são armazenados apenas em memória (não persistem após reiniciar o servidor).
- Todos os endpoints protegidos exigem autenticação JWT.
