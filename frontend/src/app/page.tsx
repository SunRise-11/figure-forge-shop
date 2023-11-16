"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [test, setTest] = useState();

  const getTest = async () => {
    const response = await fetch(
      "https://figure-forge-shop-app.azurewebsites.net/client"
    );
    setTest(await response.json());
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Typo titans</h1>
      <h1>frontpage</h1>
      <button onClick={getTest}>test</button>
      {test && <h1>{test}</h1>}
    </main>
  );
}
