let basket=document.getElementById("basket")
// basket.style.display="none"
let item
let quantity=0
let priceProduct
let i=0

let add=document.getElementsByClassName("add")

for (let i = 0; i < add.length; i++) {
    add[i].addEventListener('click', addItem);

  }

function displayBasket(){
basket.style.display="block"
console.log("Button Working")
item="Mango Ice-cream"
document.getElementById("item").innerText=item
}


function addItem(){
   
    console.log("addItem is working")
    console.log(this.name)
item=this.name
priceProduct=document.querySelector(".price").textContent
console.log("priceProduct is £",priceProduct)
document.getElementById("price").innerText=priceProduct
document.getElementById("item").innerText=item
quantity++
document.getElementById("quantity").innerText=quantity
}


