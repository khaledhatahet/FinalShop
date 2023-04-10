import { useState , useEffect} from 'react';
import {
  BrowserRouter as Routes, Switch ,Route, Link 
} from "react-router-dom";
function Home() {
  
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    let componentMounted = true;
    useEffect(() => {
      const getProducts = async () => {
        console.log(data);
        const response = await fetch("https://fakestoreapi.com/products?limit=8");
        if (componentMounted) {
            setData(await response.clone().json());
            setFilter(await response.json());
         
        }
  
        return () => {
          componentMounted = false;
        }
      }
      getProducts()
      console.log(filter);
    },[]);
    return (
        <div  className="home-container">    
            <div  className="main-slider slider slick-initialized slick-slider">
                    <div   className="slider-item" style={{backgroundImage:"url('assets/images/slideshow1-2.jpg')", backgroundPosition:"50%",backgroundRepeat:"no-repeat"}}>
                        <div  className="container">
                        <div  className="row">
                            <div  className="col-lg-6 col-12 offset-lg-6 offset-md-6">
                            <div  className="slider-caption">
                                <h1  className="mt-2 mb-5"><span  className="text-color">Welcome </span>to shop</h1>
                                <Link to={{ pathname: "/shop"}} className="btn btn-main">Shop Now</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
          
            <section  className="section products-main">
                <div  className="container">
                    <div  className="row justify-content-center">
                        <div  className="col-lg-8">
                            <div  className="title text-center">
                                <h2>New arrivals</h2>
                                <p>The best Online sales to shop these weekend</p>
                            </div>
                        </div>
                    </div>
            
            
                <div  className="row">
                {filter.map((product) => {
                    return (
                         <div  className="col-lg-3 col-12 col-md-6 col-sm-6 mb-5" key={product.id}>
                    <div  className="product">
                        <div  className="product-wrap">
                            <Link to={{ pathname: "/product/" + product.id }}><img  className="card-img-top" src={product.image} alt={product.title} height="350"/></Link>
                        </div>
                        <div  className="product-info">
                            <h2  className="product-title h5 mb-0"><a href="#">{product.title.substring(0,25)}</a></h2>
                            <span  className="price">
                                ${product.price}
                            </span>
                        </div>
                    </div>
                    </div>
                    )
                })}
              
                </div>
                </div>
            </section>

            <section  className="features border-top">
            <div  className="container">
                <div  className="row">
                <div  className="col-lg-3 col-sm-6 col-md-6">
                    <div  className="feature-block">
                    <div  className="content">
                        <h5>Free Shipping</h5>
                        <p>On all order over $39.00</p>
                    </div>
                    </div>
                </div>
                <div  className="col-lg-3 col-sm-6 col-md-6">
                    <div  className="feature-block">
                    <div  className="content">
                        <h5>30 Days Return</h5>
                        <p>Money back Guarantee</p>
                    </div>
                    </div>
                </div>
                <div  className="col-lg-3 col-sm-6 col-md-6">
                    <div  className="feature-block">
                    <div  className="content">
                        <h5>Secure Checkout</h5>
                        <p>100% Protected by paypal</p>
                    </div>
                    </div>
                </div>
                <div  className="col-lg-3 col-sm-6 col-md-6">
                    <div  className="feature-block">
                    <div  className="content">
                        <h5>24/7 Support</h5>
                        <p>All time customer support </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}
export default Home;