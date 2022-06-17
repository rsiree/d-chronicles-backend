const express = require('express')

const News = require('../models/News')

const router = express.Router();

router.post("/", async (req, res) => {
    // console.log("hi");
    try {
      console.log(req.body);
      const news = await News.create(req.body);
      console.log("hi")
      return res.send(news);
    } catch (error) {
      return res.send(500).send({ message: error.message });
    }
  });

//   route for all news
router.get('/', async (req, res) => {
    try
    {
        const news = await News.find({}).lean().exec();
        console.log(news)
    return res.send(news)
    }
    catch(err){
        console.log(err);
        return res.send(err);
    }
});

// route for single news
router.get("/id/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const data = await News.findById(req.params.id).lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

// route for category wise
router.get('/:category', async (req, res) => {
    try {
        var category = req.query.category;
        const data = await News.find().sort(category).lean().exec();
        return res.send(data);
    }
    catch(err){
        return res.send(err);
    }
});


module.exports = router;