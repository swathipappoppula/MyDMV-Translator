"use client";
import { useState } from "react";


export default function Home() {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");


  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">MyDMV Translator</h1>
      <p className="mt-2 text-gray-600">Learn the DMV in your language.</p>

      <div className="mt-10 max-w-2xl">
        <label className="font-semibold">English DMV Text</label>

        <textarea
          className="mt-2 w-full rounded-lg border p-4"
          rows={6}
          placeholder="Paste DMV text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button 
          className="mt-4 rounded-lg bg-black px-6 py-3 text-white"
          onClick={async () => {
            const res = await fetch("/api/translate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ text }),
            });
            const data = await res.json();
            setTranslation(data.translation);
          }}
        >
          Translate to Telugu
        </button>
        {translation && (
          <p className="mt-4 rounded-lg bg-gray-100 p-4">{translation}</p>
        )}
      </div>
    </main>
  );
}
