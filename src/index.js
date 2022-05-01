import { getinput,show ,show2 ,sort } from "../components/common.js";
import "../styles/style.css";

let x= document.getElementById("navbar1").children;

for(let el of x){
    el.addEventListener("click",show)
}

let y = document.getElementById("filter").children;

for (let el of y) {
  el.addEventListener("click", show2);
}
document.getElementById("sort-select").addEventListener("change", sort);
document.getElementById("SearchImage").addEventListener("input", getinput);