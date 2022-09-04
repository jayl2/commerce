import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@test.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jay L",
    email: "jay@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Doe",
    email: "john@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
