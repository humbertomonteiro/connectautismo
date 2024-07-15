import "./App.css";
import Home from "./pages/Home";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <main className="main">
      <Home />
    </main>
  );
}

export default App;
