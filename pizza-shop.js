let basket=document.getElementById("basket")
// basket.style.display="none"
let item
let quantity=0
let priceProduct
let i=0
let rowCount=2
let columnCount=2

let add=document.querySelectorAll(".add")

const productsEl=document.querySelector(".products")



function addRowtoBasket(){
const table=basket
const newRow=document.createElement("tr")

const cell1=document.createElement("td")
cell1.textContent="Cell 1"
newRow.appendChild(cell1)

const cell2=document.createElement("td")
cell2.textContent="Cell 2"
newRow.appendChild(cell2)

const cell3=document.createElement("td")
cell3.textContent="Cell 3"
newRow.appendChild(cell3)

table.appendChild(newRow)

}

// addRowtoBasket()







function displayBasket(){
basket.style.display="block"
console.log("Button Working")
item="Mango Ice-cream"
document.getElementById("item").innerText=item
}

let cart=[];
 
// function addItem(){
//   // const item=cart.find((cart) => cart.id===id);

//   console.log("addItem is working")
// console.log(this.name)
// item=this.name
// priceProduct=document.querySelector(".price").textContent
// console.log("priceProduct is £",priceProduct)
// document.getElementById("price").innerText=priceProduct
// document.getElementById("item").innerText=item
// quantity=quantity+0.5
// document.getElementById("quantity").innerText=quantity
// }


