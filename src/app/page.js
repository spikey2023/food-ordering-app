import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <header>
      <Link href=""> ST Hamburger</Link>
      <nav>
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link href={''}>Login</Link>
      </nav>
    </header>
    </>
  );
}
