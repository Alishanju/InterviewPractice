//type:"commonjs" iis default in package.json 

const addItem=()=>{
    return "item added to cart"
}
const changeQty=()=>{
    return 5;
}
const name="Alisha";

module.exports={addItem,changeQty,name} //named exports
//module.exports=name; //default exports
