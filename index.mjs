import {EventEmitter}from 'events';
const emiso = new EventEmitter();
emiso.on('saludo',(nombre)=>{
    console.log('!Hola , $(nombre)!');
});
emisor.emit('saludo','Mundo');