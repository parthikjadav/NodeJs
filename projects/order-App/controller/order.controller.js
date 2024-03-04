const { orderService } = require("../services")

const addOrder =async(req,res)=>{
   
    let order = await orderService.addOrder(req.body)

    console.log(order);

    res.status(200).json({success:true,order})
}

module.exports={addOrder}