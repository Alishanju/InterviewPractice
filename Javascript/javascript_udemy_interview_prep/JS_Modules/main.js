// Create a es6 module with function getName, getSurname and default export getFullname.
// Create the same with commonJS module
// What is the difference?

//for es6/commonjs modules to include, use type="module" IN INDEX.HTML FILE 

//es6 module
// import getFullName,{ getName,getSurname } from "./es6.js";
// console.log(getName("Aasif"),getSurname("Raza"),getFullName('Alisha','Anjum'));
//also serve this app (in terminal:npm install serve and run, since we are dealing with plain indexs we need to do this, if using react/angular, we can export/import easily
//since they use modular systems out of the box )


//commonjs modules -> run node main.js in terminal
 const {getName,getSurname,getFullName } =require('./common.js');
console.log(getName("Aasif"),getSurname("Raza"),getFullName('Alisha','Anjum Raza')); //logs in terminal

/*
| Feature                    | **CommonJS (CJS)**                                                                       | **ES6 Modules (ESM)**                                                                                |
| -------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Import keyword**         | `require()`                                                                              | `import`                                                                                             |
| **Export keyword**         | `module.exports` / `exports`                                                             | `export` / `export default`                                                                          |
| **Default export**         | `js module.exports = fn; `<br>`js const fn = require('./file'); `                        | `js export default fn; `<br>`js import fn from './file.js'; `                                        |
| **Named exports**          | `js module.exports = { fn1, fn2 }; `<br>`js const { fn1, fn2 } = require('./file'); `    | `js export const fn1 = ...; export const fn2 = ...; `<br>`js import { fn1, fn2 } from './file.js'; ` |
| **Mixing default + named** | Possible but tricky:<br>`js module.exports = mainFn; module.exports.helper = helperFn; ` | Clean and simple:<br>`js export default mainFn; export const helper = helperFn; `                    |
| **Execution**              | Synchronous (loads file line-by-line)                                                    | Asynchronous (better for browsers & dynamic loading)                                                 |
| **Supported in**           | Node.js (default)                                                                        | Browsers + Node.js (with `"type": "module" in package.json file` or `.mjs`)                                               |


⚡ Key takeaway:

Use CommonJS if working with older Node.js projects.

Use ES6 Modules for modern projects (especially frontend or fullstack).
*/

