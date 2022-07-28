import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import WeekBubbleList from "./components/WeekBubbleList";
import CardList from "./components/CardList";
import SelectionCard from "./components/SelectionCard";

function App() {
  return (
    <>
    <div className='flex flex-col justify-between h-screen'>
      <Navbar/>
      <main className='container mx-auto px-3 pb-12 h-full'>
        {/* <CardList /> */}
        <SelectionCard/>
      </main>
      <Footer/>
    </div>
    </>
  );
}

export default App;
