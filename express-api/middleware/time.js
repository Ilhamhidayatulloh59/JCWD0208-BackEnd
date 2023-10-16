module.exports = {
    getTime: (req, res, next) => {

        console.log("Time : ", Date.now())
        next()
    }
}