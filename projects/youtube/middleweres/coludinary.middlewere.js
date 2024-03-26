const fs = require('fs');
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "domvdald9",
  api_key: "849725769516415",
  api_secret: "YkexPg7qaNp6Jr31EmbW8XhVNXw",
});

const uploadToCloudinary = async (url) => {
  let res = await cloudinary.uploader.upload(
    url,
    (error, result) => {
      // fs.unlinkSync(url);
      return result.url;
    }
  );
  return res.url;
};

const uploadVideoToCloudinary = async (url) => {
  let res = await cloudinary.uploader.upload(
    url,
    {
      resource_type: "video",
      public_id: "myfolder/mysubfolder/dog_closeup",
      eager: [
        { width: 300, height: 300, crop: "pad", audio_codec: "none" },
        { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" }],
      eager_async: true,
      eager_notification_url: "https://mysite.example.com/notify_endpoint"
    },
    (error, result) => {
      // fs.unlinkSync(url);
      return result.url;
    }
  );
  return res.url;
};

module.exports = { uploadToCloudinary, uploadVideoToCloudinary };
