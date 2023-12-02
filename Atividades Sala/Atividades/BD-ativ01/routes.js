const {Router} = require("express");
const UserController = require('./Controller/userController')

const router = Router();
const userController = new UserController();
router.post("/criar", userController.create);

router.get('/', userController.create)

module.exports = router;