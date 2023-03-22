const { Schema, model } = require('mongoose');
const { format_date } = require("../utils/helpers");
reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => format_date(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: TextTrackCue
        },
        id: false
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;