const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
// const { v4: uuidv4 } = require('uuid');

//create connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Inder@Mysql',
    database: 'college'
});

//Inserting new data

// let query = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = [
//     ["123", "123_username", "abc@gmail.com", "abc"],
//     ["456", "456_username", "def@gmail.com", "def"]
// ];

let getRandomUsers = () => {
    return[ //return an array as we need array
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(), 
        faker.internet.password(10)
    ];
}

let query = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];

//generating 100 fake users
for(let i = 1; i <= 100; i++){
    data.push(getRandomUsers());
}

connection.query(query, [data], (err, result) => {
    if(err) throw err;
    console.log(result);
});


 connection.end();