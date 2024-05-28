let div = document.querySelector('#div');
const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000,
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000,
    },
   

];
let arr = [];

function render (){

for(let i=0;i<phones.length;i++){

    div.innerHTML += `
    <div class="card mt-4 rounded-sm bg-dark text-white border border-white " style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title">Brand : ${phones[i].brand}</h3>
      <h5 class="card-text">Model : ${phones[i].model}</h5>
      <h5 class="card-text">Ram : ${phones[i].ram}</h5>
      <h5 class="card-text">Rom : ${phones[i].rom}</h5>
      <h5 class="card-text">Camera : ${phones[i].camera}</h5>
      <h5 class="card-text">Price : ${phones[i].price}</h5>
    </div>
    <div class="card-body">
      <button onclick="addTocart(${i})" class="btn btn-primary">Add to Cart</button>
    </div>
  </div>    
    
    `
}
}
render();

function addTocart(index){

if(arr.includes(phones[index])){
    phones[index].quantity += 1;
    
}else{
    phones[index].quantity = 1
    arr.push(phones[index]);
    
}
console.log(arr);
}

function checkCart(){
localStorage.setItem('CartItem',JSON.stringify(arr))
window.location='cart.html'

}

    










































