
// server ko create krna

const express = require("express");
const post = require("./models/notes.model");
const multer = require("multer");
const uploadToImageKit = require("./services/storage.service");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());




const upload = multer({ storage : multer.memoryStorage() });     // using multer to read the data coming inside the form-data

// create post 
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

        res.status(201).json({ message : "post created successfully" , createdPost });
    }
    catch(error)
    {
        console.error('Upload failed:', error);
    }
});


// get all posts 

app.get("/get-post" , async(req , res) =>{

    try {
        const allPosts = await post.find();

        res.status(200).json(allPosts);

    } catch (error) {
        console.log("error is",error.messaage);
    }

});


module.exports = app;