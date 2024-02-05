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

### Endpoint 1: `/vehiculo/{id}` - Obtener un Registro de Vehículo

#### Metodo: `GET`

#### `id`: Identificador del registro de vehículo.

#### Ejemplo de Uso

```bash
curl -X GET https://tu-api.com/vehiculo/4
```

### Endpoint 2: `/droide` - Guardar un registro del objeto droide

#### Metodo: `POST`

#### Parametros

```bash
{
    "nombre": "",
    "modelo": "",
    "fabricante": "",
    "year_fabricacion": 0,
    "funcionalidad": [""],
    "propietario": "",
    "estado": ""
}
```

#### Ejemplo de Uso

```bash
curl -X POST https://tu-api.com/droide
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
