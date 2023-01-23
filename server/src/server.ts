import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors, {
  origin: '*',

})
app.register(appRoutes)

const port = 3000

app.listen({
  port: port,
  host: '192.168.68.107'
}).then(() => {
  console.log(`HTTP server runing on port ${port}`)
})
