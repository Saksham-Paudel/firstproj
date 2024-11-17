import { useEffect } from "react"
import Card from "./componentss/Card"
import Footer from "./componentss/Footer"
import Navbar from "./componentss/Navbar"
import axios from "axios"

function Home(){

    const sdelete = async ()=>{
        const response= await axios.delete("http://localhost:3000/blog/67380afd78e8838d8ee2b8d6")
        alert("delete vayo")
    }
    

    const fetchBlogs = async ()=>{
        
        const response =await axios.get("http://localhost:3000/blog")
        console.log(response.data.data)
    }
    useEffect(()=>{
        fetchBlogs()
    },[])

    return(
        <>
        <Navbar/>
        <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        <button onclick={sdelete}>Delete</button>
        <Footer />
        
        </>
    )
}
 export default Home