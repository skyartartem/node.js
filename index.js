const obj = require("./contacts")
// console.log(obj);


const f = async () => {
    const contacts = await obj.fileOperation();
 console.log("First contact", contacts[0]);
} 
f()
