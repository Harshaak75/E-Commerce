import db from "../../ds.js";
import jwt from "jsonwebtoken";

import bcrypt, { hash } from "bcrypt";
import { v4 as uuidv4 } from "uuid";

// user

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userId = uuidv4();

    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await db.query(
      "INSERT INTO userdata (id, email, password) VALUES ($1,$2,$3)",
      [userId, email, hashedPassword]
    );

    const token = jwt.sign({ id: userId, email, email }, "mavex", {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ message: "User created successfully: ", status: 200, token });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await db.query("SELECT * FROM userdata WHERE email = $1", [
      email,
    ]);

    // console.log(response)

    if (response.rows.length > 0) {
      const user = response.rows[0];
      const match = await bcrypt.compare(password, user.password);

      const token = jwt.sign({ email, email }, "mavex", { expiresIn: "1h" });

      res.json({
        message: "user is logged in successfully: ",
        status: 200,
        token,
      });
    } else {
      res.json({ message: "Invalid credentials: ", status: 401 });
    }
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// seller

const CreateSeller = async (req, res) => {
  try {
    const { name, email, password, gst } = req.body;

    console.log(name, email, password, gst);

    const userId = uuidv4();

    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await db.query(
      "INSERT INTO seller (id, name, email, password, gst_number) VALUES ($1, $2, $3, $4, $5)",
      [userId, name, email, hashedPassword, gst]
    );

    const token = jwt.sign({ id: userId, email, email }, "mavex", {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({
        message: "Seller Account created successfully: ",
        status: 200,
        token,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error Creating Seller Account: ", status: 500 });
  }
};

const LoginSeller = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await db.query("SELECT * FROM seller WHERE email = $1", [
      email,
    ]);

    // console.log(response)

    if (response.rows.length > 0) {
      const user = response.rows[0];
      const match = await bcrypt.compare(password, user.password);

      const token = jwt.sign({ email, email }, "mavex", { expiresIn: "1h" });

      res.json({
        message: "user is logged in successfully: ",
        status: 200,
        token,
      });
    } else {
      res.json({ message: "Invalid credentials: ", status: 401 });
    }
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// CRUD operations

const getProducts = async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM products");
    res.json({
      message: "Products fetched successfully: ",
      status: 200,
      products: response.rows,
    });
  } catch (error) {
    console.log("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    await db.query("DELETE FROM products WHERE id = $1", [id]);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const UpdateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, ratings, description, discount } = req.body;

  console.log("Updating product:", id, name, price, ratings, description, discount); // Log the data

  try {
    const result = await db.query(
      "UPDATE products SET name = $1 WHERE id = $2",
      [name,id]
    );

    if (result.rowCount > 0) {
      res.status(200).json({ message: 'Product updated successfully!' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({ message: "Database error" });
  }
};


export const controller = {
  createUser,
  LoginUser,
  CreateSeller,
  LoginSeller,
  getProducts,
  DeleteProduct,
  UpdateProduct,
};
