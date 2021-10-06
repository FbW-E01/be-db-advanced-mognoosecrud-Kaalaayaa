import { connection, disconnection } from "./connections.js"
import User from "./user.js"
import faker from 'faker'

await connection()

for (let i = 0; i < 3 ; i++) {
    await User.create({
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: faker.random.arrayElement(["Admin", "User", "Editor"])
    })  
}


await disconnection()