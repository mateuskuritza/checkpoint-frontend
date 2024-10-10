Instruções para rodar o projeto localmente.

Para acessar o projeto em produção:

[Frontend](https://checkpoint-frontend-one.vercel.app/)

[Backend](https://checkpoint-backend-production.up.railway.app/)

### Considerações iniciais

-   O sistema pode ser acessado com alguns códigos já criados, "_#1234567_" e "_#7654321_";
-   [Figma](https://www.figma.com/proto/4Ajs7agy7CbHov9WJGOete/Ilumeo---Teste-Fullstack---C%C3%B3pia-Kuritza?node-id=1-3&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1) utilizado durante o desenvolvimento;
-   Alguns pontos de melhorias/correções que observei enquanto desenvolvia:
    -   Utilizar no frontend alguma lib de fetch (como SWR e react-query);
    -   Refatorar a parte de http/..routes/controllers do backend, principalmente utilizando DTO's (com Zod ou Joi por ex.);
    -   Criar "mappers" para as conexões entre app (use-cases), http (rotas) e databases;
    -   Implementar novos testes para o use-case "GetEmployeeWorkhours" que cubram a parte do filtro de "today" e "history".

## Frontend

### Clone o projeto

```bash
git clone https://github.com/mateuskuritza/checkpoint-frontend
```

### Acesse a pasta do projeto

```bash
cd checkpoint-frontend
```

### Configure as variáveis de ambiente

```bash
cp ./.env.example ./.env.local
```

### Instale as dependencias e execute o projeto com

```bash
npm install

npm run dev
```

---

## Backend

### Clone o projeto

```bash
git clone https://github.com/mateuskuritza/checkpoint-backend
```

### Acesse a pasta do projeto

```bash
cd checkpoint-backend
```

### Configure as variáveis de ambiente

```bash
cp ./.env.example ./.env
```

### Instale as dependencias

```bash
npm install
```

### Configure o docker e banco de dados com os comandos

```bash
docker-compose up

npm run database:setup

npm run start:dev
```

### Execute o projeto com

```bash
npm run start:dev
```
