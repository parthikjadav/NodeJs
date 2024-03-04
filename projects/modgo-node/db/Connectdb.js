const mongoose = require("mongoose");
const Connectdb=()=>[
    mongoose.connect("mongodb://127.0.0.1:27017/student").then(()=>{
        console.log('db connected')
    }).catch((error)=>{
        console.log(error);
    })
]

module.exports=Connectdb