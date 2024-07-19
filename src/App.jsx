import "./App.css";
import Home from "./pages/Home";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <main className="main">
      <Home />
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </main>
  );
}

export default App;
