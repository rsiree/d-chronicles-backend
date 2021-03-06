const express = require('express');
const cors = require('cors')
const connect = require('./configs/db')

const app = express();

app.use(express.json());
app.use(cors());

const newsController = require('./controllers/news.controller')
app.use("/news", newsController);


const port= process.env.PORT || 23456



app.listen(port, async () => {
    try {
      await connect();
      console.log('connected')
    } catch (err) {
      console.error(err.message);
    }
    console.log(`listening on port ${port}`);
})