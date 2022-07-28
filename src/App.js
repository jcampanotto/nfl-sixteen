import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import WeekDropdown from "./components/WeekDropdown";
import WeekBubbleList from "./components/WeekBubbleList";
import CardList from "./components/CardList";

function App() {
  return (
    <>
    <div className='flex flex-col justify-between h-screen'>
      <Navbar/>
      <main className='container mx-auto px-3 pb-12 h-full'>
        <WeekBubbleList/>
        <WeekDropdown/>
        <CardList />
      </main>
      <Footer/>
    </div>
    </>
  );
}

export default App;
