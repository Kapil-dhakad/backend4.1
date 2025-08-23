const express = require('express');
const multer = require('multer')
const uploadFile = require('./services/storage.services')
const postModel = require('./models/post.model')
const cors = require('cors')


const upload = multer({storage: multer.memoryStorage()})

const app = express()
app.use(cors())

app.use(express.json())

app.post('/posts', upload.single('img'),async(req, res)=> {
     const caption = req.body.caption
     const file = req.file.buffer

     const result = await uploadFile(file, "test")

    //  console.log(result)
    
     const post =  await postModel.create({
        caption: caption,
        url: result.url
        
        
    })
    res.json({
        message : "post created succesfully",
        post
    })



})

app.get('/posts', async(req, res)=> {
    const post = await postModel.find();
    
    res.json({
        message: "post read successfully",
        post
    })
    
    
})

module.exports = app;