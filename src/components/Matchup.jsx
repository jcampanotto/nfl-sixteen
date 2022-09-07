import Team from "./Team"

function Matchup() {
  return (
    <div className="flex w-44 bg-base-200 border-2 rounded-lg border-primary/30 ">
      <div className="grid bg-base-300 rounded-box place-items-center">
        <Team/>
      </div>
      <div className="divider divider-horizontal">OR</div>
      <div className="grid bg-base-300 rounded-box place-items-center">
        <Team/>
      </div>
    </div>

  )
}

export default Matchup