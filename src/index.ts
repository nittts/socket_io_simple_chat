import { app, ioServer, server } from "./server";

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/src/views/chat.html");
});

ioServer.on("connection", (socket) => {
  socket.on("chat message", (msg: string) => {
    console.log(msg);
    ioServer.emit("chat message", msg);
  });
  console.log("A user connected");
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
