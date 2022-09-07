import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import {useState} from 'react'
import MatchupList from "./components/MatchupList";

function App() {
  const currentWeekFromAPI = 12; // obvi NYI
  const [shownWeek, setShownWeek] = useState(currentWeekFromAPI) // would be default

  function handleChangeWeek(e) {
    setShownWeek(e.target.value)
  }


  return (
    <>
    <div className='flex flex-col h-screen'>
      <Navbar handleChangeWeek={handleChangeWeek} defaultWeek={currentWeekFromAPI}/>
      <main className='h-full'>
        <MatchupList/>
      </main>
      <Footer/>
    </div>
    </>
  );
}

export default App;
