
// server ko create krna

const express = require("express");
const post = require("./models/notes.model");
const multer = require("multer");
const uploadToImageKit = require("./services/storage.service");


const app = express();
app.use(express.json());


// create post 

const upload = multer({ storage : multer.memoryStorage() });     // using multer to read the data coming inside the form-data

app.post("/create-post" , upload.single("image") , async(req , res) =>{

    console.log(req.body); 
    console.log(req.file);   // will contain the uploaded image

    try 
    {
        const result = await uploadToImageKit(req.file.buffer , req.file.originalname);
        console.log(result);
        const createdPost = await post.create({
            image : result.url,
            caption : req.body.caption
        });

        res.status(201).json({ messaage : "post created successfully" , createdPost });
    }
    catch(error)
    {
        console.error('Upload failed:', error);
    }
});

module.exports = app;