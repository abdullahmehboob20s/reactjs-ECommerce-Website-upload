import React , {createContext, useState} from "react"

export let DataContext = createContext()

let DataProvider = (props) => {
    let [data , setdata] = useState([

        {
            id : 1 ,
            price : 30000,
            title : "Honda Civic",
            disc : "this is imported Honda Civic from england" ,
            image : "https://apollo-singapore.akamaized.net/v1/files/y6u2tve1kiql2-PK/image;s=1080x1080",
            count : 1
        },
        {
            id : 2 ,
            price : 73000,
            title : "samsung s20 fe box",
            disc : "Samsung S20 FE Box Full Blue Colour Brandnew Available Now" ,
            image : "https://apollo-singapore.akamaized.net/v1/files/stxmm8snr22w-PK/image;s=1080x1080",
            count : 1
        },
        {
            id : 3 ,
            price : 325000,
            title : "3 Bds - 4 Ba",
            disc : "Apartment Luxrious Fully Furnished 3 beds Atched bath Jym pool cenima" ,
            image : "https://apollo-singapore.akamaized.net/v1/files/uts3u7ox4h1n-PK/image;s=1080x1080",
            count : 1
        },
        {
            id : 4 ,
            price : 173989,
            title : "2011 - 103,000 km",
            disc : "total genuian condision.neat &cleen" ,
            image : "https://apollo-singapore.akamaized.net/v1/files/xnmp7uq9muza-PK/image;s=1080x1080",
            count : 1
        },
        {
            id : 5 ,
            price : 5999,
            title : "pair of socks",
            disc : "summer socks for men and women are availabel" ,
            image : "https://apollo-singapore.akamaized.net/v1/files/ctvrgzi1zqgc-PK/image;s=1080x1080",
            count : 1
        },
        {
            id : 6 ,
            price : 2000,
            title : "makeup kit",
            disc : "makeup kit suitable for every type of skin" ,
            image : "https://apollo-singapore.akamaized.net/v1/files/bhfmkmlbvddi3-PK/image;s=1080x1080",
            count : 1
        },
        {
            id : 7 ,
            price : 800,
            title : "T-Shirt",
            disc : "T-shirt for men , comfortable for men in summer " ,
            image : "https://apollo-singapore.akamaized.net/v1/files/hxkdkyuly3213-PK/image;s=1080x1080",
            count : 1
        },
        {
            id : 8 ,
            price : 37999,
            title : "honda 70 bike",
            disc : "honda 70 bike available in good price and condition" ,
            image : "https://apollo-singapore.akamaized.net/v1/files/eo6fpaetrymk3-PK/image;s=1080x1080",
            count : 1
        },
        {
            id : 9,
            price : 1495000,
            title : "swift modal unknown",
            disc : "Belta 2007 Import 2012 immaculate conditon" ,
            image : "https://apollo-singapore.akamaized.net/v1/files/991a84lcomra1-PK/image;s=1080x1080",
            count : 1
        },
        {
            id : 10 ,
            price : 9500,
            title : "Acoustic Guitar",
            disc : "best Acoustic Guitar for sale" ,
            image : "https://apollo-singapore.akamaized.net/v1/files/deko4qzz55rj3-PK/image;s=1080x1080",
            count : 1
        },
        {
            id : 11,
            price : 3000,
            title : "PS4 controller",
            disc : "good condition PS4 controller for sale and working controller " ,
            image : "https://apollo-singapore.akamaized.net/v1/files/5nuggx61t5ze3-PK/image;s=1080x1080",
            count : 1
        },
        {
            id : 12,
            price : 20000,
            title : "J6 mobile 4.64 ",
            disc : "J6 mobile 4.64 full oky seet with paking good condition" ,
            image : "https://apollo-singapore.akamaized.net/v1/files/skmtxaifdjrr2-PK/image;s=1080x1080",
            count : 1
        },
    ])
    let [cart,setcart] = useState([])


    let addtocart = (id) => {
        let check = cart.every(item => {
            return item.id !== id
        })
        if(check){
            let newdata = data.filter((item,index)=>{
                return item.id === id
            })
            setcart([...newdata,...cart])
        }
        else{
            alert("item has already been added to your cart")
        }
    }

    let values = {
        data : [data,setdata],
        cart : [cart,setcart],
        addtocart : addtocart,
    }
    return(
        <DataContext.Provider value={values}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider