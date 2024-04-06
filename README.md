# Development

Pasos para levantar la app en desarollo:

1. Levantar la base de datos

```bash
docker-compose up -d
```

2. Renombrar el archivo `.env.template` a `.env`
3. Reemplazar las variables de entorno
4. Ejecutar el comando `npm install` para instalar las dependencias
5. Ejecutar el comando `npm run dev` para levantar el servidor en modo desarrollo
6. Ejecutar el comando `npx prisma migrate dev` para crear la base de datos
7. Ejecutar el comando `npx prisma generate` para generar los modelos (client)
8. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

# Prisma commands

```bash
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Prod

# Stage
