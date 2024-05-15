import Header from "./component/Header";
import About from "./component/Home/About";
import Featured from "./component/Home/Featured";
import Footer from "./component/Home/Footer";
import HomeHero from "./component/Home/HomeHero";
import WhyChooseUs from "./component/Home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeHero />
      <Featured />
      <About />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
