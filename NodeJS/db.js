const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CurdDB',{useNewUrlParser: true} , (err)=> {
    if(!err) 
    console.log('mongo db connection succeeded.');
    else
    console.log('Error in db connection :' + JSON.stringify(err, undefined, 2));
});

// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }).
//   catch(error => handleError(error));

module.exports = mongoose;