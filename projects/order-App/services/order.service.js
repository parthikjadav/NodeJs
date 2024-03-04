const { orderSchema } = require("../models")

const addOrder = (order)=>{
    return orderSchema.create(order)
}

module.exports = {
    addOrder
}