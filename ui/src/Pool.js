import React from 'react'

export const Pool = ({product}) => {


    const addToCart = () => {
    }
  return (
    <div>
            <div style={{width: '20em', margin: '1em'}} onclick={addToCart(product.name, product.image, product.price)} class="custom-col-5">
            <div class="product-wrapper mb-25">
                <div class="product-img">
                    <a href="#product-details">
                        <img src={product.image} alt="" style={{width: '20em'}} />
                    </a>
                    <div class="product-action">
                        <div class="pro-action-left">
                            <a href='e' onclick={addToCart(product)} title="Add To Cart"><i class="ion-android-cart"></i> Add To Cart </a>
                        </div>
                        <div class="pro-action-right">
                            <a title="Wishlist" href="#wishlist"><i class="ion-ios-heart-outline"></i></a>
                            <a href='r' title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="ion-android-open"></i></a>
                        </div>
                    </div>
                </div>
                <div class="product-content">
                    <h4>
                        <a href="#product-details">{product.name}</a>
                    </h4>
                    <div class="product-price-wrapper">
                        <span>&#8358;{product.price}</span>
                        <span class="product-price-old">{(product.avalaible !== undefined) ? product.avalaible : ''}</span>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}
