const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))

module.exports = {
    getAll: (req, res) => {
        let data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))
        const { category, startDate, endDate } = req.query

        if (category) {
            data = data.filter(item => item.category == category)
        }

        if (startDate && endDate) {
            data = data.filter(item => new Date(item.date).getTime() >= new Date(startDate).getTime() && new Date(item.date).getTime() <= new Date(endDate).getTime())
        }

        const total = data.reduce((a, b) => a + b.nominal, 0)
        res.status(200).send({ total , data })
    }
}