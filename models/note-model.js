const { default: mongoose } = require("mongoose");

const noteSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    userId: {
        type: Number,
        required: true,
    },
    title: {
        type: Boolean,
        required: true,
    },
    content: {
        type: String,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }
});
module.exports = mongoose.model('Note', noteSchema);