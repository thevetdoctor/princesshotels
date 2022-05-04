console.log('Cart Page');
const headerCart = document.getElementById('header-cart');
// const shoppingCart = document.getElementById('shopping-cart');
const productCount = document.getElementById('product-count');
const totalValue = document.getElementById('total-value');

console.log(JSON.parse(localStorage.getItem('cartProducts')) ? 'from local storage' : 'empty storage');
const cartProducts = JSON.parse(localStorage.getItem('cartProducts')); 

localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
const totalCost = cartProducts.map(x => (x.quantity * x.price)).reduce((x, y) => x + y, 0);
const totalCount = 3;
const shippingCost = 20;

headerCart.innerHTML = `
                    <div class="header-icon-style">
                        <i class="icon-handbag icons"></i>
                        <span class="count-style">${totalCount}</span>
                    </div>
                    <div class="cart-text">
                        <span class="digit">My Cart</span>
                        <span class="cart-digit-bold">$${totalCost}.00</span>
                    </div>
                    `;

// headerCart.innerHTML += header;

const cart = (product) => `
                <ul>
                    <li class="single-shopping-cart">
                        <div class="shopping-cart-img">
                            <a href="#"><img alt="" src="assets/img/cart/cart-1.jpg"></a>
                        </div>
                        <div class="shopping-cart-title">
                            <h4><a href="#">${product.name} </a></h4>
                            <h6>Qty: ${product.quantity}</h6>
                            <span>$${product.price}</span>
                        </div>
                        <div onclick="console.log('close me')" class="shopping-cart-delete">
                            <a href="#"><i class="ion ion-close"></i></a>
                        </div>
                    </li>
                </ul>`;
                
const extra = `  
                <div class="shopping-cart-total">
                    <h4>Shipping : <span>$${shippingCost}</span></h4>
                    <h4>Total : <span class="shop-total">$${totalCost}</span></h4>
                </div>
                <div class="shopping-cart-btn">
                    <a href="cart-page.html">view cart</a>
                    <a href="checkout.html">checkout</a>
                </div>`;
                
cartProducts.forEach(product => {
    // shoppingCart.innerHTML += cart(product)
});

// shoppingCart.innerHTML += extra;
// console.log(shoppingCart?.innerText);
// console.log(headerCart.innerText);

// shoppingCart.parentNode.insertBefore(header, shoppingCart);
// console.log(shoppingCart?.innerText);
