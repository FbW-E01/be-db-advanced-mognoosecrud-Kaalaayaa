import { connection, disconnection } from "./connections.js"
import User from "./user.js"


await connection()

try {
const userEmail = { email: "Xander_Goodwin24@yahoo.com" }
const update = { email: "kalaya.chatelain@yahoo.fr" }
const options = { new: true, runValidators: true }
const updated = await User.findOneAndUpdate(userEmail, update, options)
console.log(updated)
} catch (error) {
    console.log("Oh no, error during update", error.message)
}

await disconnection()