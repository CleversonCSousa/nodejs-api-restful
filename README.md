# nodejs-api-restful

Desenvolvimento de uma API RESTFUL utilizando Node.js.
O principal foco é estudar, aplicar e aprofundar os conhecimentos de:

- API RESTFUL
- Testes automatizados
- Deploy de aplicações Node.js
- Automação do processo de deploy

Algumas tecnologias que serão utilizadas para ajudar no desenvolvimento da API:

- Fastify
- SQL
- Knex
- TypeScript

Para padronização de código e melhores práticas de código será utilizado a ferramenta ESLint

# Requisitos funcionais

[x] O usuário deve poder criar uma nova transação;
[x] O usuário deve poder obter um resumo da sua conta;
[x] O usuário deve poder listar todas transações que já ocorreram;
[x] O usuário deve poder visualizar uma transação única;

# Regras de negócio

[x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
[x] Deve ser possível identificarmos o usuário entre as requisições;
[x] O usuário só pode visualizar transações o qual ele criou;

# Anotações

## Testes automatizados

São testes que são executados na nossa aplicação sem a necessidade de uma intervenção manual.

Os três tipos principais de testes são os
    - Unitários (unidade da aplicação, testada isolada)
    - Integração (comunicação entre duas ou mais unidades)
    - E2E/ponta a ponta (simulam um usuário operando na aplicação)

Pirâmide de testes: É uma representação gŕafica dos tipos de testes.
É utilizada para ajudar a otimizar nossos testes, ajuda a balancear testes em relação a quantidade, velocidade de execução, custo e complexidade.