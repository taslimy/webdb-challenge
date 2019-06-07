const router = require("express").Router();

const Projects = require("./projects-model");
const Actions = require("./actions-model");

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.find();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "canot find projects" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const projects = await Projects.findById(req.params.id);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot get the id"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const projects = await Projects.insert(req.body);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot add a projects sorry"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    constprojectss = await Projects.update(req.params.id, req.body);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot edit this action"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const projects = await Projects.remove(req.params.id);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot edit this action"
    });
  }
});

module.exports = router;
