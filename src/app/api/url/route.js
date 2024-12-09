import { URLModel } from '@/model/urlModel.js'
import connectMongo from '@/utils/connectMongo'

export const POST = async (req, res) => {
  const { url } = await req.json()

  await connectMongo()

  const data = await URLModel.findByIdAndUpdate(process.env.DB_RESUME_ID, { resumeUrl: url })

  console.log(data)

  return Response.json(data)
}
