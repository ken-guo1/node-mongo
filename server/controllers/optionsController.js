const ProductOption = require("../models/productOptionModel");
const Product = require("../models/productModel");


exports.create = async (req, res) => {
    const {id} = req.params;
    const { name,description } = req.body;

    try {
        const product=  await Product.findOne({id}).exec();
        
        if(!product){
            return res.sendStatus(404);
        }
        let option = new ProductOption({productId:id, name:name, description:description });

        await option.save();
        res.status(200).json(option.publicFields());

    } catch(error){
        return res.status(400).json(error.message);    
    }



};
exports.read = async (req, res) => {
    const {optionId} = req.params;
    
    try {
        const option=  await ProductOption.findOne({id:optionId}).select('-_id -__v -productId').exec();
        
        if(!option){
            return res.sendStatus(404);
        }

        res.json(option);

    } catch(error){
        return res.status(400).json({
            error:error
        });    
    }

};

exports.list = async (req, res) => {
    const {id} = req.params;


    try {
        const options=  await ProductOption.find({productId:id}).select('-_id -__v -productId').exec();
        
        if(!options){
            return res.sendStatus(404);
        }

        res.json({items:options});

    } catch(error){
        return res.status(400).json({
            error:error
        });    
    }
};
exports.remove = async (req, res) => {
    const {optionId} = req.params;
    try {
        const option=  await ProductOption.findOneAndRemove({id:optionId}).exec();
        
        if(!option){
            return res.sendStatus(404);
        }
        res.sendStatus(200);

    } catch(error){
        return res.status(400).json({
            error:error
        });    
    }

};

exports.update = async (req, res) => {
    const {optionId} = req.params;
    const { name,description} = req.body;

    const filter = { id: optionId };
    const update = { name:name,description:description};
    try {
        await ProductOption.findOneAndUpdate(filter,update).exec();

        res.sendStatus(200);  
    } catch(error) {
        return res.status(400).json({
            error:error
        });           
    }


};