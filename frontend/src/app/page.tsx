"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [test, setTest] = useState();

  const getTest = async () => {
    const response = await axios.get(
      "https://figure-forge-shop-app.azurewebsites.net/client"
    );
    setTest(await response.data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Typo titans</h1>
      <h1>frontpage</h1>
      <button onClick={getTest}>test 1</button>
      {test && <h1>{test}</h1>}
    </main>
  );
}
