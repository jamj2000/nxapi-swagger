# nxapi-mongodb
> Next API con MongoDB y Swagger para documentación

REST API muy básica con MongoDB para la persistencia de datos.

- Persistencia de datos en [MongoDB Atlas](https://www.mongodb.com/atlas/database). 
- Despliegue en [Vercel](https://nxapi-mongodb.vercel.app)


## Especificación OpenAPI

- La especificación de la API REST según OpenAPI 3.0 está disponible en **[public/swagger.json](public/swagger.json)**
- La página que muestra la documentación de la API está disponible en **[src/app/docs/page.js](src/app/docs/page.js)**

## Generar documentación de la API

Para generar la documentación he usado **[swagger](https://swagger.io/)** mediante el paquete `swagger-ui-react`. La forma más entendible y más simple, que requiere menos instalación de paquetes, es la que he encontrado en los siguientes recursos:

- [Vídeo](https://youtube.com/watch?v=YZ99SU0__jc)
- [Código fuente](https://github.com/developerarif55/next-js-swagger-doc)

