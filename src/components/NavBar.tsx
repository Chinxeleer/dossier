import { Link } from "@tanstack/react-router"

function NavBar() {
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" },
  ]
  return (
    <nav className="">
      <Link to="/" className="text-xl ">Dossier<span className="text-green-500">.</span></Link>
      <div className="flex space-x-4 text-sm">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className="hover:underline">
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
