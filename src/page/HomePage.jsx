import DefautLayout from "../layouts";
import Chain from "../components/chain";
import About from "../components/about";
import Swap from "../components/swap";
import Earn from "../components/earn";
import Hexagon from "../components/hexagon";
import MediumPost from "../components/mediumPost";

const HomePage = () => {
  const offset = 150;
  return (
    <DefautLayout>
      <Chain offset={offset} />
      <About offset={offset} />
      <Swap offset={offset} />
      <Earn offset={offset} />
      <Hexagon offset={offset} />
      <MediumPost />
    </DefautLayout>
  );
};

export default HomePage;
