import logo from '../../images/logo.png'

function Footer() {
  return (
    <footer className="footer p-2 pt-10 bg-base-300 text-primary-content footer-center">
      <img alt="NFL Logo" src={logo} className="mx-auto h-12 w-12 fill-current"></img>
      <p className='pb-2'> All logos are trademark of the NFL. <br/>This website doesn't earn a dime. <br/> Date</p>
    </footer>
  )
}

export default Footer