let newheading = document.getElementById("heading");
newheading.textContent = "DOM MANIPULATION IN JAVASCRIPT";
newheading.style.color = "blue";
newheading.style.fontSize = "30px";
let paragraphs = document.getElementsByClassName("paragraph");
paragraphs[0].innerHTML = "<strong> This paragraph has been updated using DOM manipulation in JS </strong>";
paragraphs[0].style.color = "green ";
paragraphs[0].style.fontSize = "20px";

let newDiv=document.createElement("div");
newDiv.textContent="this is a new div elelment";
document.body.appendChild(newDiv);

function addList(list)
{
  let newList = document.createElement("11");

}