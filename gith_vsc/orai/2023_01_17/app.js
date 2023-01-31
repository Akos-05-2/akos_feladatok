const vegburger = document.getElementById('vegburger');
const nav = document.getElementById('nav');

vegburger.addEventListener('click',(event)=>{
    nav.classList.toggle('menu-active');
    vegburger.classList.toggle('fi-align-justify');
    vegburger.classList.toggle('fi-arrow-left');
})

nav.addEventListener('mouseleave',(event)=>{
    nav.classList.remove('menu-active');
    vegburger.classList.remove('fi-arrow-left');
    vegburger.classList.add('fi-align-justify');
   
})

/*const products = [
    {id:1,name:'Málna', picture:'malna.jpg',
        description:'Kézzel szedett finimság',
        price:3800,instock:true},
    {id:2,name:'Áfonya', picture:'afonya.jpg',
        description:'Kézzel szedett finimság',
        price:3250,instock:true},
    {id:3,name:'Szeder', picture:'szeder.jpg',
        description:'Kézzel szedett finimság',
        price:1700,instock:true,variations:["feher","fekete"]}
];*/

let products = [];

const productSection = document.getElementById('products');

fetch("https://hur.webmania.cc/products.json").then(response => response.json()).then(data => {
products = data.products;
products.forEach(product => {
    productSection.innerHTML += `<div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <image src="${product.picture}">
        <h3>${product.price}</h3>
        <a id=${product.id} class="addToCart">Kosárba</a>
        </div>`;
        addToCartButtons = document.getElementsByClassName('addToCart');

        for (const addToCartButton of addToCartButtons) {addToCartButton.addEventListener('click',addToCart)}
});
}).catch(error => console.log(error));

const addToCart = (event) => {
    let target = event.target.id ? event.target.id : event.target.dataset.id;
    cart[target] == undefined ? cart[target] = 1 : cart[target]++;
};

const refreshCartItems = () => {
    cartItems.innerHTML = "";
    let total = 0;
    for (const id in cart){
        const currentProduct = products.find(product => product.id == id);
        cartItems.innerHTML += `<li>
        <button data-id = "${currentProduct.id}"> + </button> 
        ${cart[id]} - db ${currentProduct.name} * ${currentProduct.price}</li>`;
        total += cart[id] * currentProduct.price;
    }
    cartItems.innerHTML += `<li>Összesen: ${total.toLocaleString()}Ft`;
}
const cart = {}

const cartIcon = document.getElementById('cart-icon');
const cartContent = document.getElementById('cart-content');
const cartItems = document.getElementById('cart-items');

cartIcon.addEventListener('click', (event) => {
    cartContent.classList.toggle('active');
    refreshCartItems();
})

const plusButtons = document.querySelectorAll('#cart-items button');
cartItems.addEventListener('click', (event) => {
    addToCart(event);
    refreshCartItems();
});

