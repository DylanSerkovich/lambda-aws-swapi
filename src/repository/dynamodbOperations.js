const AWS = require('aws-sdk');
const {v4} = require('uuid');

const dynamodb = new AWS.DynamoDB.DocumentClient();

const addItem = async (tableName, item) => {
    const id = v4();
    const newItem= {
        id,
        ...item
    }
    const params = {
        TableName: tableName,
        Item: newItem,
    };

    await dynamodb.put(params).promise();
};

const findAllItem = async (tableName) => {
    const items = await dynamodb.scan({ TableName: tableName }).promise();
    return items;
}

module.exports = {
    addItem,findAllItem,
}