import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
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