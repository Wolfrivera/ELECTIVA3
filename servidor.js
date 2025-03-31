const net = require('net');

const server = net.createServer(socket => {
socket.on('data', data => {
    const request = data.toString();
    const lines = request.split('\r\n');
    const requestLine = lines[0];
    const requestParts = requestLine.split(' ');

    if (requestParts.length >= 2) {
    const method = requestParts[0];
    const url = requestParts[1];

      // Validar el método HTTP
    if (['GET', 'POST', 'PUT', 'DELETE'].includes(method)) {
        console.log(`Método: ${method}, URL: ${url}`);

        // Extraer el cuerpo de la petición (asumiendo que es JSON)
        try {
        const body = JSON.parse(lines[lines.length - 1]);
        console.log('Cuerpo:', body);
        } catch (error) { console.log('No se pudo analizar el cuerpo JSON o no existe.');
        }

        // Enviar una respuesta
        socket.write('HTTP/1.1 200 OK\r\nContent-Type: application/json\r\n\r\n{"message": "Petición recibida"}');
    } else {
        socket.write('HTTP/1.1 400 Bad Request\r\n\r\nMétodo no soportado');
    }
    } else {
    socket.write('HTTP/1.1 400 Bad Request\r\n\r\nSolicitud inválida');
    }

    socket.end();
});

socket.on('error', err => {
    console.error('Error del socket:', err);
});
});

const PORT = 3000;
server.listen(PORT, () => {
console.log(`Servidor escuchando en el puerto ${PORT}`);
});