import dbConnect from '../../../lib/dbConnect'
const userController =  require('../../../controllers/userController');

export default async function handler (req, res) {
  const { method } = req

  await dbConnect();
  switch (method) {
    case 'GET':
      try {
        
        const users = await userController.getUser(req);
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const user = await userController.createUser(req.body)
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
        try {
          const user = await userController.deleteUser(req.body);
          res.status(201).json({ success: true, data: user })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break  
    default:
      res.status(400).json({ success: false })
      break
  }
}