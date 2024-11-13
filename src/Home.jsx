import Card from "./componentss/Card"
import Footer from "./componentss/Footer"
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
        <Footer />
        
        </>
    )
}
 export default Home