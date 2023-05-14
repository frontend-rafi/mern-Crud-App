const express =require("express");

const { getUser, createUser, singleUser, deleteUser, updateUser } = require("../controller/user.controller");
const router = express.Router();



//*read
router.get("/",getUser);

  //*create
router.post("/",createUser);

//* singleUser
router.get("/:id",singleUser);

//* delete User
router.delete("/:id",deleteUser);


//* update User
router.patch("/:id",updateUser);

  module.exports=router;