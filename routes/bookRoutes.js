const express = require("express");

const bookController = require("../controllers/bookController");

const router = express.Router();

const upload = require("../middleware/upload");

router.get("/create", bookController.book_create_get);
router.get("/", bookController.book_index);
router.post("/",bookController.book_create_post/*, upload.single("file"), bookController.upload_file*/);
router.get("/:id", bookController.book_details);
router.delete("/:id", bookController.book_delete);

module.exports = router;
