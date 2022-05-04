console.log('Shopping Cart');
const cartList = document.getElementById('cart-list');

console.log(JSON.parse(localStorage.getItem('cartProducts')) ? 'from local storage' : 'empty storage');
const cartItems = JSON.parse(localStorage.getItem('cartProducts')); 
console.log(cartItems)

const carts = (product) => `
                            <tr>
                                <td class="product-thumbnail">
                                    <a href="#"><img src="${product.image}" class="cart-img" alt=""></a>
                                </td>
                                <td class="product-name"><a href="#">${product.name} </a></td>
                                <td class="product-price-cart"><span class="amount">$${product.price}</span></td>
                                <td class="product-quantity">
                                    <div class="cart-plus-minus">
                                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="${product.quantity}">
                                    </div>
                                </td>
                                <td class="product-subtotal">$${product.quantity * product.price}</td>
                                <td class="product-remove">
                                    <a href="#"><i class="fa fa-pencil"></i></a>
                                    <a href="#"><i class="fa fa-times"></i></a>
                                </td>   
                            </tr>
                            `;
                
cartItems.forEach(product => {
    cartList.innerHTML += carts(product)
});
