import ReactDOM from 'react-dom';
import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    let componentMounted = true;
    useEffect(() => {
      const getProducts = async () => {
        console.log(data);
        const response = await fetch("https://fakestoreapi.com/products/categories");
        if (componentMounted) {
          setData(await response.clone().json());
          setFilter(await response.json());
          console.log(filter);
        }
  
        return () => {
          componentMounted = false;
        }
      }
      getProducts()
    },[]);

    return (
        <div  className="footer-container" >
            <footer  className="footer">
                <div  className="container">
                <div  className="row">
                        <div  className="col-md-6 col-lg-4 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left mr-auto">
                        <div  className="footer-widget">
                                <h4  className="mb-4">Shop</h4>
                                <p  className="lead">You can be sure that you are in the right place to buy a quality product</p>
                                
                                <div  className="">
                                    <p  className="mb-0"><strong>Location : </strong>İstanbul / Turkey</p>
                                    <p><strong>Support Email : </strong> khaled.hatahet@gmail.com</p>
                                </div>
                        </div>
                        </div>
            
                        <div  className="col-md-6 col-lg-2 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left">
                            <div  className="footer-widget">
                            <h4  className="mb-4">Category</h4>
                            <ul  className="pl-0 list-unstyled mb-0">
                                {filter.map((category) => {
                                    return(
                                        <li key={category}><Link  to={{ pathname: "/shop"}}>{category}</Link></li>
                                    )
                                })}
                          
                            </ul>
                        </div>
                        </div>
            
                        <div  className="col-md-6 col-lg-2 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left">
                            <div  className="footer-widget">
                            <h4  className="mb-4">Useful Link</h4>
                            <ul  className="pl-0 list-unstyled mb-0">
                            <li><Link  to={{ pathname: "/"}}>Home</Link></li>
                            <li><Link  to={{ pathname: "/shop"}}>Shop</Link></li>
                           
                            </ul>
                                </div>
                        </div>
            
                      
                    </div>
                </div>
            </footer>
            
            
           
        </div>
   );
}
export default Footer;