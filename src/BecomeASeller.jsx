import React, { useState , useContext } from "react"
import {DataContext} from "./DataProvider"
import shortid from "shortid"
import {useHistory} from "react-router-dom"

let BecomeASeller = (props) => {
    let values = useContext(DataContext)
    let [data,setdata] = values.data
    let history = useHistory()
    let [inputdata,setinputdata] = useState({
        title : "",
        price : null , 
        image : "",
        disc : "",
    })
    let [image,setimage] = useState("")

    let inputvalues = (e)=>{
        setinputdata({
            ...inputdata,
            [e.target.name] : e.target.value
        })
    }

    let submitingData = (e) => {
        e.preventDefault()
        if(inputdata.title == "" || inputdata.price == "" || inputdata.image == "" || inputdata.disc == "" ){
            alert("please complete all inputs")
        }
        else{
            let obj = {
                id : shortid.generate(),
                title : inputdata.title,
                price : inputdata.price, 
                image : inputdata.image,
                disc : inputdata.disc,
                count : 1
            }
            setdata([obj , ...data])
            setinputdata({
                title : "",
                price : "" , 
                image : null,
                disc : "",
            })
            setimage("")
            history.push("/")

        }
    }

    let uploadimagefunc = (e)=> {
        let src = URL.createObjectURL(e.target.files[0])
        setimage(src)
        setinputdata({
            ...inputdata,
            image : src
        })
    }
    return(
        <div className="Seller">
            <h2>add your product</h2>
            <div className="setimage">
                    <img src={image} style={{display : image === "" ? "none" : "inline"}} alt="" width="200"/>
                     <label htmlFor="imageupload" style={{backgroundColor : image === "" ? "#f4fa9c" : "#e2f3f5"}}>{image !== "" ? "change image" : "upload image"}</label>
            </div>
            <form className="form" onSubmit={submitingData}>
                <input type="file" accept="image/*" onChange={uploadimagefunc} name="" id="imageupload" style={{display : "none"}} />
                <input type="text" onChange={inputvalues} placeholder="enter title of your product" value={inputdata.title} maxLength="25" name="title" id=""/>
                <input type="number" onChange={inputvalues} placeholder="enter price of the product" value={inputdata.price} name="price" id=""/>
                <textarea onChange={inputvalues} placeholder="enter dicription of your product" value={inputdata.disc} name="disc" id="" cols="30" rows="3"></textarea>
                <button type="submit" style={{outline : "none"}}>submit</button>
            </form>
        </div>
    )
}

export default BecomeASeller