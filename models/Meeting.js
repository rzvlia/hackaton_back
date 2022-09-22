const {Schema, model} = require('mongoose');

const MeetingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    participants: [{
        type: String
    }],
    date: {
        type: Date
    }
});

const Meeting = model("Meeting", MeetingSchema);
module.exports = Meeting;