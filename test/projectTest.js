const Project = require('../src/models/Project_model').ProjectSchema;
const assert = require('assert');
  //run this before asking it will make admin and drop ay existing data in the User collection
let project;
// this will run before running every test
beforeEach(() => {
    // Creating a new Instance of User Model
    var project1 = {
        "name": "Xanther",
        "description" : "Still working on its name",
        "owner": "aseem@vt.edu",
        "logo": "/assets/products/project-3.jpg",
        "users": ["aseem@vt.edu", "nikhilram@vt.edu"]
    }
    project = new Project(project1);
    project.save()
        .then(() => done());
});
  
describe('Reading Project from database', () => {
    it('Project Xanther found', (done) => {
        Project.findOne({ name: 'Xanther' })
            .then((user) => {
                assert(project.name === 'Xanther');
                done();
            });
    })
})