import mongoose from 'mongoose'

const authSchema = new mongoose.Schema({
  user: {
    type: {
      email: String,
      password: String,
    },
  },
})

export const AuthModel = mongoose.models.users || mongoose.model('users', authSchema)
