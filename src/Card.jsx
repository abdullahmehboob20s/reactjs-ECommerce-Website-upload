import React, { useContext , useState } from "react"
import "./App.css"
import { DataContext } from "./DataProvider"
import {useHistory} from "react-router-dom"

let Cards = (props) => {
    let values = useContext(DataContext)
    let [data , setdata] = values.data
    let history = useHistory()

   

    return (
        <>
            {
                data.map((card, index) => {
                    return (
                        <div className="card" onClick={() => history.push(`/ShowProduct/${card.id}`)}>
                            <div className="imagebox">
                                <img src={card.image} alt="" />
                            </div>
                            <div className="content">
                                <h2>Rs : <span style={{ color: "skyblue" }}> {card.price} </span></h2>
                                <h3>{card.title}</h3>
                                <h5 >{card.disc}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Cards