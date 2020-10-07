const mongoose = require("mongoose");

const AnswerSchema = mongoose.Schema(
  {
    ques_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    a_body: {
      type: String,
      required: true,
    },
    writer_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Answer", AnswerSchema);
