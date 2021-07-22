import Footer from './components/Footer'
import Header from './components/Header'

const Theme = ({ children }) => (
    <>
        <Header/>
            {children}
        <Footer />
    </>
)

export default Theme