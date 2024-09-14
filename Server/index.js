import express from "express"
import cors from "cors"
import UserRouter from "../Server/src/Users/Router.js"
import multer from "multer";
import path, { dirname } from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import db from "./ds.js";

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const _dirname = dirname(fileURLToPath(import.meta.url)); // IT DEFINES THE DIRECTORY OF THE FILES

const currentDir = _dirname; // For example, C:\Users\Harsha AK\Desktop\E-Commerce\Server

// Target directory
const targetDir = path.join('..',"Client","E-Commerce"); // Move up two levels and then to 'Client'

// Resolve the absolute path to the target directory
const absoluteTargetPath = path.resolve(currentDir, targetDir);

// change


const uploadDir = path.join(absoluteTargetPath, 'src/assets/tmp/uploads');


// const uploadDir = '/tmp/uploads';






// console.log(uploadDir)

// Ensure the uploads directory exists

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// change

// const upload = multer({ dest: uploadDir });


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, uploadDir);
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    })
});



const corsOption = {
    origin: "http://localhost:5173",
    credentials: true
}

app.use(cors(corsOption));

app.use(express.json());

app.use('/uploads', express.static(uploadDir));


// router handle for user query

app.use("/api/user", UserRouter)


// Upload a new product to the database using multer
app.post("/upload", upload.single('image'), async (req, res) => {
    try {
        const { name, category, price, ratings, description, discount } = req.body;

        // Check if the image file exists in the request
        if (!req.file) {
            return res.status(400).json({ message: 'No image file uploaded' });
        }

        // Get the file path and create relative URL for accessing it later
        // const imagePath = req.file.path;
        // const imageURL = path.relative(_dirname, imagePath).replace(/\\/g, '/');
        // const img = imageURL.slice(7); // Adjust the path to be relative from 'src/assets/uploads'

        const imagePath = req.file.path;
        const imageURL = path.join('/uploads', path.basename(imagePath));

        // Insert the product data including the image path into the database
        const query = 'INSERT INTO products (name, category, price, ratings, description, discount, image) VALUES ($1, $2, $3, $4, $5, $6, $7)';
        await db.query(query, [name, category, price, ratings, description, discount, imageURL]);

        res.status(200).json({ message: 'Product uploaded successfully!', status: 200 });
    } catch (err) {
        console.error('Error inserting data into database:', err);
        res.status(500).json({ message: 'Database error' });
    }
});

// server is running on 8080 port

app.listen(port, () => {
    console.log("Server is running on port 8080"); // Server is listening on port 8080
  });