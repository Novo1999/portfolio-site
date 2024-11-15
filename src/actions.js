'use server'

import connectMongo from './utils/connectMongo.js'
import { ViewCountModel } from './utils/viewCountModel.js'

export const incrementViewCount = async () => {
  try {
    await connectMongo()
    const data = await ViewCountModel.findByIdAndUpdate(
      process.env.DB_ID,
      { $inc: { viewCount: 1 } },
      { new: true }
    )
    return data
  } catch (error) {
    return error
  }
}


export const getViewCount = async () => {
  try {
    await connectMongo()
    const data = await ViewCountModel.findById(process.env.DB_ID).select("viewCount -_id")
    return data
  } catch(error) {
    return error
  }
}