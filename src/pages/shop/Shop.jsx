import {PRODUCTS} from "../../Products"
import { Product } from "./Product"
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h3>Renu's Shop</h3>
      </div>
      <div className="products">
        {PRODUCTS.map((product)=>{
          <Product data={product}/>
        })}
      </div>
    </div>
  )
}