import CowsHome from "../components/cows/CowListHomePage";
import Footer from "../components/common/Footer";
import Home from "../components/pages/Home";
import "../index.css"

const HomePage = () => (
    <div class="wrapper">
        <Home/>
        <CowsHome/>
        <Footer/>
    </div>
);

export default HomePage;
