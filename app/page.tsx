import Header from "./component/Header";
import Featured from "./component/Home/Featured";
import HomeHero from "./component/Home/HomeHero";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HomeHero />
      <Featured />
    </main>
  );
}
