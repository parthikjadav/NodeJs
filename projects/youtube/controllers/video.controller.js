const { uploadToCloudinary, uploadVideoToCloudinary } = require("../middleweres/coludinary.middlewere");
const { videoService } = require("../services");

const addVideo = async (req, res) => {
    try {

        let { title, description, videoDuration, isPublished, owner } = req.body
        const videoMulterUrl = req.files.videoURL[0].path
        const video_Cloudinary_URL = await uploadVideoToCloudinary(videoMulterUrl)
        const videoThumbnail_Cloudinary_URL = await uploadToCloudinary(req.files.videoThumbnail[0].path)

        let videoData = { title, description, "videoThumbnail": videoThumbnail_Cloudinary_URL, "videoURL": video_Cloudinary_URL, videoDuration, isPublished, owner }

        let video = await videoService.addVideo(videoData)
        res.status(200).json(video)
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const getVideo = async (req, res) => {
    try {
        const video = await videoSchema.find().populate("owner")
        res.status(200).json(video)
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}


module.exports = { addVideo, getVideo };