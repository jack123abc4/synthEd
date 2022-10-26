const { Schema, model } = require('mongoose');


const trackSchema = new Schema(
  {
    // _id: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId(),
    // },
    name: {
      type: String,
    },
    type: {
        type: String,
        default: "piano"
    },
    bpm: {
      type: Number,
      required: true,
      default: 120
    },
    length: {
      type: Number,
      required: true,
      default: 16,
    },
    notes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Note'
      }
    ]
  }
);

const Track = model("Track", trackSchema);

module.exports = Track;
