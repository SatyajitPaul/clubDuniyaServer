import { Server } from "socket.io";


const io = new Server({ 
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
io.listen(3000);