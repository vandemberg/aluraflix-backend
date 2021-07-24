const express = require("express");
const videoController = require("./controllers/videos");
const videoValidator = require("./validator/video");
const router = express.Router();

router.get("/videos", videoController.index);
router.get("/videos/:id", videoController.show);
router.post("/videos", videoValidator.create, videoController.store);
router.put("/videos/:id", videoValidator.update, videoController.update);
router.delete("/videos/:id", videoController.destroy);

module.exports = router;
