import db from "../../ds.js";

// middleware for check the usere is seller

const checkSeller = async (req,res) =>{
    const {email} = req.body;
    // console.log(email);
    try {
        const result = await db.query("SELECT * FROM seller WHERE email = $1", [email]);
        if(result.rows.length > 0){
            res.json({status: 200, message: "the user is a seller"})
        }
        else{
            res.json({status: 404, message: "the user is a buyer"})
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
}

export const Middleware = {
    checkSeller,
}