import { About, Hero } from "../sections";
import Projects from "../sections/Projects";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-5">
      <Hero />
      <About />
      <Projects />
    </main>
  );
};

export default HomePage;
