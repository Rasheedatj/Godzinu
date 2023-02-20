import Header from '../components/header'
import Footer from "../components/footer";

const DefautLayout = ({ children }) => {
    return (
        <div className='px-4 md:px-8 lg:px-16 overflow-hidden'>
            <Header />
            {...children}
            <Footer />
        </div>
    )
}

export default DefautLayout