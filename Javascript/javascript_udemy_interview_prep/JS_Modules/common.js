const getName=(name)=>name; 
const getSurname=(surname)=>surname;
module.exports.getName=getName; //named exports
module.exports.getSurname=getSurname;//named exports
module.exports.getFullName= (name,surname)=> `${getName(name)} ${getSurname(surname)}` //named exports
//or module.exports={getName,getSurname,getFullName} and define const functions above when using this


