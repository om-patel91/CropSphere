import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSeller from "../components/Bestseller";
import Footer from "../components/footer";
import WhySection from "../components/WhySection";

const Home = () => {
  return (
    <div className="bg-[#f4f3e7]">
      <Navbar />
      <Hero />
      <Categories />
      <BestSeller />
      <WhySection/>
      <Footer />
    </div>
  )
}

export default Home
