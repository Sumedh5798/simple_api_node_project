const mongoose=require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/product')
// .then(()=>console.log('mongodb connected'))
// .catch((err)=>console.log('something went wrong',err))


const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    Address:{
        type:String,
        required:'true',
    },
    img:{
        type:String,
        required:false,
    }
})

const User=mongoose.model('user',UserSchema);

module.exports={User};