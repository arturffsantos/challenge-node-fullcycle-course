const express = require('express');
const app = express();
const port = 3000;

const mysql = require('promise-mysql');
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'challenge'
};

app.get('/', async (req, res) => {
    let connection = null;
    try{
        connection = await mysql.createConnection(config);
        const sql = 'SELECT name FROM people';
        const names = await connection.query(sql);
        
        res.write('<h1>Full Cycle Rocks!</h1>');
        res.write('<br/><br/><ul>');
        names.forEach(item => res.write(`<li>${item.name}</li>`));
        res.write('</ul>');

        res.end();
    }catch(e){
        res.send(`ocorreu um erro: ${e}`);
    }finally{
        if(connection) {
            connection.end();
        }
    }
});

app.post('/:name', async (req, res) => {
    let connection = null;
    try{
        const {name} = req.params;
        connection = await mysql.createConnection(config);
        const sql = `INSERT INTO people(name) VALUES('${name}')`;
        await connection.query(sql);
        res.send('adicionado');
    }catch(e){
        res.send(`ocorreu um erro: ${e}`);
    }finally{
        if(connection) {
            connection.end();
        }
    }
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})