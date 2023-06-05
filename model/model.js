 const mongoose = require ('mongoose');

 mongoose.connect("mongodb+srv://tiyars:tiya@cluster0.l6d4x3p.mongodb.net/?retryWrites=true&w=majority")
 .then(()=>{
    console.log("db connected");
})
.catch(err=>console.log(err));

let Schema = mongoose.Schema;

const employeeSchema = new Schema({
    sname:String,
    age:Number,
    pos:String,
    salary:Number
});

var employeeModel = mongoose.model("employees",employeeSchema);
module.exports = employeeModel;
