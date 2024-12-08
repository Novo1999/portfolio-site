import { AuthModel } from '@/model/authModel'
import connectMongo from '@/utils/connectMongo'
import bcrypt from 'bcryptjs'

export const POST = async (req, res) => {
  const { email, password } = await req.json()

  await connectMongo()

  const found = await AuthModel.findOne({ 'user.email': email })

  if (!found)
    return Response.json({
      message: 'Not Found',
    })

  const matched = bcrypt.compareSync(password, found.user.password)

  if (!matched)
    return Response.json({
      message: 'Wrong Password',
      status: false,
    })

  return Response.json({
    status: true,
  })
}
