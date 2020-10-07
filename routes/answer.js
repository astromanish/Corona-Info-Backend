const express = require("express");
const Answer = require("./../models/Answer");
const router = express.Router();

router.get("/:ques_id", async (req, res) => {
  try {
    const answers = await Answer.find({ ques_id: req.params.ques_id });
    res.json(answers);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/:ques_id", async (req, res) => {
  const answer = new Answer({
    a_body: req.body.a_body,
    writer_name: req.body.writer_name,
    ques_id: req.params.ques_id,
  });

  try {
    const savedAns = await answer.save();
    res.json(savedAns);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:ques_id/:ans_id", async (req, res) => {
  try {
    const updatedAns = await Answer.updateOne(
      {
        ques_id: req.params.ques_id,
        _id: req.params.ans_id,
      },
      { $set: { a_body: req.body.a_body } }
    );
    res.json(updatedAns);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:ques_id/:ans_id", async (req, res) => {
  try {
    const deletedAns = await Answer.remove({
      ques_id: req.params.ques_id,
      _id: req.params.ans_id,
    });
    res.json(deletedAns);
  } catch (err) { }
});
module.exports = router;
