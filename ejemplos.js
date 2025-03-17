const fs = require('fs');

// Especifica la ruta al archivo que quieres leer
const rutaArchivo = './Hola.txt';

// Lee el archivo de manera asíncrona
fs.readFile(rutaArchivo, 'utf8', (err, datos) => {
if (err) {
    console.error(`Error al leer el archivo ${rutaArchivo}:`, err);
    return;
}
console.log(`Contenido del archivo ${rutaArchivo}:`);
console.log(datos);
});