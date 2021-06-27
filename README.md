# API de Autenticação

Modelo de API para autenticação utilizando Passport.js

## Instalar dependências

```
npm install
```

## Configurando permissões

```
Para configurar o CLIENT_ID e CLIENT_SECRET,
vá ao arquivo .env e informe os valores conforme o exemplo
```

```
GITHUB_CLIENT_ID=32232
GITHUB_CLIENT_SECRET=3232
GITHUB_CLIENT_CALLBACK_URL=http://localhost:3000/auth/github/callback

GOOGLE_CLIENT_ID=323
GOOGLE_CLIENT_SECRET=3232fdfdf
GOOGLE_CLIENT_CALLBACK_URL=http://localhost:3000/auth/google/callback

```

## Run

```
npm run dev
```

### Para Customizaçẽoes

veja [Configuration Reference](http://www.passportjs.org/)
