import Header from "./component/Header";
import About from "./component/Home/About";
import Featured from "./component/Home/Featured";
import HomeHero from "./component/Home/HomeHero";
import WhyChooseUs from "./component/Home/WhyChooseUs";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HomeHero />
      <Featured />
      <About />
      <WhyChooseUs />
    </main>
  );
}
