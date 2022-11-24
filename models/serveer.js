const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usersPath = '/api/user'

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    middlewares() {
        // Cors
        this.app.use( cors() );
        // Lectura y parceo del body
        this.app.use( express.json() );
        // Directorio publico
        this.app.use( express.static( 'public' ) );
    }

    routes() {
        this.app.use( this.usersPath, require('../routes/user') );
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

module.exports = Server;

/*
    # Asignar código de petición.
        En le Drive tenog un archivo donde están todos los códigos de peticiónes y errores.
        Este estado eno es obligatorio pero si es recomendado.

            res.status(201)...

    # Cors
        Nos premite proteger nuestro servidor.

    # Recivir información po rutas
        Se debe utilizar e lmidelware express.json() y se extrae de la siguiente manera: 

            const { name, age } = req.body;

        
*/