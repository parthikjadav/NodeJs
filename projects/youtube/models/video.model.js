const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoURL: {
    type: String,
    required: true,
  },
  videoThumbnail: {
    type: String,
    required: true,
  },
  videoDuration: {
    type: String,
    required: true,
  },
  videoViews: {
    type: Number,
  },
  videoLikes: {
    type: Number,
  },
  isPublished: {
    type: Boolean,
    required: true,
    default: true
  },
  videoDate: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userSchema',
    required: true,
  }
})

const video = mongoose.model('videoSchema', videoSchema);

module.exports = video;