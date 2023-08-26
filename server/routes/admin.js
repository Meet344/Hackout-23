const express = require('express');
const router = express.Router();
const admin = require('../middleware/admin')
const Medicine = require('../models/medicine.js')

router.post("/admin/add-medicine", admin, async (req, res) => {
    try {
        const { name,quantity} = req.body;

        let medicine = new Medicine({
            name,
            quantity,
        });//model
        medicine = await medicine.save(); //saving product returned by mongo(i.e. with _id and version) to product
        res.json(medicine);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
});

router.post("/admin/get-medicines",async(req,res)=> {
    try{
        const medicines = await Medicine.find({});
        res.json(medicines);
    }catch(e){
        return res.status(500).json({error:e.message});
    }
});

module.exports = router;  //connect adminRouter to index.js file