import description from './description.js';
import Common from '../common/common.js';
import React from "react";
import ReactDOM from "react-dom";
import style from "./style.css";
import color from "./color.css";
import commonCSS from "../common/common.css";

const name = [1,2,3];
let some = ()=>{
	console.log("some");
};

function* generator(){
	yield 1;
	yield 2;
	yield 3;
}

var itr = generator();
some();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

ReactDOM.render(<Common name="About"/>, document.getElementById("about"));