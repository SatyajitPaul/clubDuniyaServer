import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
});
const io = new Server(httpServer, { 
    cors: {
        origin: "*",
      }
 });

var numberOfClients = 0;
io.on("connection", (socket) => {
    numberOfClients++;
    // console.log("a user connected"+socket.id);
    io.sockets.emit("numberOfClients", {numberOfClients: numberOfClients});
    socket.on("disconnect", () => {
        numberOfClients--;
        // console.log("user disconnected"+socket.id);
        io.sockets.emit("numberOfClients", {numberOfClients: numberOfClients});
    })
});
httpServer.listen(3000);