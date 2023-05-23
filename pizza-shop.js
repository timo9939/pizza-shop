let basket=document.getElementById("basket")
// basket.style.display="none"
let item
let quantity
let price

let add=document.getElementById("add")

add.addEventListener('click', addItem);
button.addEventListener('click', displayBasket);

function displayBasket(){
basket.style.display="block"
console.log("Button Working")
item="Mango Ice-cream"
document.getElementById("item").innerText=item
}


function addItem(){
item=200
document.getElementById("item").innerText=item
}


