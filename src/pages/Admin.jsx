import { useState, useContext } from "react";
import "./Admin.css";
import GlobalContext from "../context/GlobalContext";

function Admin() {
    const addProductToCatalog = useContext(GlobalContext).addProductToCatalog;
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code:'',
        discount:0,
    });
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState({
        title:'',
        price:0,
        category:'',
        image:''
    });

    function handleCouponChange(e){
        let name = e.target.name;
        let copy = {...coupon};
        copy[name] = e.target.value;
        setCoupon(copy);
    }

    function handleProductsChange(e){
        let name = e.target.name;
        let copy = {...products};
        copy['price'] = parseFloat(copy['price']);
        copy[name] = e.target.value;
        setProducts(copy);
    }

    function saveCoupon(){
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    function saveProducts(){
        let copy = [...allProducts];
        copy.push(products);
        setAllProducts(copy);
        addProductToCatalog(products);
    }

    return (
        <div className="admin">
            <h1>Store administration</h1>

            <div className="parent">

                <div className="products">
                    <h4>Manage Products</h4>

                    <div>
                        <label className='form-label'>Title</label>
                        <input onBlur={handleProductsChange} name="title" type="text" />
                    </div>

                    <div>
                        <label className='form-label'>Price</label>
                        <input onBlur={handleProductsChange} name="price" type="text" />
                    </div>

                    <div>
                        <label className='form-label'>Image</label>
                        <input onBlur={handleProductsChange} name="image" type="text" />
                    </div>

                    <div>
                        <label className='form-label'>Category</label>
                        <input onBlur={handleProductsChange} name="category" type="text" />
                    </div>

                    <div>
                        <button onClick={saveProducts} className='btn btn-dark'>Save Product</button>
                    </div>
                    {allProducts.map((prod)=>(
                        <p key={prod.title}>
                            {prod.title} - {prod.price}
                        </p>
                    ))}

                </div>

                <div className="coupons">
                    <h4>Manage Coupons</h4>

                    <div>
                        <label className='form-label'>Code</label>
                        <input onBlur={handleCouponChange} name="code" type="text" />
                    </div>

                    <div>
                        <label className='form-label'>Discount</label>
                        <input onBlur={handleCouponChange} name="discount" type="number"  />
                    </div>

                    <div>
                        <button onClick={saveCoupon} className='btn btn-dark'>Save Coupon</button>
                    </div>
                    {allCoupons.map((coupon)=>(
                        <p key={coupon.code}>
                            {coupon.code} - {coupon.discount}
                        </p>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Admin;



























