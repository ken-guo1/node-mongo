const express = require("express");
const router = express.Router();
const {list,read,create,remove,update} = require("../controllers/productsController");




router.get("/products", list);
router.get("/products/:id", read);
router.post("/products", create);
router.delete("/products/:id", remove);
router.put("/products/:id", update);





module.exports = router;
