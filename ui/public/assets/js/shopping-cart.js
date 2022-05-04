// console.log('Shopping Cart');
const headerCart = document.getElementById('header-cart');
const shoppingCart = document.getElementById('shopping-cart');
const grandTotal = document.getElementById('grand-total');
const productCount = document.getElementById('product-count');
const totalValue = document.getElementById('total-value');

// console.log(JSON.parse(localStorage.getItem('cartProducts')) ? 'from local storage' : 'empty storage');
const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || []; 

localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
const totalCost = cartProducts.map(x => (x.quantity * x.price)).reduce((x, y) => x + y, 0);
const totalCount = cartProducts.map(x => (x.quantity)).reduce((x, y) => x + y, 0);
const shippingCost = 100;

if(headerCart) {
headerCart.innerHTML = `
                    <div class="header-icon-style">
                        <i class="icon-handbag icons"></i>
                        <span class="count-style">${totalCount}</span>
                    </div>
                    <div class="cart-text">
                        <span class="digit">My Cart</span>
                        <span class="cart-digit-bold">N${totalCost}.00</span>
                    </div>
                    `;
}
const cart = (product) => `
                    <ul><li class="single-shopping-cart">
                        <div class="shopping-cart-img">
                            <a href="#"><img alt="" src="${product.image}" class="cart-img"></a>
                        </div>
                        <div class="shopping-cart-title">
                            <h4><a href="#">${product.name} </a></h4>
                            <h6>Qty: ${product.quantity}</h6>
                            <span>N${product.price}</span>
                        </div>
                        <div onclick="console.log('close me')" class="shopping-cart-delete">
                        </div>
                    </li></ul>`;
                
const extra = `  
                <div class="shopping-cart-total">
                    <h4>Shipping : <span>N${shippingCost}</span></h4>
                    <h4>Total : <span class="shop-total">N${totalCost + shippingCost}</span></h4>
                </div>
                <div class="shopping-cart-btn">
                    <a href="cart-page.html">view cart</a>
                    <a href="checkout.html">checkout</a>
                </div>`;
if(shoppingCart){

    cartProducts.forEach(product => {
        shoppingCart.innerHTML += cart(product)
    });
    shoppingCart.innerHTML += extra;
}
// eslint-disable-next-line no-lone-blocks
{/* <a href="#"><i class="ion ion-close"></i></a> */}

const total = `
                <div class="title-wrap">
                <h4 class="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                </div>
                <h5>Total products <span>N${totalCost}</span></h5>
                <div class="total-shipping">
                <h5>Total shipping</h5>
             
                </div>
                <h4 class="grand-totall-title">Grand Total  <span>N${totalCost}</span></h4>
                <a target="_blank" href="https://paystack.com/pay/princessluxuryhotels">Proceed to Checkout</a>`;

grandTotal.innerHTML += total;

   // <ul>
                //     <li><input type="checkbox"> Standard <span>N200.00</span></li>
                //     <li><input type="checkbox"> Express <span>N300.00</span></li>
                // </ul>