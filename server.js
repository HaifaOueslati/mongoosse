const express = require('express');
const connectDB = require('./DB/connectdB')
const persons = require('./model/clientModel'); 
const app = express();
connectDB();
const port = process.env.PORT || 4000;


// createPerson()

const savePerson = ()=>{
    const Person = new persons({name:'Marry',age:23,favouriteFood:["Pizza"]})
    Person.save(function(err){
        if(err) return console.log(err);
    }) 
}
//  findPerson();
const findNewPr = ()=>{
   persons.create({name:'haifa',age:23,favouriteFood:["Pizza","Spaghetti"]},{name:'wael',age:30,favouriteFood:["pasta"]},{name:'firass',age:28,favouriteFood:["mlou5eya"]})
}
//  findNewPr();
const findPr = () => {
   persons.findOne({name:'wael'},(err,data)=>{err?console.log(err):console.log(data)})
}
//  findPr();
const findOnePr=()=>{
    persons.findOne({favoriteFood:['pasta']},(err,data)=>{err?console.log(err):console.log(data)})
}
// findOne()
const findId=()=>{
    persons.findById("61cb483c036223e01b1f38ed",(err,data)=>{err?console.log(err):console.log(data)})
}
// findId();
const findEditSave=async()=>{
    const pr=await persons.findById("61cb483c036223e01b1f38ed").exec()
   await  pr.favouriteFood.push('Tacos')
   await pr.save()
   }
// findEditSave();
const findOneAndUpdate = ()=>{
    persons.findOneAndUpdate({name:'wael'},{age:20},(err,data)=>{err?console.log(err):console.log(data)})
}
// findOneAndUpdate();
const findByIdAndRemove = ()=>{
    persons.findByIdAndRemove("61cb4563fc35b8955bdc340f",(err,data)=>{err?console.log(err):console.log(data)})
}
// findByIdAndRemove();
const removePerson = ()=>{
    persons.remove({name:"Marry"},(err,data)=>{err?console.log(err):console.log(data)})
}
// removePerson();
const ChainQuery=()=>{
    persons.find({favoriteFood:["Pizza"]})
    .sort({name:1 })
    .limit(2)
    .select("-age")
    .exec((err,data)=>{err?console.log(err):console.log(data)})
}
// ChainQuery()
app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server running on port ${port}`);
})