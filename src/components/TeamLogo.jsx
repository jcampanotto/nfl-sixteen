function TeamLogo({team, selectedTeam}) {
  console.log(selectedTeam)
  return (
    <div>
      <div className="avatar mt-10">
        <div className="w-20 hover:ring-4">
          <img id={team.team} alt="Team Logo" src={team.logo}></img>
        </div>
      </div>
    </div>
  )
}

export default TeamLogo