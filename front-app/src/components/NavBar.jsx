import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

//framer motion library
import { motion, AnimatePresence } from "framer-motion";

//variants for the container and your items
const container = {
  hidden: {
    y: "-100",
    opacity: 0,
    transition: { duration: 0.5 },
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header>
        <nav className="flex items-center justify-between h-16 navbar px-5">
          {/* Logo */}
          <div>
            <h2 className="text-white font-bold text-2xl">Logo</h2>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-7 text-white justify-center items-center m-0 p-0">
            <li>
              <Link
                className="font-extralight cursor-pointer transition hover:opacity-80 duration-200"
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="font-extralight transition hover:opacity-80 duration-200"
                to="/about"
              >
                Sobre nós
              </Link>
            </li>

            <li>
              <Link
                className="font-extralight transition hover:opacity-80 duration-200"
                to="/contact"
              >
                Contacto
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden border-[0.2px] p-2 flex items-center justify-end border-solid rounded-sm border-zinc-300">
            {showMenu ? (
              <FaTimes
                className="fatimes-icon cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              />
            ) : (
              <FaBars
                className="fabars-icon cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              />
            )}
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {showMenu && (
            <motion.ul className="md:hidden flex flex-col space-y-4 sidebar text-white p-5"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={container}
            >
              <motion.li variants={item}>
                <Link
                  smooth={true}
                  duration={600}
                  className="font-extralight cursor-pointer transition hover:opacity-80 duration-200"
                  to="/"
                  onClick={() => setShowMenu(false)}
                >
                  Home
                </Link>
              </motion.li>

              <motion.li variants={item}>
                <Link
                  smooth={true}
                  duration={600}
                  className="font-extralight transition hover:opacity-80 duration-200"
                  to="/about"
                  onClick={() => setShowMenu(false)}
                >
                  Sobre nós
                </Link>
              </motion.li>

              <motion.li variants={item}>
                <Link
                  smooth={true}
                  duration={600}
                  className="font-extralight transition hover:opacity-80 duration-200"
                  to="/contact"
                  onClick={() => setShowMenu(false)}
                >
                  Contacto
                </Link>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
