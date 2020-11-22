const express = require("express");
const router = express.Router();
const {list,read,create,remove,update} = require("../controllers/optionsController");




router.get("/products/:id/options", list);
router.get("/products/:id/options/:optionId", read);
router.post("/products/:id/options", create);
router.delete("/products/:id/options/:optionId", remove);
router.put("/products/:id/options/:optionId", update);





module.exports = router;
