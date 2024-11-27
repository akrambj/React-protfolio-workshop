import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-between">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
