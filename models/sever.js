const express = require('express');
const cors = require('cors');
require('dotenv').config();



class Server {

    constructor() {
        this.app = express();

        // PATHS
        this.port = process.env.PORT;
        this.userPath = '/api/users'
        //  Middleware
        this.middleware()
        // 

        this.routes()
    }
    
    middleware() {
        
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public'))
        
    }
    // Rutas de acceso
    routes(){

        this.app.use(this.userPath, require('../routes/users.routes'));

    }

    listen() {
        this.app.listen( this.port , ()=> {
            console.log('Runing in port: ' + process.env.PORT);
        })
    }
}


module.exports = Server;