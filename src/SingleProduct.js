import React , {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { addCart } from './redux/action';
import {
    BrowserRouter as Routes, Switch ,Route, Link 
} from "react-router-dom";
function SingleProduct() {

    const {id} = useParams();
    console.log('https://fakestoreapi.com/products/' + id);
    const [product , setProduct] = useState([]);
    const [loading , setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product))
    }
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/products/' + id)
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
        console.log(product);
    }, [])
    return (
        <div  className="single-product-container">
            <section  className="page-header">
                <div  className="overly"></div>   
                <div  className="container">
                <div  className="row justify-content-center">
                    <div  className="col-lg-6">
                    <div  className="content text-center">
                        <h1  className="mb-3">Best Quality</h1>
                        <p>You can be sure that you are in the right place to buy a quality product</p>
            
                    <nav aria-label="breadcrumb">
                        <ol  className="breadcrumb bg-transparent justify-content-center">
                        <li  className="breadcrumb-item"><a >shop</a></li>
                        <li  className="breadcrumb-item active" aria-current="page">{product.category}</li>
                        </ol>
                    </nav>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            <section  className="single-product">
                <div  className="container">
                <div  className="row">
                    <div  className="col-md-5">
                        <img src={product.image} alt=""  className="img-fluid" />
                    </div>
                    
                    <div  className="col-md-7">
                    <div  className="single-product-details mt-5 mt-lg-0">
                        <h2>{product.title}</h2>                      
                        <p className="lead fw-bolder">
                            Rating {product.rating && product.rating.rate}
                             <i className="fa fa-star"></i>
                        </p>
                        <hr />
                        
                        <h3  className="product-price">${product.price}</h3>
                        
                        <p  className="product-description my-4 ">
                            {product.description}
                        </p>
                                 
            
                        <div  className="products-meta mt-4">
                        <div  className="product-category d-flex align-items-center">
                            <span  className="font-weight-bold text-capitalize mr-2">Category : </span>
                            <span> {product.category}</span>
                        </div>

                       
                       
                        </div>
                        
                    </div>
                    <button className="btn btn-outline-dark px-2 py-2 mt-5" onClick={() => addProduct(product)}>
                            Add to Cart
                    </button>
                        <Link to={{ pathname: "/cart"}} className="btn btn-dark ms-2 px-3 py-2 mt-5">
                            Go to Cart
                        </Link>
                    </div>

                    
                </div>
            
                
               
                </div>
            </section>
            
            
            {/* <section  className="products related-products section">
                <div  className="container">
                <div  className="row justify-content-center">
                    <div  className="col-lg-6">
                    <div  className="title text-center">
                        <h2>You may like this</h2>
                        <p>The best Online sales to shop these weekend</p>
                    </div>
                    </div>
                </div>
                <div  className="row">
                    <div  className="col-lg-3 col-6" >
                            <div  className="product">
                        <div  className="product-wrap">
                        <a  ><img  className="img-fluid w-100 mb-3 img-first" src="assets/images/322.jpg" alt="product-img" /></a>
                        <a  ><img  className="img-fluid w-100 mb-3 img-second" src="assets/images/444.jpg" alt="product-img" /></a>
                        </div>
            
                        <span  className="onsale">Sale</span>
                        <div  className="product-hover-overlay">
                        <a href="#"><i  className="tf-ion-android-cart"></i></a>
                        <a href="#"><i  className="tf-ion-ios-heart"></i></a>
                            </div>
            
                        <div  className="product-info">
                        <h2  className="product-title h5 mb-0"><a  >Kirby Shirt</a></h2>
                        <span  className="price">
                            $329.10
                        </span>
                        </div>
                    </div>
                    </div>
            
                    <div  className="col-lg-3 col-6" >
                            <div  className="product">
                        <div  className="product-wrap">
                        <a  ><img  className="img-fluid w-100 mb-3 img-first" src="assets/images/111.jpg" alt="product-img" /></a>
                        <a  ><img  className="img-fluid w-100 mb-3 img-second" src="assets/images/222.jpg" alt="product-img" /></a>
                        </div>
            
                        <span  className="onsale">Sale</span>
                        <div  className="product-hover-overlay">
                        <a href="#"><i  className="tf-ion-android-cart"></i></a>
                        <a href="#"><i  className="tf-ion-ios-heart"></i></a>
                            </div>
            
                        <div  className="product-info">
                        <h2  className="product-title h5 mb-0"><a  >Kirby Shirt</a></h2>
                        <span  className="price">
                            $329.10
                        </span>
                        </div>
                    </div>
                    </div>
            
            
                    <div  className="col-lg-3 col-6" >
                            <div  className="product">
                        <div  className="product-wrap">
                        <a  ><img  className="img-fluid w-100 mb-3 img-first" src="assets/images/111.jpg" alt="product-img" /></a>
                        <a  ><img  className="img-fluid w-100 mb-3 img-second" src="assets/images/322.jpg" alt="product-img" /></a>
                        </div>
            
                        <span  className="onsale">Sale</span>
                        <div  className="product-hover-overlay">
                        <a href="#"><i  className="tf-ion-android-cart"></i></a>
                        <a href="#"><i  className="tf-ion-ios-heart"></i></a>
                            </div>
            
                        <div  className="product-info">
                        <h2  className="product-title h5 mb-0"><a  >Kirby Shirt</a></h2>
                        <span  className="price">
                            $329.10
                        </span>
                        </div>
                    </div>
                    </div>
            
                    <div  className="col-lg-3 col-6">
                            <div  className="product">
                        <div  className="product-wrap">
                        <a  ><img  className="img-fluid w-100 mb-3 img-first" src="assets/images/444.jpg" alt="product-img" /></a>
                        <a  ><img  className="img-fluid w-100 mb-3 img-second" src="assets/images/222.jpg" alt="product-img" /></a>
                        </div>
            
                        <span  className="onsale">Sale</span>
                        <div  className="product-hover-overlay">
                        <a href="#"><i  className="tf-ion-android-cart"></i></a>
                        <a href="#"><i  className="tf-ion-ios-heart"></i></a>
                            </div>
            
                        <div  className="product-info">
                        <h2  className="product-title h5 mb-0"><a  >Kirby Shirt</a></h2>
                        <span  className="price">
                            $329.10
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section> */}
        </div>
    )}
export default SingleProduct;