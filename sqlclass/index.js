const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'mysql123'
});


function connectionToSql(){
    
};

function showTable (){
    try{
        connection.query(
            "SHOW TABLES",
            (err,result,field) =>{
                if(err) throw err;
                console.log("****************");
                console.log("Printing showTable result: ");
                console.log(result);
                console.log(field);
            }
        )
        // connection.end();
    }catch(err){
        console.log(err);
    }

};

function showUserTable (){
    try{
        connection.query(
            "SELECT * FROM user",
            (err,result,field) =>{
                if(err) throw err;
                console.log("****************");
                console.log("Printing showUserTable results:");
                console.log(result);
                // console.log(field);
            }
        )
        // connection.end();
    }catch(err){
        console.log(err);
    }

};

let getRandomUserObj = () =>{
    return {
        id:                faker.string.uuid(),
        username:    faker.internet.userName(),
        email:          faker.internet.email(),
        password:    faker.internet.password()
    };
};

function printUser(user){
    try{
        console.log();
        console.log(user());
        console.log();
        console.log(user());
        console.log();
        console.log(user());
    }catch(err){
        console.log(err);
    }
};

let getRandomUserArr = () =>{
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
}

// printUser(getRandomUserArr);
// printUser(getRandomUserObj);



function insertUser(){
    let query = 'INSERT INTO user (id, username, email, password) VALUES ?';
    let data = [
        getRandomUserArr(),
        getRandomUserArr(),
        getRandomUserArr()
    ];
    connection.query(query, [data],(error, result)=>{
        if(error) throw error;
        console.log("****************");
        console.log("Printing insertUser function result: ");
        console.log(result);
    })
    
}

connectionToSql();
showTable();
showUserTable();
insertUser();
showUserTable();

connection.end();