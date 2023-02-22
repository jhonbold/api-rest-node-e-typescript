import express from 'express';

const server = express();

//metodos BD: Get (buscar registro), Post (adicionar registro), Put (Atualizar registro), Delete (apagar registro) 
server.get('/',(_, res) => {

    return res.send ('Olá, Dev! ');
});

export {server};

