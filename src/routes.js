const Router = require("koa-router");
const Videos = require("./controllers/videos");

const router = new Router();

router.get("/videos", Videos.index);
router.post("/videos", Videos.store);

module.exports = router.routes();
