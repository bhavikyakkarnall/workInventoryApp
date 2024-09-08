let express = require("express");
let router = express.Router();

const backendController = require("../controllers/backorderController")

router.post("/backend",backendController.createBackend)
router.get("/backend", backendController.getBackends)
router.get("/backend/:id", backendController.getBackendById);
router.put("/backend/:id", backendController.updateBackend)
router.delete("/backend/:id", backendController.deleteBackend)

module.exports = router;