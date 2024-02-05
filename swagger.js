const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();

// Cargar el archivo OpenAPI (ejemplo con formato YAML)
const openApiDocument = YAML.load('./src/swagger/openapi.yaml');

// Configurar Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

// Opcional: Redirigir la raíz a la documentación Swagger
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// Configurar puerto y servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});