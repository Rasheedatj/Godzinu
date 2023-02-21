import DefautLayout from "./layouts";
import Chain from "./components/chain";
import About from "./components/about";
import Swap from "./components/swap";
import Earn from "./components/earn";
import Hexagon from "./components/hexagon";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <DefautLayout>
        <Chain />
        <About />
        <Swap />
        <Earn />
        <Hexagon />
      </DefautLayout>
    </AnimatePresence>
  );
}

export default App;
