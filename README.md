# Development

Pasos para levantar la app en desarollo:

1. Levantar la base de datos

```bash
docker-compose up -d
```

2. Renombrar el archivo `.env.template` a `.env`
3. Reemplazar las variables de entorno
4. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

# Prisma commands

```bash
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Prod

# Stage
