Instruções para rodar o projeto localmente.

Para acessar o projeto em produção:

[Frontend](https://checkpoint-frontend-one.vercel.app/)

[Backend](https://checkpoint-backend-production.up.railway.app/)

**OBS**: O sistema pode ser acessado com alguns códigos já criados, "_#1234567_" e "_#7654321_"

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
