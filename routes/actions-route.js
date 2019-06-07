const router = require("express").Router();

const Actions = require("./actions-model");

router.get("/", async (req, res) => {
  try {
    const actions = await Actions.find();
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "canot find projects" });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const actions = await Actions.findById(req.params.id);
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot get the id"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const actions = await Actions.insert(req.body);
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot add a projects sorry"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const actions = await Actions.update(req.params.id, req.body);
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot edit this action"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const actions = await Actions.remove(req.params.id);
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot edit this action"
    });
  }
});



module.exports = router;
