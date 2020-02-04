const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const cadSchema = new mongoose.Schema({
    termNumber: {
        type: Number,
        required: true,
    },
    pageNumber: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
    },
});

cadSchema.plugin(mongoosePaginate);

mongoose.model('cadastro', cadSchema);