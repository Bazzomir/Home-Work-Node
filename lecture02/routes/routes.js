const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router
    .get("/posts", async (req, res) => {
        try {
            const posts = await Post.find();
            res.send(posts);
        } catch {
            res.status(404);
            res.send({ error: "Post doesn't exist!" });
        }
    })

    .get("/posts/:id", async (req, res) => {
        try {
            const post = await Post.findOne({ _id: req.params.id });
            res.send(post);
        } catch {
            res.status(404);
            res.send({ error: "Post doesn't exist!" });
        }

    })

    .post("/posts", async (req, res) => {
        const post = new Post({
            title: req.body.title,
            content: req.body.content
        })
        await post.save(); res.send(post);
    })

    .patch("/posts/:id", async (req, res) => {
        try {
            const post = await Post.findOne({ _id: req.params.id });

            if (req.body.title) {
                post.title = req.body.title
            }
            if (req.body.content) {
                post.content = req.body.content
            }

            await post.save();
            res.send(post);
        } catch {
            res.status(404);
            res.send({ error: "Post doesn't exist!" });
        }
    })

    .delete("/posts/:id", async (req, res) => {
        try {
            await Post.deleteOne({ _id: req.params.id });
            res.status(204).send();
        } catch {
            res.status(404);
            res.send({ error: "Post doesn't exist!" });
        }
    })


module.exports = router