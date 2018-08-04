import script2 from './script2.js';
import Common from '../common/common.js';
import React from "react";
import ReactDOM from "react-dom";
import style from "./style.css";
import style1 from "./style1.css";
import style2 from "./style2.css";
import css from "../common/common.css";

console.log(script2);
const name = [1,2,3];
let some = ()=>{

};

function* generator(){
	yield 1;
	yield 2;
	yield 3;
}

var itr = generator();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

ReactDOM.render(<Common name="home"/>, document.getElementById("home"));