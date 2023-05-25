// let basket=document.getElementById("basket")
// basket.style.display="none"
let item
let quantity=0
let priceProduct
let i=0
let rowCount=2
let columnCount=2

let add=document.querySelectorAll(".add")

// Create a new table element
// Get a reference to the table
const table = document.getElementById('basket');

// Create a new row
const newRow = table.insertRow();

// Create cells and set content
const cell1 = newRow.insertCell();
cell1.textContent = 'Cell 1';

const cell2 = newRow.insertCell();
cell2.textContent = 'Cell 2';

// Optionally, assign attributes or classes to cells
cell1.className = 'cellClass';
cell2.setAttribute('data-info', 'Some data');

// You can continue adding more cells if needed

// Append the new row to the table

// Append the table to an existing element in the DOM
basket.appendChild(table);



const productsEl=document.querySelector(".products")

for (let i = 0; i < add.length; i++) {
  console.log("i.length is",add.length)
    add[i].addEventListener('click', addItem);

  }

function displayBasket(){
basket.style.display="block"
console.log("Button Working")
item="Mango Ice-cream"
document.getElementById("item").innerText=item
}

let cart=[];
 
function addItem(){
  // const item=cart.find((cart) => cart.id===id);

  console.log("addItem is working")
console.log(this.name)
item=this.name
priceProduct=document.querySelector(".price").textContent
console.log("priceProduct is £",priceProduct)
document.getElementById("price").innerText=priceProduct
document.getElementById("item").innerText=item
quantity=quantity+0.5
document.getElementById("quantity").innerText=quantity
}


