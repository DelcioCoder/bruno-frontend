import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header>
        <nav className="flex items-center space-x-20 h-10 navbar">
          <div className="ml-5">
            <h2 className="text-white font-bold text-2xl">Logo</h2>
          </div>
          <ul className="flex space-x-7 text-white justify-center items-center">
            <li>
              <Link className="font-extralight cursor-pointer transition hover:opacity-80 duration-200" to="/">Home</Link>
            </li>

            <li>
              <Link className="font-extralight transition hover:opacity-80 duration-200" to="/about">Sobre nós</Link>
            </li>

            <li>
              <Link className="font-extralight transition hover:opacity-80 duration-200" to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
