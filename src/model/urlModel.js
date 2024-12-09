import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
  resumeUrl: String
})

export const URLModel = mongoose.models.url || mongoose.model('url', urlSchema)
