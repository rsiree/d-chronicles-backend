const mongoose = require('mongoose')

module.exports = () => {
    return mongoose.connect('mongodb+srv://siree:d-c123@cluster0.yvisljf.mongodb.net/?retryWrites=true&w=majority')
}

// mongodb+srv://siree:d-c123@cluster0.yvisljf.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://siree:*****@cluster0.yvisljf.mongodb.net/test?