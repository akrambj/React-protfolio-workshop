import { About, Hero } from "../sections";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-5">
      <Hero />
      <About />
    </main>
  );
};

export default HomePage;
