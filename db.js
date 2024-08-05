const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("Conectado com sucesso!")
    } catch (error) {
        console.error(err)
    }
}

module.exports = connectDB