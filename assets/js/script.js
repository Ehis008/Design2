"use strict"
const name3 = "david"
if (true){
    const pi=3.142;
    console.log(pi)
    console.log (name)
} 


const name2= "Paul Moses";
const age3 = 30;
const has_license = true;
console.log ("my name is "+name2 +" I am " + age3 + " years old" + " has license " + has_license);
console.log(`my name is ${name2}, I am ${age3} years old, I have license ${has_license}`)

function sayHello() {
    console.log("Hello, World!");
}
const users = ["samuel jireh", "judith anselem","moses onyilo", "david ogbu", "veronica", "bartholomew", "michael", "edison"]
for (let x =0; x < users.length; x++) {console.log (users[x ])};
const colors = ["red", "blue", "orange","yellow"]
let i = 0
while (i < colors.length){console.log (colors[i]); i++}
for (let user of users){
    console.log(user)
}
