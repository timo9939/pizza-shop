let basket=document.getElementById("basket")
// basket.style.display="none"
let item
let quantity=0
let priceProduct
let i=0
let rowCount=2
let columnCount=2



const product=document.querySelector(".products")



function addRowtoBasket(button){
// const add=document.querySelector(".add").getAttribute("name")
const table=basket
const newRow=document.createElement("tr")


const cell1=document.createElement("td")
cell1.textContent=button.name
// console.log("add.name is",add.name)
newRow.appendChild(cell1)

const cell2=document.createElement("td")
cell2.textContent=1
newRow.appendChild(cell2)

//cell 3 find item
const productName= cell1.textContent
const product = products.find(item => item.name === productName);

if (product) {  
  const cell3=document.createElement("td")
  const productPrice = product.price;
cell3.textContent=productPrice
newRow.appendChild(cell3)

  console.log("Price of", productName, "is", productPrice);
} 

else {
  console.log("Product not found");
}



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


