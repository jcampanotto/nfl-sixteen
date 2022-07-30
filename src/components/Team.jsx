import logo from "../images/bears.png"

function Team() {
  return (
    <img src={logo} alt="Chicago Bears" className="w-12 h-12 cursor-pointer hover:bg-green-300" />
  )
}

export default Team