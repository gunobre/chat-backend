import { log } from "./log";
import io from "./server";

io.listen(4000)
log("🔥 Running in http://localhost:4000")