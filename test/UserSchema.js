var User = require('../src/models/User_model').UserSchema;
const assert = require('assert');
  //run this before asking it will make admin and drop ay existing data in the User collection
let user;
// this will run before running every test
beforeEach(() => {
    // Creating a new Instance of User Model
    console.log("there there")
    var use = {"_id" : "643c5e2d87c1ddc432e81b79",
							"name" : "Jack",
							"email" : "admin@truecollab.com",
							"password" : "admin123",
							"level" : 0,
							"lock" : false,
							"avatar" : "",
                            "projects": [

							]}
    user = new User(use);
    user.save()
        .then(() => done());
});
  
describe('Reading Details of User', () => {
    it('Finds user with the name', (done) => {
        User.findOne({ name: 'Jack' })
            .then((user) => {
                assert(user.name === 'Jack');
                done();
            });
    })
})