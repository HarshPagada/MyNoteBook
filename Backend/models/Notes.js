const mongoose = require('mongoose')
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required : true
    },
    description:{
        type: String,
    },
    tag:{
        type: String,
        default: 'personal',
    },
    date:{
        type:Date,
        default: Date.now
    },
  });

module.exports = mongoose.model('Notes', NotesSchema)