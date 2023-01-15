const vegburger = document.getElementById('vegburger');
const nav = document.getElementById('nav');

vegburger.addEventListener('click', (event) => {
    nav.classList.toggle('menu-active');
    vegburger.classList.toggle('fi-align-justify');
    vegburger.classList.toggle('fi-arrow-left');
});

vegburger.addEventListener('mouseleave', (event) => {
    nav.classList.toggle('menu-active');
    vegburger.classList.toggle('fi-arrow-left');
    vegburger.classList.toggle('fi-align-justify');
});


const products = [
    {id: 1, name: 'Málna', picture: 'malna.jpg', description: 'Kézzel szedett finomság', price: 3800, instock: ture},
    {id: 2, name: 'Áfonya', picture: 'afonya.jpg', description: 'Kézzel szedett finomság', price: 2650, instock: ture},
    {id: 3, name: 'Szeder', picture: 'szeder.jpg', description: 'Kézzel szedett finomság', price: 7600, instock: ture, variations: ['fehér', 'fekete']},
];

const productSection = document.getElementById('products');

products.forEach(product => {
    productSection.innerHTML += `<div> 
    <h2>${product.name}</h2> 
    <p>${product.description}</p>
    <img src = "./image/${product.picture}">
    <h3>${product.prize}</h3>
    <a id ( ${product.id} class = ""addToCart)Kosátba</a>
    </div>`
})