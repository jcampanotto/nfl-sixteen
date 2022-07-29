import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import WeekBubbleList from "./components/WeekBubbleList";
import CardList from "./components/CardList";
import TeamLogo from "./components/TeamLogo";
import SlotItem from "./components/SlotItem";

function App() {
  return (
    <>
    <div className='flex flex-col justify-between h-screen'>
      <Navbar/>
      <main className='container mx-auto px-3 pb-12 h-full'>
        {/* <CardList /> */}
        <SlotItem/>
      </main>
      <Footer/>
    </div>
    </>
  );
}

export default App;
