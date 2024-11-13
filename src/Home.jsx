import Card from "./componentss/Card"
import Navbar from "./componentss/Navbar"

function Home(){
    return(
        <>
        <Navbar/>
        <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        
        </>
    )
}
 export default Home