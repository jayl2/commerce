import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const getUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  res.send({
    email,
    password,
  });
});

export { getUser };
