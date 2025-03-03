import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Counter from "./components/Counter";  // Import the Counter component
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <MainContent />
      <Footer />

      {/* Render the Counter Component */}
      <Counter />

      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Vite + React</h1>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
