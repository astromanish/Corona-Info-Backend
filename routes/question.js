const express = require("express");
const Question = require("./../models/Question");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const question = new Question({
    q_body: req.body.q_body,
    writer_name: req.body.writer_name,
  });
  try {
    const savedQuestion = await question.save();
    res.json(savedQuestion);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:ques_id", async (req, res) => {
  try {
    const updatedQues = await Question.updateOne(
      {
        _id: req.params.ques_id,
      },
      { $set: { q_body: req.body.q_body } }
    );
    res.json(updatedQues);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:ques_id", async (req, res) => {
  try {
    const deletedQues = await Question.remove({ _id: req.params.ques_id });
    res.json(deletedQues);
  } catch (err) { }
});
module.exports = router;
