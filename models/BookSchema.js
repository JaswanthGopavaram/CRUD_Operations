const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    bTitle:{
        type:String,
        required:true
    },
    bAuthor:{
        type:String,
        required:true
    },
    bSummary:{ 
        type:String,
        required:true
    },
    // timestamps:true
})

module.exports=mongoose.model("book",bookSchema)