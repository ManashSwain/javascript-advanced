let date= new Date();
console.log(date)
console.log(date.toString())
console.log(date.toISOString())
console.log(date.toLocaleString())

let mydate = new Date("2023-11-12");
console.log(mydate)
let anotherDate = new Date(2025,11,28);
console.log(anotherDate)

console.log(Date.now())

let newDate = new Date();
console.log(newDate.toLocaleString('default',{
    weekday: 'long'
}))
console.log(newDate.getDate())
