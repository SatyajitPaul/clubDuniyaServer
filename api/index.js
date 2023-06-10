// import { createServer } from "http";
// import { Server } from "socket.io";

// const httpServer = createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World!");
// });
// const io = new Server(httpServer, { 
//     cors: {
//         origin: "*",
//       }
//  });

// var numberOfClients = 0;
// io.on("connection", (socket) => {
//     numberOfClients++;
//     // console.log("a user connected"+socket.id);
//     io.sockets.emit("numberOfClients", {numberOfClients: numberOfClients});
//     socket.on("disconnect", () => {
//         numberOfClients--;
//         // console.log("user disconnected"+socket.id);
//         io.sockets.emit("numberOfClients", {numberOfClients: numberOfClients});
//     })
// });
// httpServer.listen(3000);

import express from 'express'
const app = express();


app.get('/api', (req, res) => {
  const path = `/api/item`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

export default app