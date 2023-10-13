const data = [
    { id: 1, username: 'User 1', password: "Asd" },
    { id: 2, username: 'User 2', password: "Asd" },
    { id: 3, username: 'User 3', password: "Asd" },
]

module.exports = {
    getAll: (req, res) => {
        res.status(200).send(data)
    },
    getById: (req, res) => {
        const result = data.filter(item => item.id == req.params.id)
        if (result.length == 1) {
            res.status(200).send(result)
        } else {
            res.status(400).send({ message: 'User not found' })
        }
    },
    register: (req, res) => {
        const id = Math.max(...data.map(item => item.id)) + 1
        req.body.id = id
        data.push(req.body)
        res.status(200).send("Register success")
    },
    deleteById: (req, res) => {
        const idx = data.findIndex(item => item.id == req.params.id)
        if (idx >= 0) {
            data.splice(idx, 1)
            res.status(200).send(data)
        } else {
            res.status(400).send({ message: 'User not found' })
        }
    },
    editById: (req, res) => {
        const id = +req.params.id;
        const updateData = req.body;
        const userIndex = data.findIndex(user => user.id === id);

        if (userIndex !== -1) {
            data[userIndex] = { ...data[userIndex], ...updateData };
            res.status(200).send(data[userIndex]);
        } else {
            res.status(400).send({ message: 'User not found' });
        }
    }
}