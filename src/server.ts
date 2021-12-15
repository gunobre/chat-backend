import { Server } from "socket.io";
import { info } from "./log";

const io = new Server({ cors: { origin: "*" } });

io.on("connection", (socket) => {
  info("Conected id ->", socket.id)
});

export default io;
