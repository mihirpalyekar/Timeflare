import dbConnect from '../../../lib/dbConnect'
const userController =  require('../../../controllers/userController');
export default async function handler (req, res) {
  const { method } = req

  await dbConnect();
  switch (method) {
    case 'POST':
      try {
        console.log("inside validate user")
       // const user = await userController.validateUser(req.body);
        res.status(200).json({ success: true, data: "user" })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    
    default:
      res.status(400).json({ success: false })
      break
  }
}