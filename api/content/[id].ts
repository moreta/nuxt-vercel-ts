import { NowRequest, NowResponse } from '@vercel/node'
export default (req: NowRequest, res: NowResponse) => {
  const id = req.query.id
  res.json({ message: 'dynamic route', id })
}
