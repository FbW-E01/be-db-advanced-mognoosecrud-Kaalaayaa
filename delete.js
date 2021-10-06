import { connection } from "./connections.js"
import { disconnection }from "./connections.js"
import User from './user.js'

await connection()

try {
const userEmail = { email: "kalaya.chatelain@yahoo.fr" }
const options = { new: true, runValidators: true }
const deleted = await User.findOneAndDelete(userEmail, options)
console.log("Successfully deleted")
} catch (error) {
    console.log("Oh no, error during delation", error.message)
}

await disconnection()

