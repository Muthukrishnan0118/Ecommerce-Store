const express = require("express");

const {
  registerUser,
  loginUser,
  getUsers,
  makeAdmin,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/:id/admin", makeAdmin);
router.get("/", getUsers);

module.exports = router;
