const productTemplate = (productList) => `
<table class="table stats-table ">
                                <thead>
                                    <tr>
                                        <th>S.NO</th>
                                        <th>PRODUCT</th>
                                        <th>CATEGORY</th>
                                        <th>PRICE</th>
                                        <th>STOCK</th>
                                    </tr>
                                </thead>
                                <tbody>
                                ${productList.map((prod, idx) => (
                                    `<tr>
                                        <th scope="row">${idx + 1}</th>
                                        <td>${prod.name}</td>
                                        <td><span class="label label-success">${prod.category}</span></td>
                                        <td><span class="label label-warning">${prod.type}</span></td>
                                        <td><span class="label label-info">N${prod.price}</span></td>
                                        <td>
                                            <h5>${prod.quantity} <!--<i class="fa fa-level-up"></i>--></h5>
                                        </td>
                                    </tr>`
                                    ))}
                                <!--    <tr>
                                        <th scope="row">2</th>
                                        <td>Aliquam</td>
                                        <td><span class="label label-warning">New</span></td>
                                        <td>
                                            <h5>35% <i class="fa fa-level-up"></i></h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Lorem ipsum</td>
                                        <td><span class="label label-danger">Overdue</span></td>
                                        <td>
                                            <h5 class="down">40% <i class="fa fa-level-down"></i></h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Aliquam</td>
                                        <td><span class="label label-info">Out of stock</span></td>
                                        <td>
                                            <h5>100% <i class="fa fa-level-up"></i></h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Lorem ipsum</td>
                                        <td><span class="label label-success">In progress</span></td>
                                        <td>
                                            <h5 class="down">10% <i class="fa fa-level-down"></i></h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Aliquam</td>
                                        <td><span class="label label-warning">New</span></td>
                                        <td>
                                            <h5>38% <i class="fa fa-level-up"></i></h5>
                                        </td>
                                    </tr>-->
                                </tbody>
                            </table>`;
                            
const productList = JSON.parse(localStorage.getItem('products'));
console.log(productList);
const productDisplay = document.getElementById('stats-last-agile');
productDisplay.innerHTML = productList ? productTemplate(productList) : 'Not Authorized, please refresh';
