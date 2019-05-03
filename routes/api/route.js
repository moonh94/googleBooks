const router = require("express").Router();
const booksController = require("../../controllers/bookscontroller");

// Landing page call
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;