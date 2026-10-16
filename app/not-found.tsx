import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-4 px-6">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p>This documentation page may have moved. Search the guides and API reference from the documentation home.</p>
      <Link href="/" className="text-fd-primary underline">Go to documentation</Link>
    </main>
  );
}
