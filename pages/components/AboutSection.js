// Navbar.js
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/packages">Packages</Link>
      <Link href="/coverage">Coverage</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/pay-bill">Pay Bill</Link>
      <Link href="/support">Support</Link>
    </nav>
  );
}

export default Navbar;
