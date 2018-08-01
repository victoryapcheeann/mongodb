const mongoose = require('mongoose');

mongoose.Promise =global.Promise;
mongoose.connect('mongodb://localhost:27017/test') //no need to reconnect and close the whole time

//Step 1) Models and schemas
const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
}); //Schema, control the data type of the input

const Car = mongoose.model('Car', carSchema);

//Step 2) Create new object
/*
const addCar = new Car({
    brand: 'honda',
    model: 'bigcar',
    year:22,
    avail: true
})

addCar.save((err,doc) =>{
    if (err) return console.log(err);
    console.log(doc);
})
*/

/* //Step 3) Update 
//find findOne, findByID
Car.find({_id:"5b61836a6b0dc2172489819f"},(err, doc)=>{ 
    if(err) return console.log(err);
    console.log(doc)
})

Car.findById("5b61836a6b0dc2172489819f",(err, doc)=>{ 
    if(err) return console.log(err);
    console.log(doc)
})
*/

/* //Step 4) Delete
//remove, find one, find by id, find and remove, 
Car.remove({}, (err, doc)=>{
    if(err) return console.log(err);
    console.log(doc)   
})
*/

/* //Step 5) Update
//update, findByIDandUpdate

Car.update(
    {_id:"5b61879a8140a018a6b7e6d0"},
    {$set:{brand:"Lambo"}},
    (err,doc)=>{
        if(err) return console.log(err);
        console.log(doc);
    }
)

Car.findByIdAndUpdate(
    "5b61879a8140a018a6b7e6d0",
    {$set:{brand:"Ford"}},
    { new: false },
    (err,doc)=>{
        if(err) return console.log(err);
        console.log(doc);
    }
)
*/
Car.findById("5b61879a8140a018a6b7e6d0",(err,car)=> {
    if(err) return console.log(err);
    car.set({
        brand: "Porche"
    });
    car.save((err,doc) => {
        if(err) return console.log(err);
        console.log(doc);
    })
})