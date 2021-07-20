const router = require("express").Router();
const Brand = require("../models/brand");


//POST request

router.post('/brands', async (req, res) => {
    try{
        let brand = new Brand();
        brand.name = req.body.name;

        await brand.save();

        res.json ({
            sucess: true,
            message: "Sucessfully created a new brand"
        });
   } catch (err) {
       res.status(500).json({
           sucess: false,
           message: err.message
       });
   }
});

//GET request

router.get('/brands', async (req, res) => {
    
    try{
        let brands = await Brand.find();
        res.json({
            sucess: true,
            brands: brands
        })

    } catch (err) {
        res.status(500).json({
            sucess: false,
            message: err.message
        });

    }

});


module.exports = router;