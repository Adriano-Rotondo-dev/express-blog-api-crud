const express = require("express");
const router = express.Router();
const posts = require("../data/posts");

//TODO: INDEX
router.get("/", (req, res) => {
  console.log(req.params);
  res.json(posts);
});

//TODO: SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  console.log(post)
  if (!post) {
    return res.status(404).json({
      error:"Not Found",
      message:"Post not found" 
    })
  }
  res.json(post)
});

//TODO: STORE
router.post("/", (req, res) => {
  const id = req.params.id;
  res.send(`Create a new post`);
});

//TODO: UPDATE
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Integral update of post with id: ${id}`);
});

//TODO: MODIFY
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Partial modify of post with id: ${id}`);
});

//TODO: DESTROY
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  console.log(post)
  if (!post) {
    return res.status(404).json({
      error:"Not Found",
      message:`Post withid ${id} not found`
    })
  }
  const postIndex = post.indexOf(posts)
  if (postIndex >-1) {
    post.splice(post, 1)
  }
  console.log(posts)
  res.sendStatus(204)
});

module.exports = router;
