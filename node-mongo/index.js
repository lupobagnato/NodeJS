const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://menhir:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client)=>{
    assert.equal(err,null);
    console.log('Connected correctly to server');

    client.close();
});