import Product from '../components/Product';
import "./Catalog.css";
import { catalog, categories } from '../services/DataService';
import GlobalContext from '../context/GlobalContext';
import { useContext } from 'react';

function Catalog(){

    const catalogGlobal = useContext(GlobalContext).catalog;

    return (
       <div className="catalog">
            <h1>Check our amazing Catalog!</h1>

            <div className='filter-list'>
                {categories.map(cat => <button className='btn btn-sm btn-success'>{cat}</button>)}
            </div>

            <div className='product-list'>
                {catalogGlobal.map(prod => <Product data={prod} />)}
           </div>

       </div>
    );
}

export default Catalog;