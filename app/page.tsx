export default function Home() {
  return (
    <main className="min-h-screen bg-white p-10 text-black">
      <h1 className="text-4xl font-bold">MyDMV Translator</h1>

      <p className="mt-2 text-gray-600">Learn the DMV in your language.</p>

      <div className="mt-10 max-w-2xl">
        <label className="font-semibold">English DMV Text</label>

        <textarea
          className="mt-2 w-full rounded-lg border p-4"
          rows={6}
          placeholder="Paste DMV text here..."
        />

        <button className="mt-4 rounded-lg bg-black px-6 py-3 text-white">
          Translate to Telugu
        </button>
      </div>
    </main>
  );
}
