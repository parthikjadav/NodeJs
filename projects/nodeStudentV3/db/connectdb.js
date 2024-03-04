const mongoose = require('mongoose');

const connection = ()=>{
    const url = process.env.URL
    mongoose.connect(url).then(()=>{
        console.log('db connection success')
    }).catch((eror)=>{
        console.log(eror);
    })
}

module.exports=connection