import CowsHome from "../components/CowObjects/cowsForHomePage";
import Footer from "../components/Home/Footer";
import Introduction from "../components/Home/Introduction";
import "../index.css"

export default () => (
    <div class="wrapper">
        <Introduction/>
        <CowsHome/>
        <Footer/>
    </div>
);
