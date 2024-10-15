import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li className="text-white font-bold">
          <Link href="/">Home</Link>
        </li>
        <li className="text-white font-bold">
          <Link href="/about">About</Link>
        </li>
        <li className="text-white font-bold">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="text-white font-bold">
          <Link href="/service">Service</Link>
        </li>
        <li>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
