const { Schema, Types } = require('mongoose');
const { format_date } = require("../utils/helpers");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => format_date(timestamp)
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
);

// subdoc of Thought, so we don't create a model from reactionSchema; instead we export it to be used in Thought.js

module.exports = reactionSchema;