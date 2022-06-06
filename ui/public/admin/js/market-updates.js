const template = (visitorCount = 10, userCount = 15, sales = 350000, orderCount = 25) => `
                <div class="col-md-3 market-update-gd">
                <div class="market-update-block clr-block-2">
                    <div class="col-md-4 market-update-right">
                        <i class="fa fa-eye"> </i>
                    </div>
                    <div class="col-md-8 market-update-left">
                        <h4>Visitors</h4>
                        <h3>${visitorCount}</h3>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                </div>
                <div class="col-md-3 market-update-gd">
                <div class="market-update-block clr-block-1">
                    <div class="col-md-4 market-update-right">
                        <i class="fa fa-users"></i>
                    </div>
                    <div class="col-md-8 market-update-left">
                        <h4>Users</h4>
                        <h3>${userCount}</h3>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                </div>
                <div class="col-md-3 market-update-gd">
                <div class="market-update-block clr-block-3">
                    <div class="col-md-4 market-update-right">
                        <i class="fa fa-usd"></i>
                    </div>
                    <div class="col-md-8 market-update-left">
                        <h4>Sales</h4>
                        <h3>${sales}</h3>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                </div>
                <div class="col-md-3 market-update-gd">
                <div class="market-update-block clr-block-4">
                    <div class="col-md-4 market-update-right">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                    <div class="col-md-8 market-update-left">
                        <h4>Orders</h4>
                        <h3>${orderCount}</h3>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                </div>
                <div class="clearfix"> </div>`;

const marketUpdates = document.getElementById('market-updates');


const token = localStorage.getItem('jwt');

async function getProducts() {
    const res = await fetch('http://localhost:8000/products', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', Authorization:`Bearer ${token}`}}
        );
        const data = await res.json();
        // console.log(data.data);
        if(data.data) {
            localStorage.setItem('products', JSON.stringify(data.data));
        }
}
getProducts();

async function getUsers() {
    const res = await fetch('http://localhost:8000/auth/users', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', Authorization:`Bearer ${token}`}}
        );
        const data = await res.json();
    // console.log(data.data);
    totalUsers = data.data.length;
    localStorage.setItem('totalUsers', data.data.length);
}
getUsers();

async function getOrders() {
    const res = await fetch('http://localhost:8000/orders', {
        method: 'GET',
        headers: {'Content-Type': 'application/json', Authorization:`Bearer ${token}`}}
        );
        const data = await res.json();
    // console.log(data.data);
    totalOrders = data.data.length;
    localStorage.setItem('totalOrders', data.data.length);
    totalSales = data.data.map(x => parseInt(x.totalValue)).reduce((a, b) => a + b, 0);
    console.log(totalSales);
    localStorage.setItem('totalSales', totalSales);
}
getOrders();

let totalUsers = localStorage.getItem('totalUsers');
let totalSales = localStorage.getItem('totalSales');
let totalOrders = localStorage.getItem('totalOrders');

console.log(totalUsers, totalUsers, totalSales, totalOrders);
marketUpdates.innerHTML = template(totalUsers, totalUsers, totalSales, totalOrders);
