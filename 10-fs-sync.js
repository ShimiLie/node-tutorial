const { readFileSync, writeFileSync } = require("fs");

console.log("start");

//same as above
// const fs = require("fs");
// fs.readFileSync

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("initiate the next");
