const posts = require("../data/posts");

function index(req, res) {
  let filteredPosts = posts;
  if (req.query.tags) {
    filteredPosts = posts.filter((post) => post.tags.includes(req.query.tags));
  }
  res.json(filteredPosts);
}

function show(req, res) {
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
}

function store(req, res) {
  //*Creiamo un nuovo oggetto post 
const newId = posts[posts.length -1].id+1
const newPost = {
  id: newId, 
  title: req.body.title,
  content:req.body.content,
  image: req.body.image,
  tags: req.body.tags  
}
posts.push(newPost)
  console.log(posts)
  res.status(201)
  res.json(newPost)
}

function update(req, res) {
  const id = req.params.id;
  res.send(`Integral update of post with id: ${id}`);
}

function modify(req, res) {
  const id = req.params.id;
  res.send(`Partial modify of post with id: ${id}`);
}

function destroy(req, res) {
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
}

module.exports = { index, show, store, update, modify, destroy };
