const express=require('express');
const app=express();
const router=require('./routes/Productroutes.js');

const PORT=3000;

//mongoose connection
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/product')
.then(()=>console.log('mongodb connected'))
.catch((err)=>console.log('something went wrong',err))


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/products',router);

app.get('/',(req,res)=>{
    res.send('hii welcome to node.js');
})


app.listen(PORT,()=>console.log(`listening to the port ${PORT}`));