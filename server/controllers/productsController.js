const Product = require("../models/productModel");
const ProductOption = require("../models/productOptionModel");



exports.create = async(req, res) => {
    const { name,description,price,deliveryPrice } = req.body;
    let product = new Product({ name, description,price,deliveryPrice });

    try{
        await product.save();
        res.status(201).json(product.publicFields());
    } catch(error){
        return res.status(400).json(error.message);    
    }


};
exports.read = async(req, res) => {
    const {id }= req.params;

    try{
        let data =  await Product.findOne({id}).exec();
        if(!data){
            res.sendStatus(404);
        }
        res.json(data.publicFields());
    }catch(error){
        return res.status(400).json(error.message);    
    }

};

exports.list = async(req, res) => {
    let  {name} = req.query;
    if(!name){
        name="";
    }

    try{
        let products = await Product.find({"name": { "$regex": name }}).select('-_id -__v').exec();
        res.json({items:products});
    } catch(error){
        return res.status(400).json(error.message);    
    }

};
exports.remove = async (req, res) => {
    const {id} = req.params;

    try{
        await ProductOption.deleteMany({productId:id}).exec();
        
        await Product.findOneAndRemove({ id:id }).exec();
        
        res.sendStatus(200);
    } catch(error){
        return res.status(400).json(error.message);    
    }
};

exports.update = async (req, res) => {
    const {id} = req.params;
    const { name,description,price,deliveryPrice } = req.body;

    const filter = { id: id };
    const update = { name:name,description:description,price:price, deliveryPrice:deliveryPrice};

    try{
        await Product.findOneAndUpdate(filter,update).exec();

        res.sendStatus(201);  

    } catch(error){
        return res.status(400).json(error.message);    
    }


};