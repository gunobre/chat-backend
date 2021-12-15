import { Server } from "socket.io";
import { messages } from "./db";
import { info } from "./log";
import { IMessage } from "./Message";

const io = new Server({ cors: { origin: "*" } });

io.on("connection", (socket) => {
  // Init
  info("Conected id ->", socket.id);

  // Get all messages
  socket.on("init", () => {
    socket.emit("init", messages);
  });

  // Recive message
  socket.on("message", (msg: IMessage) => {
    // Save
    messages.push(msg);

    // Send to everyone
    socket.broadcast.emit("msg", msg);
  });
});

export default io;
