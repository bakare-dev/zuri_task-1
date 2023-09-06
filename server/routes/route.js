const router = require("express").Router();
const Controller = require("../../controller/Controller");
const controller = new Controller();

router.get("/api", controller.getdata);

module.exports = router;