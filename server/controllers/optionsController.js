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
    const {optionId,id } = req.params;
    
    try {
        const option=  await ProductOption.findOne({id:optionId,productId:id}).select('-_id -__v -productId').exec();
        
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
    const {optionId,id} = req.params;
    try {
        const option=  await ProductOption.findOneAndRemove({id:optionId,productId:id}).exec();
        
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
    const {optionId,id} = req.params;
    const { name,description} = req.body;

    const filter = { id: optionId,productId:id };
    const update = { name:name,description:description};
    for (var prop in update) { 
        if (!update[prop]) { 
            delete update[prop]; 
        } 
    } 
    try {
        let option = await ProductOption.findOneAndUpdate(filter,update).exec();
        if(!option){
            res.sendStatus(404);
        }

        res.sendStatus(201);  
    } catch(error) {
        return res.status(400).json({
            error:error
        });           
    }


};