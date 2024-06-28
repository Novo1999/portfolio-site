import mongoose from 'mongoose'

const viewCountSchema = new mongoose.Schema({
  viewCount: {
    type: Number,
    required: true,
    default: 0,
  },
})

export const ViewCountModel =
  mongoose.models.viewCount || mongoose.model('viewCount', viewCountSchema)
