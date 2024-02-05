<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node HTTP API on AWS

node v20.9.0

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

## :hammer:Funciones del Proyecto

- `Función 1`: Consume SWAPI para el consumo del modelo 'vehicles' y transforma los nombres de los campos al español.
- `Función 2`: Agrega un objeto "droide" a la base de datos DynamoDB en AWS

## Funcionamiento de los Endpoints

> [!NOTE]
> Usar Postman o similar

### Endpoint 1: `/vehiculo/{id}` - Obtener un Registro de Vehículo

#### Metodo: `GET`

#### `id`: Identificador del registro de vehículo.

#### Ejemplo de Uso

```bash
curl -X GET https://t02fiz6qw6.execute-api.us-east-1.amazonaws.com/vehiculo/4
```

### Endpoint 2: `/droide` - Guardar un registro del objeto droide

#### Metodo: `POST`

#### Ejemplo de Uso

```bash
curl -X POST https://t02fiz6qw6.execute-api.us-east-1.amazonaws.com/droide
```

#### Parametros

```bash
{
    "nombre": "R2-D2",
    "modelo": "Astromecánico",
    "fabricante": "Industrial Automaton",
    "year_fabricacion": 1977,
    "funcionalidad": ["Navegación", "Reparación", "Comunicación"],
    "propietario": "Luke Skywalker",
    "estado": "Activo"
}
```

### Endpoint 3: `/droides` - Listar los Items de Droides

#### Metodo: `GET`

#### Ejemplo de Uso

```bash
curl -X GET https://t02fiz6qw6.execute-api.us-east-1.amazonaws.com/droides
```

#### Ejemplo de respuesta

```bash
{
    "status": 200,
    "body": {
        "droidesItems": [
            {
                "nombre": "R2-D2",
                "funcionalidad": [
                    "Navegación",
                    "Reparación",
                    "Comunicación"
                ],
                "modelo": "Astromecánico",
                "propietario": "Luke Skywalker",
                "fabricante": "Industrial Automaton",
                "fecha_registro": "2024-02-05 04:03:39",
                "year_fabricacion": 1977,
                "id": "77fd2146-27b9-4a9a-85d1-9571c75a8604",
                "estado": "Activo"
            }
        ]
    }
}
```

## Uso de la documentación Swagger

### Clonar Proyecto

```
$ npm install
```

```
$ node swagger.js
```

#### abrir: `localhost:3000`

### Utilizar Poryecto

1. Configurar el usuario IAM con credenciales en AWS
2. Instalar CLI de AWS e ingresar las credenciales
3. En caso de utilizar DynamoDB cambiar el parametro `Resource`(ARN) en el archivo serverless.yml

```
provider:
  name: aws
  runtime: nodejs18.x
  iamRoleStatements:
    - Effect: Allow
      Action:
        - dynamodb:PutItem
        - dynamodb:GetItem
      Resource:
        - (ARN)
```

4. Por ultimo despliega

```
$ serverless deploy
```
