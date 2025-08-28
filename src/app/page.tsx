export default function HomePage() {
  return (
    <section className="grid gap-4">
      <h1 className="text-4xl font-bold">WeOut — Marketing</h1>
      <p className="text-gray-700">Join the waitlist to get early access.</p>
      <a
        href="/privacy"
        className="inline-block rounded-md border px-4 py-2 text-sm font-medium"
      >
        Privacy
      </a>
    </section>
  );
}
