const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");
const authMiddleware = require("../../middlewares/auth"); // Import the auth middleware
const auth = require("../../middlewares/auth");

const router = express.Router();

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement a route definition for `/v1/users/:userId`

router.get(
  "/:userId",
  authMiddleware,
  validate(userValidation.getUser),
  userController.getUser
);

router.post(
  "/",
  validate(userValidation.createUser),
  userController.createUser
);

router.put(
  "/:userId",
  auth,
  validate(userValidation.setAddress),
  userController.setAddress
);

module.exports = router;
