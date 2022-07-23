const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")

run()
async function run(){
    const newUser = await User.create({ name: "Sohail", age: 35 })
    const user = new User({ name: "Owais", age: 26 })
    await user.save()
    console.log(user)
    user.name = "Khan"
    await user.save()
    console.log(user)
}