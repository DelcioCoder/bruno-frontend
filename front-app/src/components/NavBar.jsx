import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="bg-zinc-600 h-6">
        <ul className="flex space-x-7 text-white justify-center items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre nós</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
