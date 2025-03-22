import './style.css'
import product from "./api/products.json";
import { showProductContainer } from './productcontainer';
import { shopproductcontainer } from './shop';

shopproductcontainer(product)
showProductContainer(product)
