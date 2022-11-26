import Logo from "./assets/pics/Logo.png"

function Footer() {
    const footerYear = new Date().getFullYear();
  return (
    <div className="bg-[#083045]">
        <img src={Logo} alt="logo" className="w-1/6 mx-auto"/>
        <h1 className=" text-neutral-content font-semibold text-center">Copyright &copy; {footerYear} by Garb2Mon </h1>
    </div>
  )
}

export default Footer