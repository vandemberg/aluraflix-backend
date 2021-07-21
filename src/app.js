const json = require("koa-json");
const bodyParser = require("koa-bodyparser");
const Koa = require("koa");

const app = new Koa();

// modules app koa
app.use(json()).use(bodyParser()).use(require("./routes"));

module.exports = async function () {
  app.use(async (ctx) => {
    ctx.body = {
      message: "hello world",
    };
  });

  app.listen(3000);
};
