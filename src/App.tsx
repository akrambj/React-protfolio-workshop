import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-between">
      <Header />
      <h2>outlet</h2>
      <Footer />
    </div>
  );
};

export default App;
