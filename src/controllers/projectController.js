const ProjectData = require('../models/Project_model').ProjectSchema;

exports.getProjects = async () => {
    try {
        const projects = await ProjectData.find();
        return projects;
    } catch (error) {
        throw error;
    }
};

exports.deleteProject = async (req) => {
    try {
        const project = await ProjectData.findOneAndDelete({ name: req.body.name });
        return project;
    } catch (error) {
        throw error;
    }
};

exports.createProject = async (req) => {
    try {
        const projectData = {
            name: req.body.name,
            description: req.body.description,
            owner: req.body.owner,
            users: req.body.users,
            logo: req.body.logo
        };
        const project = new ProjectData(projectData);
        await project.save();
        console.log('Project created - ' + JSON.stringify(project));
        return project;
    } catch (error) {
        throw error;
    }
};

exports.updateProject = async (req) => {
    try {
        const updatedProject = {
            name: req.body.name,
            description: req.body.description
        };
        const project = await ProjectData.findByIdAndUpdate(req.params.id, updatedProject, { new: true });
        console.log('Project updated - ' + JSON.stringify(project));
        return project;
    } catch (error) {
        throw error;
    }
};
