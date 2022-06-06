// const moment = require('moment');
// const timeFormat = moment().format(); 
// console.log(timeFormat);

const template = (order) => `
<div class="notify-w3ls">
<div class="alert alert-info clearfix">
    <span class="alert-icon"><i class="fa fa-bell-o"></i></span>

    <div class="notification-info">
        <div class="panel-body">
            <ul class="clearfix notification-meta">
                <li class="pull-left notification-sender"><span><h5
                    ><a href="#">Status: ${order.status}</a></span><br>Location: ${order.location} </h5>
                </li>

                <li class="pull-right notification-time">${new Date(order.createdAt).toLocaleString()}</li>

            </ul>
            <h5>
                Table No: ${order.tableNumber}
            </h5>
            <h5>
                Value: ${order.totalValue}
            </h5>
            <td>

                <td>
                    <li id="header_inbox_bar" class="dropdown">
                        <div data-toggle="dropdown" class="dropdown-toggle" href="#">

                            <a href="#myModal-1" class="btn btn-warning">
                                Products
                            </a>

                        </div>
                        <a onclick="pickOrder()" data-toggle="modal" class="btn btn-warning"> Service </a>

                        <ul class="dropdown-menu extended inbox">
                            <li>
                                <p class="red"></p>
                            </li>
                          ${order.products.map(product => (
                            `<li>
                                <a href="/">
                                    <span class="photo"><img alt="avatar" src="../${product.imageUrl}" /></span>
                                    <span class="subject">
                                    <span class="from">${product.name}</span>
                                    <span class="time">&#8358;${product.price}</span>
                                    </span>
                                    <span class="message">${product.category}</span>
                                </a>
                            </li>`
                          ))}
                            
                            <li>
                                <a href="#">See all messages</a>
                            </li>
                        </ul>
                    </li>

                </td>
            </td>
            <!---->

            <div class="position-center ">

                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal-1" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                <h4 class="modal-title">Form Tittle</h4>
                            </div>
                            <div class="modal-body">

                                <form class="form-horizontal" role="form">
                                    <div class="form-group">
                                        <label for="inputEmail1" class="col-lg-2 col-sm-2 control-label">Email</label>
                                        <div class="col-lg-10">
                                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword1" class="col-lg-2 col-sm-2 control-label">Password</label>
                                        <div class="col-lg-10">
                                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-lg-offset-2 col-lg-10">
                                            <div class="checkbox">
                                                <label>
                <input type="checkbox"> Remember me
            </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-lg-offset-2 col-lg-10">
                                            <button type="submit" class="btn btn-default">Sign in</button>
                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--End -->
    </div>
    </div>`;
    
    const orderList = document.getElementById('form-w3layouts');
    orderList.innerHTML = '';
    
    
const token = localStorage.getItem('jwt');

function pickOrder() {
    console.log('Order picked!');
}
async function getOrders() {
    const res = await fetch('http://localhost:8000/orders', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', Authorization:`Bearer ${token}`}}
        );
        const data = await res.json();
    console.log(data.data);

    localStorage.setItem('orders', JSON.stringify(data.data));
    if(data.data) {
        JSON.parse(localStorage.getItem('orders')).forEach(order => {
            orderList.innerHTML += template(order);
        });
    }
}
getOrders();

// window.document.location.href = './login.html';