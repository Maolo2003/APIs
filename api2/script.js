document.addEventListener('DOMContentLoaded', function(){
let products = document.querySelector('.products')
    async function fetchProducts(url){
        let data = await fetch(url)
        let response = await data.json();

        for (let i = 0; i < response.length; i++){
            products.innerHTML += `
        <div class="product">
                <img src="${response[i].images[1]}" alt="" class="product-img">
                <h2 class="product-title">${response[i].title}</h2>
                <h4 class="product-category">${response[i].category.name}</h4>
                <p class="product-description">${response[i].description}</p>
                <div class="product-price-container"></div>
                <h3 class="product-price">${response[i].price}</h3>
                <a href="#!" data-productId="${response[i].id}"  class="add-to-cart"></a>
            </div>
            `;
        }
       
        


    };
    fetchProducts('https://api.escuelajs.co/api/v1/products');
});