const sum  = require("./sum").sum;
import { sum2 } from "./sum2";
import { style } from './css/index.css';

console.log("Hello World");
console.log(sum(2,3));
console.log(sum2(2,3));

let heading = document.querySelector("#demo"),
    sumValue = sum(10,5);

heading.innerText = `10+10= ${sumValue}`