import Banner from "../components/HeroBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";

const bannerData = {
    img: "aboutImage.jpg"
};

const About = () => {
    return (
        <div>
            <Header />
            <Banner bannerData={bannerData} />
            ABOUT
            <Footer />
        </div>
    );
};

export default About;