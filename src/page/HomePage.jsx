import DefautLayout from "../layouts";
import Chain from "../components/chain";
import About from "../components/about";
import Swap from "../components/swap";
import Earn from "../components/earn";
import Hexagon from "../components/hexagon";

const HomePage = () => {
    const offset = 150
    return (
        <DefautLayout>
            <Chain offset={offset} />
            <About offset={offset} />
            <Swap offset={offset} />
            <Earn offset={offset} />
            <Hexagon offset={offset} />
        </DefautLayout>
    )
}

export default HomePage