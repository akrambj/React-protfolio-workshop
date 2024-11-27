import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./page/HomePage";

const App = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-between">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
