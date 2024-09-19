//strings
const name = "tarun singh";
const age = 20;
console.log(`my name is ${name} and my age is ${age}`);

// concarinate kar sakte hai

const gameName = new String("hello bhaiyo");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("l"));

const newString = gameName.substring(0, 4);
console.log(newString);

//slice method
const newString1 = gameName.slice(0, -6);
console.log(newString1);

//trim method starting and last ko remove kar deta hai

//split karne
console.log(gameName.split(" "));


