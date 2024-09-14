import express from "express"
import { controller } from "../Users/Controller.js";
import { Middleware } from "./Middleware.js";

const router = express.Router();

// create account route

router.post("/createAccount", controller.createUser);

// login user route

router.post("/loginUser",controller.LoginUser);

// create seller route

router.post("/createSellerAccount",controller.CreateSeller);

// login seller route

router.post("/loginSeller",controller.LoginSeller);

// check the user is seller or not


router.post("/checkSeller",Middleware.checkSeller);

// routes to get the product

router.get("/getProducts", controller.getProducts);

// route to delete product

router.delete("/DeleteProduct/:id",controller.DeleteProduct);

// route to update product

router.put("/Updateproduct/:id",controller.UpdateProduct);



export default router;
