const {User}=require('../model/connection.js');

const getProducts=async(req,res)=>{
        try{
            const product=await User.find({});
            res.json({product});
        }
        catch(err){
            res.status(500).json({err});
        }
};

const getProcutsId=async(req,res)=>{
    try{
        const id=req.params.id;
        const product=await User.findById(id);
        return res.status(200).json({product});
    }
    catch(err){
        res.status(500).send(err);
    }
};


const postProducts=async(req,res)=>{
    try{
        const product=await User.create({
            name:req.body.name,
            price:req.body.price,
            Address:req.body.Address,
            img:req.body.Address
        });
        return res.json({product});
    }
    catch(err){
        res.status(500).json({err});
    }
};

const updataProducts=async(req,res)=>{
    try{
        const id=req.params.id;
        const product=await User.findByIdAndUpdate(id,{price:req.body.price});
        res.status(200).json({product});
    }
    catch(err){
        res.status(500).json({err});
    }
};

const deleteProducts=async(req,res)=>{
    try{
        const id=req.params.id;
        const product=await User.findByIdAndDelete(id);
        res.status(200).json({msg:'sucess'});
    }
    catch(err){
        res.status(500).json({err});
    }
};


module.exports={getProducts,getProcutsId,postProducts,updataProducts,deleteProducts};