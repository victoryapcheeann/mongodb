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
*/

// Step 2 
const { MongoClient } = require('mongodb'); //connect to mongodb

const url = 'mongodb://localhost:27017/test';

/* Sample, test only
MongoClient.connect(url,(err,db)=>{
    if(err){
        console.log('Could not connect')
    }
    console.log('connected !!!') // Go to terminal, type nodemon server.js, it should show connected
    db.close(); //Need to close, if not it will stay frozen
})
*/

// A new collection should appear in Robo 3T
MongoClient.connect(url,(err,db)=>{
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
