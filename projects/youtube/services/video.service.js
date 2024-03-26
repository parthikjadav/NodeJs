const { videoSchema } = require("../models")


const addVideo = (body)=>{
 return videoSchema.create(body)
}

module.exports = {addVideo}