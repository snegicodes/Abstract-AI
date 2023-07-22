import "./App.css";

import Hero from "./components/Hero";

const App = () => {
  //   return <div> App</div>;
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
      </div>
    </main>
  );
};

export default App;
