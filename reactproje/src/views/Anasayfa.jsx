import {useEffect,useState} from "react"
import ProductKart from "../componets/ProductKart";
function Anasayfa(){
   
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/products")
        .then((res)=> res.json())
        .then((data)=> { 
            console.log(data);
            setProducts(data);
        });
    }, []);
    return (
        <div className="grid grid-cols-5 gap-4 p-5">
            {products.map((item)=>(
                <ProductKart key={item.id} product={item}/>
            ))}
     
        </div>
        
    )
}
export default Anasayfa;