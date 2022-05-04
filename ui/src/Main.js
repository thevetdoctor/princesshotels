import './assets/css/style.css';

function App() {
  return (
    <div className="App">
    Main
    <div class="slider-area">
            <div class="slider-active owl-dot-style owl-carousel">
                <div class="single-slider pt-210 pb-220 bg-img" style={{backgroundImage: ('assets/images/lounge/frontview.PNG')}}>
                    <div class="container">
                        <div class="slider-content slider-animated-1">
                            <h1 class="animated">Princess Luxury Hotels</h1>
                            <h3 class="animated">a taste of Luxury</h3>
                            <div class="slider-btn mt-90">
                                <a class="animated" href="https://www.google.com">Check it out</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="single-slider pt-210 pb-220 bg-img" style={{}}>
                    <div class="container">
                        <div class="slider-content slider-animated-1">
                            <h1 class="animated">Princess Luxury Hotels</h1>
                            <h3 class="animated">a taste of Luxury</h3>
                            <div class="slider-btn mt-90">
                                <a class="animated" href="https://www.google.com">Check it out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="banner-area row-col-decrease pt-100 pb-75 clearfix">
            <div class="container">
                <div class="banner-left-side mb-20">
                    <div class="single-banner">
                        <div class="hover-style">
                            <a href="resturant.html"><img src="assets/images/Banner/rest-frank.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div class="banner-right-side mb-20">
                    <div class="single-banner mb-20">
                        <div class="hover-style">
                            <a href="grillkitchen.html"><img src="assets/images/Banner/Grill-Kitchen.jpg" alt="" /></a>
                        </div>
                    </div>
                    <div class="single-banner">
                        <div class="hover-style">
                            <a href="lounge.html"><img src="assets/images/Banner/Caesar-Lounge.jpg" alt="" /></a>
                        </div>
                    </div>
                    
                </div>
                <div class="banner-left-side mb-20">
                    <div class="single-banner">
                        <div class="hover-style">
                            <a href="klubb/welcome.html"><img src="assets/images/Banner/Untitled-1.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div class="banner-right-side mb-20">
                    <div class="single-banner mb-20">
                        <div class="hover-style">
                            <a href="pool.html"><img src="assets/images/Banner/frank-princess.jpg" alt="" /></a>
                        </div>
                    </div>
                    <div class="single-banner">
                        <div class="hover-style">
                            <a href="gardenbar.html"><img src="assets/images/Banner/GB-frank.jpg" alt="" /></a>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>

        <div class="footer-area black-bg-2 pt-70">
            <div class="footer-top-area pb-18">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="footer-about mb-40">
                                <div class="footer-logo">
                                    <a href="index.html">
                                        <img src="assets/images/Banner/Princess-white.png" alt="" />
                                    </a>
                                </div>
                                <p>Princess Luxury Hotels has the friendly and relaxing hotel accommodation you need and has been home to the great and the good, the intellectual elite, the cream de la cream and thousands of discerning guests.</p>
                                <div class="payment-img">
                                    <a href="https://www.google.com">
                                        <img src="assets/img/icon-img/payment.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                       
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="footer-widget mb-40">
                                <div class="footer-title mb-22">
                                    <h4>Get in touch</h4>
                                </div>
                                <div class="footer-contact">
                                    <ul>
                                        <li>Address: 123 Main Your address goes here.</li>
                                        <li>Telephone Enquiry: (012) 800 456 789-987 </li>
                                        <li>Email: <a href="https://www.google.com">Info@example.com</a></li>
                                    </ul>
                                </div>
                                <div class="mt-35 footer-title mb-22">
                                    <h4>Get in touch</h4>
                                </div>
                                <div class="footer-time">
                                    <ul>
                                        <li>Open:  <span>8:00 AM</span> - Close: <span>18:00 PM</span></li>
                                        <li>Saturday - Sunday: <span>Close</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom-area border-top-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-7">
                            <div class="copyright">
                                <p>&copy; 2022 <strong> Princess Luxury </strong> designed by <a href="https://www.google.com"><strong>Frankenstein services</strong></a></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-5">
                            <div class="footer-social">
                                <ul>
                                    <li><a href="https://www.google.com"><i class="ion-social-facebook"></i></a></li>
                                    <li><a href="https://www.google.com"><i class="ion-social-twitter"></i></a></li>
                                    <li><a href="https://www.google.com"><i class="ion-social-instagram-outline"></i></a></li>
                                    <li><a href="https://www.google.com"><i class="ion-social-googleplus-outline"></i></a></li>
                                    <li><a href="https://www.google.com"><i class="ion-social-rss"></i></a></li>
                                    <li><a href="https://www.google.com"><i class="ion-social-dribbble-outline"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-5 col-sm-5 col-xs-12">

                            <div class="tab-content">
                                    <div id="pro-1" class="tab-pane fade show active">
                                        <img src="assets/img/product-details/product-detalis-l1.jpg" alt="" />
                                    </div>
                                    <div id="pro-2" class="tab-pane fade">
                                        <img src="assets/img/product-details/product-detalis-l2.jpg" alt="" />
                                    </div>
                                    <div id="pro-3" class="tab-pane fade">
                                        <img src="assets/img/product-details/product-detalis-l3.jpg" alt="" />
                                    </div>
                                    <div id="pro-4" class="tab-pane fade">
                                        <img src="assets/img/product-details/product-detalis-l4.jpg" alt="" />
                                    </div>
                                </div>

                                <div class="product-thumbnail">
                                    <div class="thumb-menu owl-carousel nav nav-style" role="tablist">
                                        <a class="active" data-bs-toggle="tab" href="#pro-1"><img src="assets/img/product-details/product-detalis-s1.jpg" alt="" /></a>
                                        <a data-bs-toggle="tab" href="#pro-2"><img src="assets/img/product-details/product-detalis-s2.jpg" alt="" /></a>
                                        <a data-bs-toggle="tab" href="#pro-3"><img src="assets/img/product-details/product-detalis-s3.jpg" alt="" /></a>
                                        <a data-bs-toggle="tab" href="#pro-4"><img src="assets/img/product-details/product-detalis-s4.jpg" alt="" /></a>
                                    </div>
                                </div>

                                </div>
                            <div class="col-md-7 col-sm-7 col-xs-12">
                                <div class="modal-pro-content">
                                    <h3>PRODUCTS NAME HERE </h3>
                                    <div class="product-price-wrapper">
                                        <span>$120.00</span>
                                        <span class="product-price-old">$162.00 </span>
                                    </div>
                                    <p>Princess Luxury Hotels and Tourism has been elegantly crafted and prearranged to achieve a measure of comfortable luxury to satisfy the senses of every guest from all over the world.</p>	
                                    <div class="quick-view-select">
                                        <div class="select-option-part">
                                            <label>Size*</label>
                                            <select class="select">
                                                <option value="">S</option>
                                                <option value="">M</option>
                                                <option value="">L</option>
                                            </select>
                                        </div>
                                        <div class="quickview-color-wrap">
                                            <label>Color*</label>
                                            <div class="quickview-color">
                                                <ul>
                                                    <li class="blue">b</li>
                                                    <li class="red">r</li>
                                                    <li class="pink">p</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-quantity">
                                        <div class="cart-plus-minus">
                                            <input class="cart-plus-minus-box" type="text" name="qtybutton" value="02" />
                                        </div>
                                        <button>Add to cart</button>
                                    </div>
                                    <span><i class="fa fa-check"></i> In stock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default App;
