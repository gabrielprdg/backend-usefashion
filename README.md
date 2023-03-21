# Backend - UseProd
UseProd é basicamente uma Rest api de ecommerce de moda feminina.

# Aplicação Node - UseProd

API HTTP em Node.js com TypeScript, Express e Docker e MongoDB.

## Guia de desenvolvimento

Prerequisites:
-  caso não utilize docker é recomendado ter uma versao do node mais atual.
- `yarn` ou `npm` (para gerenciamento de dependências e execução de scripts)
- `docker` e `docker-compose` (para executar o servidor, banco de dados localmente de forma isolada e reproduzível)

### Backend: 


Em primeiro lugar se faz necessário preencher as variáveis de ambiente, lembrando que a porta usada e mapeada pelo docker é a 8081 da aplicação.
Crie um arquivo .env na raíz do projeto.
```
AWS_DEFAULT_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
MONGO_URL=
PORT=
JWT_SECRET=
ACCESS_TOKEN=
CLIENT_ID=
CLIENT_SECRET=
```

A mongo url é basicamente essa mongodb://mongo:27017/nomedobanco
o nome do banco coloquei proiot

Realizando build da aplicação
```
npm run build
yarn build
```

Em seguida é so subir o container docker:

```
sudo docker compose up
```

Sem o docker:
```
npm i
npm run start
yarn start
```

### Testes
Foi realizado alguns testes unitários e de integração e para rodar basta executar o comando:
```
Rodar todos os testes:
npm run test
Rodar script de coverage:
npm run test:coverage
```


