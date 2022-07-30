import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
    <div className='flex flex-col justify-between h-screen'>
      <Navbar/>
      <main className='container mx-auto px-3 pb-12 h-full'>
      </main>
      <Footer/>
    </div>
    </>
  );
}

export default App;
