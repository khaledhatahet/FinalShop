import { useState , useEffect} from 'react';
import {
  BrowserRouter as Routes, Switch ,Route, Link 
} from "react-router-dom";
//import ReactDOM from "react-dom";
function Shop() { 
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] =useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      console.log(data);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      }
    }
    getProducts()
  },[]);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  return (
    <div className="shop-container">
      <section className="page-header">
        <div className="overly"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="content text-center">
                <h1 className="mb-3">Shop</h1>
                <p>
                  Hath after appear tree great fruitful green dominion moveth
                  sixth abundantly image that midst of god day multiply you’ll
                  which
                </p>

                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-transparent justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Shop
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="buttons d-flex justify-content-center mt-5">
        <button className="btn btn-outline-dark" onClick={() => setFilter(data)}>All</button>
        <button className="btn btn-outline-dark" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark" onClick={() => filterProduct("women's clothing")}>Womens's Clothing</button>
        <button className="btn btn-outline-dark" onClick={() => filterProduct("jewelery")}>Jewelery</button>
        <button className="btn btn-outline-dark" onClick={() => filterProduct("electronics")}>Electronic</button>
      </div>

      <section className="products-shop section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row align-items-center">
                <div className="col-lg-12 mb-4 mb-lg-0">
                  <div className="section-title">
                    <h2 className="d-block text-left-sm">Shop</h2>
                  </div>
                </div>
              </div>

              <div className="row">
             
                {filter.map((product) => {
                    return (
                        <div key={product.id} className="col-lg-3 col-12 col-md-4 col-sm-6 mb-5">
                        <div className="product">
                          <div className="product-wrap">
                            {/* <a href="/product-single"> */}
                            <Link to={{ pathname: "/product/" + product.id }}>
                              <img
                                class="card-img-top"
                                src={product.image}
                                alt={product.title}
                                height="350"
                              />
                            {/* </a> */}
                            </Link>
                          </div>
      
                          {/* <div className="product-hover-overlay">
                            <a href="#">
                              <i className="tf-ion-android-cart"></i>
                            </a>
                            <a href="#">
                              <i className="tf-ion-ios-heart"></i>
                            </a>
                          </div> */}
      
                          <div className="product-info">
                            <h2 className="product-title h5 mb-0">
                              <Link to={{ pathname: "/product/${product.id}"}}>{product.title.substring(0,25)}</Link>
                              {/* {product.title} */}
                            </h2>
                            <span className="price">${product.price}</span>
                          </div>
                        </div>
                      </div>
                    )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Shop;
