import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import {useState} from 'react'

function App() {
  const currentWeekFromAPI = 12; // obvi NYI
  const [shownWeek, setShownWeek] = useState(currentWeekFromAPI) // would be default

  function handleChangeWeek(e) {
    setShownWeek(e.target.value)
  }


  return (
    <>
    <div className='flex flex-col justify-between h-screen'>
      <Navbar handleChangeWeek={handleChangeWeek} defaultWeek={currentWeekFromAPI}/>
      <main className='container mx-auto px-3 pb-12 h-full'>
        <h1>{shownWeek}</h1>
      </main>
      <Footer/>
    </div>
    </>
  );
}

export default App;
