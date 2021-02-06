import React , {useContext, useEffect} from "react"
import {useParams , useHistory} from "react-router-dom"
import {DataContext} from "./DataProvider"

let ShowProduct = (props) => {
    let values = useContext(DataContext)
    let [data,setdata] = values.data
    let {id} = useParams()
    let history = useHistory()
    let product = data.filter((card,index)=> {
        return card.id == id
     })
     
    return(
        <div className="showMain">
            <div className="showimage">
                <img src={product[0].image}  alt=""/>
            </div>
            <div className="showContent">
                <h1>Rs : <span style={{color : "skyblue"}}>{product[0].price}</span></h1>
                <h3>{product[0].title}</h3>
                <p>{product[0].disc}</p>
                <button className="button1"  onClick={() => values.addtocart(product[0].id)}>add to cart</button>
                <button className="button2"  onClick={() => history.goBack()}>Go back to shopping</button>
            </div>
        </div>
    )
}

export default ShowProduct