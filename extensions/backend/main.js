const { createServer } = require('http');
const { Server } = require('socket.io');

const server = createServer();
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('A client connected:', socket.id);
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});