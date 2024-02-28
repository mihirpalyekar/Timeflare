import dbConnect from '../../../lib/dbConnect';
import projectController from '../../../controllers/projectController';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const projects = await projectController.getProjects();
        res.status(200).json({ success: true, data: projects });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'POST':
      try {
        const project = await projectController.createProject(req);
        res.status(201).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'DELETE':
      try {
        await projectController.deleteProject(req.body);
        res.status(204).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'PUT':
      try {
        const project = await projectController.updateProject(req.body);
        res.status(200).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
