
let div = document.querySelector('#check-cart')
let getItem =JSON.parse( localStorage.getItem('CartItem'));
let totalAmount = document.querySelector('#total-amount');



function render (){
let totalAmount = ''
  if(getItem!=null && getItem.length>0){

    for(let i=0;i<getItem.length;i++){
      
      div.innerHTML += `
      <div class="card mt-4 rounded-sm bg-dark text-white border border-white " style="width: 18rem;">
      <div class="card-body">
      <h3 class="card-title">Brand : ${getItem[i].brand}</h3>
      <h5 class="card-text">Model : ${getItem[i].model}</h5>
      <h5 class="card-text">Ram : ${getItem[i].ram}</h5>
      <h5 class="card-text">Rom : ${getItem[i].rom}</h5>
      <h5 class="card-text">Camera : ${getItem[i].camera}</h5>
      <h5 class="card-text">Price : ${getItem[i].price}</h5>
      <h5 class="card-text">Quantity : ${getItem[i].quantity}</h5>
      </div>
      <div class="card-body">
      <button onclick="deleteItem(${i})" class="btn btn-primary">Delete Item</button>
      <button class="btn btn-primary" onclick="addQuantity(${i})">+</button>
      ${getItem[i].quantity}
      <button class="btn btn-primary" onclick="lessQuantity(${i})">-</button>

      </div>
      </div> <br>
      
      `
    }      
}
}
render();
function deleteItem(index){
  console.log();
   div.innerHTML = ''; 
getItem.splice(index,1);
render()

}

function lessQuantity(index){

if(getItem[index].quantity <= 1){
  div.innerHTML = ''
getItem.splice(index,1)
render()
}else{

  
  div.innerHTML = ''
  getItem[index].quantity -=1;
  render()
  
}

}
function addQuantity(index){
  // console.log(getItem[index].quantity += 1);
  div.innerHTML = ''
  getItem[index].quantity += 1;
  render()
}

// function Total(){
//   totalAmount.innerHTML = `Total Amount`
//   ` ${getItem[i].price*getItem[i].quantity}
//   `
// }
// Total()













