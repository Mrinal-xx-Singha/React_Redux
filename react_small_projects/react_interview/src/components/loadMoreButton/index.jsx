import { useState,useEffect } from "react"
import "./index.css"





const LoadMoreBtn = () => {
  const [laoding,setLoading] =useState(false)
  const[products,setProducts]=useState([])
  const[count,setCount]=useState(0)
  const[disableButton,setDisableButton] =useState(false)
  


    async function fetchProducts (){
        try{
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0:count + 20}`)
            const result = await response.json()

            if(result && result.products && result.products.length){
                setProducts((prevData) =>[...prevData,...result.products])
                setLoading(false)
            }

        }catch(error){
            console.log(error)
            setLoading(false)

        }
    }

  useEffect(()=>{
    fetchProducts() 
  },[count])
  useEffect(()=>{
    if(products && products.length === 100)setDisableButton(true)

  },[products])

  if(laoding){
    return <div>Loading Data Please Wait</div>
  }


    return (
    <div className="load-more-container">
        <div className="product-container">
            {products && products.length ?
            products.map(item =><div
                className="product"
             key={item.id}>
                <img
                src={item.thumbnail}
                alt={item.title}
                />
                <p>{item.title}</p>
                
            </div>)
            
            :null
            
        }
        </div>
        <div className="button-container">
            <button
            disabled={disableButton}
            onClick={()=>setCount(count+1)}
            >Load More Products</button>
            {
                disableButton ? <h3>You Have Reached 200hundred Products</h3> : null
            }
        </div>

        
    </div>
  )
}

export default LoadMoreBtn