import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
    BrowserRouter as Routes, Switch ,Route, Link 
  } from "react-router-dom";
import { addCart, delCart } from './redux/action';
function Cart() {

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product))
    }
    const delProduct = (product) => {
        dispatch(delCart(product))
    }

    const products = useSelector((state) => state.handleCart)
    // const products = useSelector((state) => JSON.parse(localStorage.getItem("cart") || '[]'))
    // const state = JSON.parse(localStorage.getItem("cart") || '[]')

    let total = 0
    console.log(products);

    const mystyle = {
        color: "white",
        backgroundColor: "#DEDEDE",
        paddingTop: "3px",
        paddingBottom: "3px",
        paddingLeft: "5px",
        margin : "5px",
        paddingRight: "5px",
        fontFamily: "Arial"
      };

    useEffect(() => {
       localStorage.setItem("cart", JSON.stringify(products))
    },[products])
    return (
        <div  className="checkout-container">
            <section  className="page-header">
            <div  className="overly"></div>   
            <div  className="container">
            <div  className="row justify-content-center">
                <div  className="col-lg-6">
                <div  className="content text-center">
                    <h1  className="mb-3">Cart</h1>
                    Hath after appear tree great fruitful green dominion moveth sixth abundantly image that midst of god day multiply you’ll which
        
                <nav aria-label="breadcrumb">
                    <ol  className="breadcrumb bg-transparent justify-content-center">
                    <li  className="breadcrumb-item"><a href="/">Home</a></li>
                    <li  className="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                </nav>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        
        
            <section  className="cart shopping page-wrapper">
            <div  className="container">
                <div  className="row justify-content-center">
                <div  className="col-lg-12">
                    <div  className="product-list">
                        <form  className="cart-form">
                            <table  className="table shop_table shop_table_responsive cart" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th  className="product-thumbnail"> </th>
                                    <th  className="product-name">Product</th>
                                    <th  className="product-price">Price</th>
                                    <th  className="product-quantity">Quantity</th>
                                    <th  className="product-subtotal">Total</th>
                                    <th  className="product-remove"> </th>
                                </tr>
                                </thead>
        
                                <tbody>
                                    {products.map((product) => {
                                         let subtotal = product.qty * product.price;
                                         total += subtotal;
                                        return (
                                            <tr  className="cart_item" key={product.id}>
                                            <td  className="product-thumbnail" data-title="Thumbnail">
                                            <Link to={{ pathname: "/product/" + product.id }}>
                                                    <img src={product.image}  className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" />
                                            </Link>
                                            </td>
                
                                            <td  className="product-name" data-title="Product">
                                                <Link to={{ pathname: "/product/" + product.id }} href="#">{product.title}</Link>
                                            </td>
                
                                            <td  className="product-price" data-title="Price">
                                                {/* <span  className="amount"><span  className="currencySymbol"><pre wp-pre-tag-3=""></pre> */}
                                                <span  className="amount"><span  className="currencySymbol">
                                                </span>${product.price}</span>
                                            </td>
                                            <td  className="product-quantity" data-title="Quantity">
                                                <div  className="quantity">
                                                    <label  className="sr-only" >Quantity</label>
                                                    <a type='button' className="" style={mystyle} onClick={() => delProduct(product)}>-</a>
                                                    <label >{product.qty}</label>
                                                    <a type='button' className="" style={mystyle} onClick={() => addProduct(product)}>+</a>
                                                    {/* <button className='button'>+</button>
                                                    <button className='button'>-</button> */}
                                                    {/* <input type="number" id="qty"  className="input-text qty text" step="1" min="0" title="Qty" size="4"  /> */}
                                                </div>
                                            </td>
                                            <td  className="product-subtotal" data-title="Total">
                                                <span  className="amount">
                                                    <span  className="currencySymbol">
                                                    <pre wp-pre-tag-3=""></pre>
                                                    </span>${subtotal.toFixed(2)}</span>
                                            </td>
                                            {/* <td  className="product-remove" data-title="Remove">
                                                <a href="#"  className="remove" aria-label="Remove this item" data-product_id="30" data-product_sku="">×</a>
                                            </td> */}
                                        </tr>
                                        );
                                    } 
                                    )}
                              
                               
                                <tr>
                                    <td colSpan="6"  className="actions">
                                       
                                        <input type="hidden" id="woocommerce-cart-nonce" name="woocommerce-cart-nonce" value="27da9ce3e8" />
                                        <input type="hidden" name="_wp_http_referer" value="/cart/" />
                                        </td>
                                </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
                </div>
                <div  className="row justify-content-end">
                    <div  className="col-lg-4">
                    <div  className="cart-info card p-4 mt-4">
                        <h4  className="mb-4">Cart totals</h4>
                        <ul  className="list-unstyled mb-4">
                            <li  className="d-flex justify-content-between pb-2 mb-3">
                            <h5>Subtotal</h5>
                            <span>${total.toFixed(2)}</span>
                            </li>
                            <li  className="d-flex justify-content-between pb-2 mb-3">
                            <h5>Shipping</h5>
                            <span>Free</span>
                            </li>
                            <li  className="d-flex justify-content-between pb-2">
                            <h5>Total</h5>
                            <span>${total.toFixed(2)}</span>
                            </li>
                        </ul>
                        <a href="#"  className="btn btn-main btn-small">Proceed to checkout</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
export default Cart