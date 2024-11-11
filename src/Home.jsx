import Card from "./Components/Card"
import Navbar from "./components/Navbar"

function Home(){
    return(
        <>
        <Navbar/>
        <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        </div>
        
        </>
    )
}
 export default Home