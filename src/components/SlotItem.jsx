import TeamLogo from "./TeamLogo"
import BearsLogo from "../images/bears.png"
import PackersLogo from "../images/packers.png"
import {useState} from 'react'

function SlotItem() {
  const homeTeam = {
    logo: BearsLogo,
    team: "Chicago Bears",
  }

  const awayTeam = {
    logo: PackersLogo,
    team: "Green Bay Packers",
  }

  const [selectedTeam, setSelectedTeam] = useState("")
  
  function changeSelected(e) {
    setSelectedTeam(e.target.id)
  }
  
  return (
    <div>
      <div id="home" onClick={changeSelected}>
        <TeamLogo team={homeTeam} selectedTeam={selectedTeam}/>
      </div>
      <div id="away" onClick={changeSelected}>
        <TeamLogo team={awayTeam}/>
      </div>
    </div>
  )
}

export default SlotItem