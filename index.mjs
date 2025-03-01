import {EventEmitter}from 'events';
const emisor = new EventEmitter();
emisor.on('saludo',(nombre)=>{
    console.log('!hola,${nombre}!');
})
emisor.emit('saludo','Mundo');