import CowsHome from "../components/cows/CowListHomePage";
import Footer from "../components/common/Footer";
import Home from "../components/pages/Home";
import CowTable from "../components/cows/CowTable"
import "../index.css"

const HomePage = () => (
    <div class="wrapper">
        <Home/>
        <CowsHome/>
        <CowTable/>
        <Footer/>
    </div>
);

export default HomePage;
