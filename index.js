const express=require('express')
const mongoose=require('mongoose');
const app=express();
require('dotenv').config();
const serverPort=process.env.SERVER_PORT | 3000;
const CategoryRoute=require('./route/CategoryRoute');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

try{
    mongoose.connect(`${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
    app.listen(serverPort, ()=>{
        console.log(`sever up & running on port ${serverPort}`);
    })
}catch (e){
    console.log(e);
}
app.get('/test-api', (req,resp)=>{
    return resp.json({'message':'hi sever is working...'})
});

//http://localhost:3000/api/v1/categories/create-category
app.use('/api/v1/categories',CategoryRoute);