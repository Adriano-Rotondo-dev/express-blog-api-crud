const express = require("express");
const posts = require("../data/posts");
const router = express.Router();

//TODO: INDEX
//TODO BONUS - implementa un filtro di ricerca nell'index che mostri solo i post con un determinato tag
router.get("/", (req, res) => {
  //*creo una costante per il filtro

  //*creo le condizioni del filtro

  //* se la richiesta contiene un filtro, filtro il mio array


  //* salvo il risultato nella variabile 
  console.log(req.params);
  res.json(posts);
});

//TODO: SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  console.log(post);
  if (!post) {
    return res.status(404).json({
      error: "Not Found",
      message: "Post not found",
    });
  }
  res.json(post);
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
  const post = posts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).json({
      error: "Not Found",
      message: `Post with id ${id} not found`,
    });
  }
  const postIndex = posts.indexOf(post);
  if (postIndex > -1) {
    posts.splice(postIndex, 1);
  }
  console.log(posts);
  res.sendStatus(204);
});

module.exports = router;
