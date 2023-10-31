const Book = require("../models/BookSchema")
const asyncHandler = require("express-async-handler")

const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find()
    res.status(200).json(books)
})


const createBook = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { bTitle, bAuthor, bSummary } = req.body
    if (!bTitle || !bAuthor || !bSummary) {
        res.status(400)
        throw new Error("all field are mandatory")
    }
    const bookList = await Book.create({
        bTitle,
        bAuthor,
        bSummary

    })
    res.status(201).json(bookList)
})
const getBook = (req, res) => {
    Book.findById(req.params.id)        
        .then(data => {
            if (data) {
                res.send(data)
            }
            else {
                res.status(400).json({
                    message: `No record ${req.params.id}`
                })
            }
        })
    console.log(req.body)

}
const updateBook = asyncHandler(async(req, res) => {
    const updateData= await Book.findById(req.params.id)

    if(!updateData){
        res.send(404);
        throw new Error("Book not found")
    }
    const updatedBookDetail=await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.sendStatus(200).json(updatedBookDetail)
})
const deleteBook =asyncHandler(async (req, res) => {
    const updateData= await Book.findById(req.params.id)

    if(!updateData){
        res.send(404);
        throw new Error("Book not found")
    }

    await Book.deleteOne();
    res.send(200).json(updateData)
   
})

module.exports = { getBooks, createBook, getBook, updateBook, deleteBook }