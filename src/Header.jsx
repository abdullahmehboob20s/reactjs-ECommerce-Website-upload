import React , {useContext} from "react"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link , NavLink} from "react-router-dom"
import {DataContext} from "./DataProvider"

let Header = (props) => {
    let values = useContext(DataContext)
    let [cart,setcart] = values.cart
    return(
        <div className="navbar">
            <h1>abdullah mehboob</h1>
            <div className="navbarli">
            <NavLink className="productli" exact to="/" >
                <h4>Products</h4>
            </NavLink >
            <NavLink className="productli" exact to="/BecomeASeller"  >
                <h4>Become a seller</h4>
            </NavLink>
                <NavLink className="productli" exact to="/Cart">
                    <div className="carticon" >
                        <ShoppingCartIcon color="primary" />
                        <span> {cart.length} </span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header