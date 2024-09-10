import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import WeAreDifferent from "./components/WeAreDifferent";
import HowWeWork from "./components/HowWeWork";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <NavBar />
      <div className="flex flex-col items-center gap-28">
        <Hero />
        <WeAreDifferent />
        <HowWeWork />
        <Footer /> 
      </div>
    </main>
  );
};

export default App;
