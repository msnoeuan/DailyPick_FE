// ./src/pages/Home.jsx
import Nav from "../components/Nav"
import Banner from "../components/Banner"
import StatsSummary from "../components/StatsSummary"
import StoreComp from '../components/StoreComp'
import Footer from "../components/Footer"

function Home() {
    return (
        <>
            <Nav />
            <Banner />
            <StatsSummary />
            <div className="flex flex-row items-center bg-bgYellow h-150 gap-3 px-5 justify-center">
                <StoreComp />
                <StoreComp />
                <StoreComp />
                <StoreComp />
            </div>
            <Footer />
            
        </>
    )

}

export default Home