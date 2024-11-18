import { useEffect,useState } from "react"
import Card from "./componentss/Card"
import Footer from "./componentss/Footer"
import Navbar from "./componentss/Navbar"
import axios from "axios"

function Home(){

    const [blog,setBlog] = useState([])

    const sdelete = async ()=>{
        const response= await axios.delete("http://localhost:3000/blog/67380afd78e8838d8ee2b8d6")
        alert("delete vayo")
    }
    

    const fetchBlogs = async ()=>{
        
        const response =await axios.get("http://localhost:3000/blog")
        if(response.status === 200)
        {
            setBlog(response.data.data)
        }
        else{
            alert("something wrong")
        }
    }
    useEffect(()=>{
        fetchBlogs()
    },[])

    return(
        <>
        <Navbar/>
        <div className="flex flex-wrap">
            {
                blog.map((data)=>{
                    return(
                        <>
                        
                        <Card blog={data}/>
                        </>
                        
                    )
                })
            }
        
        </div>
        <button onclick={sdelete}>Delete</button>
        <Footer />
        
        </>
    )
}
 export default Home