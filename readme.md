# Rest Api 

## Models
aqui estan las clases de la api
- server es la unica por ahora:

### Server
#### Contructor
- se crea app = express()
- se crea la constante puerto
- se llama a los middlewares;
- se llama a las rutas de acceso

#### Middlewares
- cors
- express.json
- la carpeta public

#### Routes
- usuarios

#### Listen
- Funcion para iniciar el servidor.
Tener en cuenta que hay que definir el puerto como variable de entorno.

## Routes
aqui estan todas las rutas de acceso
- por ahora solo esta la ruta de acceso de usuarios como ejemplo.

## Controllers
aqui estan los controladores
-  user controlers contiene la funcionalidad de cada metodo corresponiente a las rutas de users

## APP
inicializacion del server