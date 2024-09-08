let express = require("express");
let router = express.Router();

const orderProductController = require("../controllers/orderProductController")

router.post("/orderProduct",orderProductController.createOrder)
router.get("/orderProduct", orderProductController.getOrders)
router.get("/orderProduct/:id", orderProductController.getOrderById);
router.put("/orderProduct/:id", orderProductController.updateOrder)
router.delete("/orderProduct/:id", orderProductController.deleteOrder)

module.exports = router;