const { userSchema } = require("../models")

const addUser = (body) => {
    return userSchema.create(body)
}
module.exports = {addUser}