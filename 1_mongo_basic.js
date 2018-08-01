/* Step 1) Setting up
    1) Download mongodb
    2) Put the downloaded folder into your home folder
    3) Renew it to mongo
    4) Create a folder named mongo-data
    5) Go to terminal - cd mongo/bin
    6) ./mongod --dbpath ~/mongo-data
    7) Open a new tab - Connect to the server u have just run
    8) ./mongo - Just like node, you can ran the command 
    9) db.test.insert({name:"John"})
    10) db.test.find() - Mongodb give u a free default id
    11) Install Robomongo
    12) Use it to create collection, much easier than the command prompt way
    13) npm init - Create json file
    14) npm install --save mongodb@2.2.31

    Step 1.1) To run
    1) Go to terminal - cd mongo/bin
    2) ./mongod --dbpath ~/mongo-data
    3) Go to your folder
    4) nodemon server.js
*/

// Step 2 
const { MongoClient } = require('mongodb'); //connect to mongodb

const url = 'mongodb://localhost:27017/test';

/* //Step 3 - Sample, test only
MongoClient.connect(url,(err,db)=>{
    if(err){
        console.log('Could not connect')
    }
    console.log('connected !!!') // Go to terminal, type nodemon server.js, it should show connected
    db.close(); //Need to close, if not it will stay frozen
})
*/

/* // Step 4 -A new collection should appear in Robo 3T
MongoClient.connect(url,(err,db)=>{

    const cars = [
        {model:"Tesla", year:"2018"},
        {model:"Ford", year:"2016"}
    ];

    db.collection('Cars').insertOne({
        model: 'Ford',
        year: '2017'
    },(err,res)=>{
        if (err){
            return console.log(`Cannot insert ${err}`)
        }
        console.log(res.ops[0]._id.getTimestamp()) 
    }) 
    db.close(); 
})
*/

/* // Step 5 - Insert multiple
MongoClient.connect(url,(err,db)=>{

    const cars = [
        {model:"Tesla", year:"2018"},
        {model:"Ford", year:"2016"}
    ];

    db.collection('Cars').insert(cars,(err,res) => { //change to insert instead of insertone
        if (err){
            return console.log(`Cannot insert ${err}`)
        }
        console.log(res.ops[0]._id.getTimestamp()) 
    }) 
    db.close(); 
})
*/

/* // Step 5.1 - Insert One
MongoClient.connect(url,(err,db)=>{
    db.collection('Cars').insert({model:"Ford", year:"9916"},(err,res) => { //change to insert instead of insertone
        if (err){
            return console.log(`Cannot insert ${err}`)
        }
        console.log(res.ops[0]._id.getTimestamp()) 
    }) 
    db.close(); 
})
*/

/* // Step 5.2 - Insert Many
MongoClient.connect(url,(err,db)=>{

    const cars = [
        {model:"Hoya", year:"2000"},
        {model:"Bobo", year:"2000"}
    ];

    db.collection('Cars').insertMany(cars,(err,res) => { //insertMany only for array
        if (err){
            return console.log(`Cannot insert ${err}`)
        }
        console.log(res.ops[0]._id.getTimestamp()) 
    }) 
    db.close(); 
})
*/

/* //Step 6 - Fetch data
MongoClient.connect(url,(err,db)=>{
    db.collection('Cars').find().toArray().then(data => {
        console.log(data)
    });
    db.close();
})
*/

/* //Step 6 - Skip data -> In real life, you are not going to fetch all the data
//.skip(), .limit(), .sort(), .find()
MongoClient.connect(url,(err,db)=>{
    db.collection('Cars')
        .find({year:'2000'}) //
        .skip(1)
        .limit(1)
        .sort({"_id":-1})
        .toArray()
        .then(data => {
        console.log(data)
    });
    db.close();
})

MongoClient.connect(url,(err,db)=>{
    db.collection('Cars')
        .findOne({year:'2000'},{model:0} ,(err, doc) =>{
        console.log(doc)
    });
    db.close();
})
*/

/* //Step 7) Delete data
//deleteOne, find first one and delete it
//findOneAndDelete, find first one and delete it
MongoClient.connect(url,(err,db)=>{
    db.collection('Cars')
        .deleteMany({year:'2017'} 
        ,(err, doc) => {
            console.log(doc)
        })
    db.close();
})
*/

//Step 8) Update Data
MongoClient.connect(url,(err,db)=>{
    db.collection("Cars").findOneAndUpdate(
        {
            _id:"5b617484a8763cee98f629ca"
        },
        {
            $set: {
                model: "Honda"
            },
            $inc:{
                year: +222 //increment the number, you cannot set and increment at the same time
            }
        },
        {
            upsert:true, //insert if not found to update
            returnOriginal: false
        },
        (err, doc) => {
                console.log(doc)
       }
    )

    db.close();
})
