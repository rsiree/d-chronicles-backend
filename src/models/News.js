const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema(
    {
        id:{type:Number,required:true},
        title: { type: String, required: true },
        category: { type: String, required: true },
        published: { type: String, required: false },
        updated: { type: String, required: false },
        editor: { type: String, required: true },
        images: [{ type: String, required: true }],
        description: { type: String, required: true },
        subtitle:{ type: String, required: true },
        state: { type: String, required: true },
       country:{ type: String, required: true }

    },
    {
        versionKey: false,
        timeStamps: true
    }

);

const News = mongoose.model("news", newsSchema);

module.exports = News;