const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

function solution() {
    let temp = input[0].split(" ");
    let n = +temp[0];
    let m = +temp[1];
    let arr = [];
    let result = "";
    let from = 0;
    let to = 0;
    
    for(let i=0; i<n; i++) {
        arr[i] = i+1;
    }
    
    for(let i=1; i<=m; i++) {
        temp = input[i].split(" ");
        from = temp[0];
        to = temp[1];
        
        let f = from-1;
        let t = to-1;
    
        for(let j=0; f<t; j++) {
            temp = arr[f];
            arr[f] = arr[t];
            arr[t] = temp;
            f++;
            t--;
        }
    }

    for(let i=0; i<n; i++) {
        result = result.concat(arr[i].toString(), " ");
    }
    console.log(result);
}

solution(input);