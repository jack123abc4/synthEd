const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
  {
    // _id: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId(),
    // },
    freq: {
      type: Number,
      required: true,
      default: 261.63
    },
    type: {
        type: String,
        required: true,
        default: "sine",
    },
    name: {
      type: String,
      default: "C4"
    },
    gain: {
        type: Number,
        required: true,
        default: 0.3
    },
    decay: {
        type: Number,
        required: true,
        default: 5,
    },
    position: {
      type: Number,
      required: true,
      default: 0
    },
    length: {
        type: Number,
        required: true,
        default: 1
    },
    
    track: {
      type: Schema.Types.ObjectId,
      ref: "Track",
    },
  }
);

const Note = model('Note', noteSchema);

module.exports = Note;
