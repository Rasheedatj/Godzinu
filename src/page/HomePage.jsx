import DefautLayout from "../layouts";
import Chain from "../components/chain";
import About from "../components/about";
import Swap from "../components/swap";
import Earn from "../components/earn";
import Hexagon from "../components/hexagon";
import MediumPost from "../api/mediumPost";
const HomePage = () => {
  const postId = "GODZinu_io";
  const apiKey = "5424b54b56msh33a2871700b6e9dp156c33jsn6683997ba1c6";
  const offset = 150;
  return (
    <DefautLayout>
      <Chain offset={offset} />
      <About offset={offset} />
      <Swap offset={offset} />
      <Earn offset={offset} />
      <Hexagon offset={offset} />
      <div className="App">
        <MediumPost postId={postId} apiKey={apiKey} />
      </div>
    </DefautLayout>
  );
};

export default HomePage;
