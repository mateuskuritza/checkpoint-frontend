Instruções para rodar o projeto localmente.

---

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

npx prisma generate

npx prisma db push

npm run start:dev
```

### Execute o projeto com

```bash
npm run start:dev
```
