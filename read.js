import { connection, disconnection } from "./connections.js"
import User from "./user.js"


await connection()

const allUser = await User.find({})
console.log(allUser)

await disconnection()