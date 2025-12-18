// string to number 

let score = "33";
console.log(score);
console.log(typeof score);

let newscore = Number(score);
console.log(newscore);
console.log(typeof newscore);

let score1 = "33a";
console.log(typeof score1);
let newscore1 = Number(score1);
console.log(newscore1)
console.log(typeof newscore1)

// null to number 
let myvalue = null;
console.log(myvalue);
console.log(typeof myvalue);

let newvalue = Number(myvalue);
console.log(newvalue);
console.log(typeof newvalue)

// undefined to number 
let something = undefined;
console.log(something);
console.log(typeof something)

let anothervalue = Number(something);
console.log(anothervalue)
console.log(typeof anothervalue)

// Boolean to number 
let boolvalue = 1 ;
let converted = Boolean(boolvalue);
console.log(converted);
console.log(typeof converted)

// empty string or string to boolean 
let str = "";
let newstr = Boolean(str);
console.log(newstr);
console.log(typeof newstr)

// Number to string 

let nums = 656 ;
let newnums = String(nums);
console.log(newnums);
console.log(typeof newnums)