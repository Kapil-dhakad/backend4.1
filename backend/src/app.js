const express = require('express');
const multer = require('multer')
const uploadFile = require('./services/storage.services')
const postModel = require('./models/post.model')
const cors = require('cors')
const path = require('path')


const upload = multer({ storage: multer.memoryStorage() })

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static('public'))

app.post('/api/posts', upload.single('img'), async (req, res) => {
    const caption = req.body.caption
    const file = req.file.buffer

    const result = await uploadFile(file, "test")

    //  console.log(result)

    const post = await postModel.create({
        caption: caption,
        url: result.url


    })
    console.log(post);

    res.json({
        message: "post created succesfully",
        post
    })



})
app.get('/api/posts', async (req, res) => {
    console.log("frontend get");

    const post = await postModel.find();

    res.json({
        message: "post read successfully",
        post
    })


})
app.get("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public/index.html"))
})



module.exports = app;