const request = require('supertest')
const app = require('../app')
const { sequelize, User } = require('../models')

describe("GET /api/users", () => {

    const users = [
        {
          firstName: "John", lastName: "Doe", email: "john@example.com",
        },
        {
          firstName: "Jane", lastName: "Smith", email: "jane@example.com",
        }
      ]

      beforeAll( async () => {
        await sequelize.sync()
      })

      beforeEach( async () => {
        await User.bulkCreate(users)
      })

      afterEach( async () => {
        await User.destroy({ where: {}})
      })

      afterAll( async () => {
        await sequelize.close()
      })

    it("Should return an array of users", async () => {
        const response = await request(app).get("/api/users")
        expect(response.status).toBe(200)
        expect(response.body).toMatchObject(users)
    })
})