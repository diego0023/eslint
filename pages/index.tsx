import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <h1>Pagina principal</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/location">Location</Link>
        </li>
      </ul>
    </section>
  );
}
