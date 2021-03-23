const express = require('express');
const router = express.Router();
const Bookmark = require('../models/bookmark.js');

//GET ROUTE - read bookmark
router.get('/', (req, res) => {
    Bookmark.find({}, (err, foundAllBookmark) => {
        res.json(foundAllBookmark);
    });
});


//POST ROUTE - Create bookmark
router.post('/', (req,res) => {
    Bookmark.create(req.body, (err, newBookmark) => {
        res.json(newBookmark);
    });
});

//PUT ROUTE - update bookmark
router.put('/:id', (req,res) => {
    Bookmark.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateBookmark) => {
        res.json(updateBookmark);
    });
});

//DELETE ROUTE - delete bookmark
router.delete('/:id', (req, res) => {
    Bookmark.findByIdAndRemove(req.params.id, (err, deleteBookmark) => {
        res.json(deleteBookmark);
    });
});

module.exports = router;