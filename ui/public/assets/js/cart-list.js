// console.log('Shopping Cart');
const cartList = document.getElementById('cart-list');
// const grandTotal = document.getElementById('grand-total');

console.log(JSON.parse(localStorage.getItem('cartProducts')) ? 'from local storage' : 'empty storage');
const cartItems = JSON.parse(localStorage.getItem('cartProducts')); 
console.log(cartItems)

const carts = (product) => `
                            <tr>
                                <td class="product-thumbnail">
                                    <a href="#"><img src="${product.image}" class="cart-img" alt=""></a>
                                </td>
                                <td class="product-name"><a href="#">${product.name} </a></td>
                                <td class="product-price-cart"><span class="amount">N${product.price}</span></td>
                                <td class="product-quantity">
                                    <div class="cart-plus-minus">
                                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="${product.quantity}">
                                    </div>
                                </td>
                                <td class="product-subtotal">N${product.quantity * product.price}</td>
                                <td class="product-remove">
                                    <a href="#"><i class="fa fa-pencil"></i></a>
                                    <a href="#"><i class="fa fa-times"></i></a>
                                </td>   
                            </tr>
                            `;
                
cartItems.forEach(product => {
    cartList.innerHTML += carts(product)
});

// const total = `
//                 <div class="title-wrap">
//                 <h4 class="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
//                 </div>
//                 <h5>Total products <span>$260.00</span></h5>
//                 <div class="total-shipping">
//                 <h5>Total shipping</h5>
//                 <ul>
//                     <li><input type="checkbox"> Standard <span>$20.00</span></li>
//                     <li><input type="checkbox"> Express <span>$30.00</span></li>
//                 </ul>
//                 </div>
//                 <h4 class="grand-totall-title">Grand Total  <span>$260.00</span></h4>
//                 <a target="_blank" href="https://paystack.com/pay/princessluxuryhotels">Proceed to Checkout</a>`;

// grandTotal.innerHTML += total;