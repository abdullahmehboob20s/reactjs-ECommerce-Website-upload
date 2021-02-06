import React , {useContext , useEffect , useState} from "react"
import {DataContext} from ".//DataProvider"
import CancelIcon from '@material-ui/icons/Cancel';

let Cart = (props) => {
    let values = useContext(DataContext)
    let [total,settotal] = useState(0)
    let [cart,setcart] = values.cart
    let deleteCart = (id) => {
        setcart(cart.filter(item => {
            return item.id !== id
        }))
    }
    useEffect(() => {
        let res = cart.reduce((initial , item) => {
            return item.price * item.count + initial
        },0)
        settotal(res)
    },[cart])

   let addCount = (id) => {
       cart.forEach(item => {
           if(item.id === id){
               item.count += 1
           }
       })
       setcart([...cart])
   }

   let subCount = (id) => {
       cart.forEach(item => {
           if(item.id === id){
               item.count === 1 ? (item.count = 1) : (item.count -= 1)
           }
       })
       setcart([...cart])
   }

   if(cart.length !== 0){
       return (
           <div className="Cart">
            {cart.map((product , index)=> {
                return(
                    <div key={index} className="CartMain">
                        <div className="CrossIcon">
                            <CancelIcon style={{cursor : "pointer"}} color="secondary" onClick={() => deleteCart(product.id)} />
                        </div>
                        <div className="CartImage">
                            <img src={product.image} alt=""/>
                        </div>
                        <div className="CartContent">
                            <h2>Rs : <span style={{color : "skyblue"}}>{product.price}</span></h2>
                            <h3>{product.title}</h3>
                            <p>{product.disc}</p>
                            <div style={{color : "grey"}}>
                                <button className="span1" onClick={() => subCount(product.id)}>-</button > {product.count} <button className="span2" onClick={() => addCount(product.id)} >+</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="BottomCartHeader">
                <h1>Total Price : <span style={{color : "rgb(255, 140, 140)"}}>{total}</span></h1>
                <div style={{display : "flex"}}>
                        <button className="payment">payment</button>
                        <button className='ClearCart' onClick={() => setcart([])}>clear Cart</button>
                </div>
                </div>
            </div>
       )
    }
    else {
        return( 
        <div className="CartMiddle">
            <h1>Cart is empty</h1>
        </div>
        )
    }
}

export default Cart