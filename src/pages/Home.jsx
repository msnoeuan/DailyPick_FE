// ./src/pages/Home.jsx
import Nav from "../components/Nav"
import Banner from "../components/Banner"
import StoreComp from '../components/StoreComp'

function Home() {
    return (
        <>
            <Nav />
            <Banner />

            <div className="flex flex-row bg-bgYellow h-150 py-10 gap-3 px-5 justify-center">
                <StoreComp />
                <StoreComp />
                <StoreComp />
                <StoreComp />
            </div>
        </>
    )

}

export default Home