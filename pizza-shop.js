let basket=document.getElementById("basket")
basket.style.display="none"
let item
let quantity=0
let priceProduct
let i=0
let rowCount=2
let columnCount=2



const product=document.querySelector(".products")

// addRow to Basket function
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

//Save to localStorage
  function saveLocal(cell1,cell3){
  let storeCell1=cell1.textContent;
  let storeCell3=cell3.textContent
  console.log("storeCell3 is",typeof(storeCell3)," type")
  console.log("storeCell1 is",storeCell1)
  console.log("storeCell3 is",storeCell3)
  window.localStorage.setItem(storeCell1,storeCell3)
}

saveLocal(cell1, cell3)
} 

else {
  console.log("Product not found");
}

table.appendChild(newRow)






}









//displayBasket Function
function displayBasket(){
 if(basket.style.display="none"){
basket.style.display="block"
console.log("Button Working")
 } 
 else if(basket.style.display="block") {
  basket.style.display="none"
console.log("Button none is Working")
 }


}

let cart=[];
 



