
import ProductList from "./components/Product-list";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  return(
    <>
    <Header />
    <div className="min-h-screen bg-gray-100 p-6">
     <ProductList />
    </div>
    <Footer />
    </>
  )
}

export default App;