# Atom Skills App

Atom Skills Application

## Запуск в Prod режиме
```bash
cp .env.example .env
docker-compose up -d --build
```

## Интерфейс
Откройте в браузере <http://localhost/>

## API
Swagger
<http://localhost:8081/docs>

openapi.json
<http://localhost:8081/openapi.json>


## Запуск в Dev режиме
```bash
cp .env.example .env
docker-compose -f docker-compose.dev.yml up --build
cd services/frontend
yarn dev
```

## Интерфейс
Откройте в браузере <http://localhost:9000/>

## Генерация Api Client

```bash
cd services/frontend
yarn gen:api
```
