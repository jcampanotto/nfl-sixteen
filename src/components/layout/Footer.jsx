import logo from '../../images/logo.png'

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className="footer p-2 pt-6 bg-base-300 footer-center block">
      <img alt="NFL Logo" src={logo} className="mx-auto h-12 w-12 fill-current mb-5"></img>
      <p className='pb-2'> All logos are trademark of the NFL <br/>This website doesn't earn a dime <br/> {footerYear} </p>
    </footer>
  )
}

export default Footer