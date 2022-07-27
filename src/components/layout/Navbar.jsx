

function Navbar() {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <p className="btn btn-ghost text-xl">

        </p>
      </div>

      {/* Below is the login photo / dropdown section */}
      <div className="flex-none gap-2 pr-5">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="profile avatar" src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li className="btn">Logout</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar