const app = require("../server");
const supertest = require("supertest");
let booking = {
    name: "Dung Nguyen",
    phone: "3333333333",
    email: "dung34nguyen@gmail.com"
}
describe('Post Endpoints', () => {
    it('should create a new post', async () => {
      const res = supertest(app)
        .post('/api/user/reserve')
        .send({
           booking,
           date: '2022-11-26T11:00:00.000Z',
           table: '6386a477998fbf2ff723e947'
        })
        .end(done);
      expect(200)
      
    }
    )
  });
