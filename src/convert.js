const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const num = +input[0];
const vals = input[1].split(" ");
const val = vals.map((item) => +item);
const target = +input[2];
let count = 0;

for(let i=0; i<num; i++) {
    if(val[i] === target)
        count++;
}

console.log("count : ", count);